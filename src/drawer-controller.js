import { t } from './i18n/i18n.js';

/**
 * Club detail drawer (issue #2).
 *
 * A single persistent <aside> in the DOM whose contents are re-rendered
 * whenever the selection changes. Keeping one element (rather than
 * creating/destroying it) means focus management and CSS transitions stay
 * simple, and screen readers see a stable landmark.
 *
 * Behaviour contract:
 * - Opens when a club is selected, closes when the selection is cleared.
 * - Esc closes it; closing returns focus to the row that opened it.
 * - Focus is trapped while open on narrow viewports, where the drawer is a
 *   modal sheet covering the page. On wide viewports it is a non-modal
 *   side panel, so focus is *not* trapped and the table stays usable.
 */

const CONTACT_META = {
  email: { icon: '\u2709', labelKey: 'contactEmail', href: v => `mailto:${v}` },
  mobile_phone: { icon: '\u260e', labelKey: 'contactMobilePhone', href: v => `tel:${v.replace(/[^\d+]/g, '')}` },
  whatsapp: { icon: '\u{1F4AC}', labelKey: 'contactWhatsapp', href: v => `https://wa.me/${v.replace(/[^\d]/g, '')}` },
  kakaotalk: { icon: '\u{1F4AD}', labelKey: 'contactKakaotalk', href: v => (/^https?:\/\//.test(v) ? v : null) },
  instagram: { icon: '\u{1F4F7}', labelKey: 'contactInstagram', href: v => `https://instagram.com/${v.replace(/^@/, '')}` }
};

const MODAL_BREAKPOINT = '(max-width: 899px)';
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

let rootEl = null;
let onCloseCallback = null;
let lastFocusedEl = null;

function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function isModal() {
  return window.matchMedia(MODAL_BREAKPOINT).matches;
}

/** One "Label / value" line. Values that are null/empty render as "-". */
function row(labelKey, value) {
  const shown = value === null || value === undefined || value === ''
    ? t('drawer.emptyValue')
    : value;
  return `<div class="drawer-row">
      <dt>${esc(t('drawer.' + labelKey))}</dt>
      <dd>${shown}</dd>
    </div>`;
}

function boolValue(v) {
  if (v === null || v === undefined || v === '') return null;
  const truthy = v === 1 || v === true || v === '1' || v === 'true';
  return `<span class="${truthy ? 'badge-true' : 'badge-false'}">${esc(truthy ? t('table.yes') : t('table.no'))}</span>`;
}

function linkValue(url, labelKey) {
  if (!url) return null;
  return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(t('drawer.' + labelKey))}</a>`;
}

/**
 * `contact_methods` arrives from v_club_dashboard packed with the same
 * delimiters the CSV uses (see tools/schema.py): ";" between entries and
 * ":" between type and value. The value itself can contain ":" (a kakaotalk
 * chat URL, for instance), so only the first ":" is a separator.
 */
function parseContacts(packed) {
  if (!packed) return [];
  return packed.split(';').map(entry => {
    const i = entry.indexOf(':');
    if (i === -1) return null;
    const type = entry.slice(0, i).trim();
    const value = entry.slice(i + 1).trim();
    if (!type || !value || !CONTACT_META[type]) return null;
    return { type, value };
  }).filter(Boolean);
}

function contactsHtml(club) {
  const contacts = parseContacts(club.contact_methods);
  if (!contacts.length) {
    return `<p class="drawer-empty">${esc(t('drawer.noContact'))}</p>`;
  }
  const items = contacts.map(({ type, value }) => {
    const meta = CONTACT_META[type];
    const label = t('drawer.' + meta.labelKey);
    const href = meta.href(value);
    const shown = type === 'instagram' ? '@' + value.replace(/^@/, '') : value;
    const inner = href
      ? `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(shown)}</a>`
      : esc(shown);
    return `<li class="contact-item">
        <span class="contact-icon" aria-hidden="true">${meta.icon}</span>
        <span class="contact-body">
          <span class="contact-label">${esc(label)}</span>
          <span class="contact-value">${inner}</span>
        </span>
      </li>`;
  }).join('');
  return `<ul class="contact-list">${items}</ul>`;
}

function bodyHtml(club) {
  const price = club.estimated_price_per_dive_krw
    ? esc(club.estimated_price_per_dive_krw.toLocaleString()) + ' KRW'
    : null;
  return `
    <section class="drawer-section">
      <h3>${esc(t('drawer.sectionAbout'))}</h3>
      <dl class="drawer-list">
        ${row('city', esc(club.city))}
        ${row('address', esc(club.full_address))}
        ${row('size', esc(club.size))}
        ${row('instructors', esc(club.num_instructors))}
        ${row('years', esc(club.years_of_existence))}
        ${row('languages', esc(club.languages_spoken))}
        ${row('certs', esc(club.certifications))}
        ${row('boat', boolValue(club.owns_boat))}
        ${row('tec', boolValue(club.tec_diving))}
        ${row('free', boolValue(club.freediving))}
        ${row('price', price)}
        ${row('website', linkValue(club.website_url, 'website'))}
        ${row('naverMap', linkValue(club.naver_map_url, 'naverMap'))}
      </dl>
    </section>
    <section class="drawer-section">
      <h3>${esc(t('drawer.sectionContact'))}</h3>
      ${contactsHtml(club)}
    </section>
    <section class="drawer-section">
      <h3>${esc(t('drawer.sectionFeedback'))}</h3>
      <!-- Deliberately empty: there is no free-text notes field to
           summarize yet. Tracked in issue #17. -->
      <p class="drawer-empty" id="drawer-feedback-placeholder">${esc(t('drawer.feedbackPending'))}</p>
    </section>
  `;
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    e.stopPropagation();
    close();
    return;
  }
  // Trap Tab inside the drawer only in modal (narrow-viewport) mode; on
  // desktop the drawer sits beside the table and must not steal tabbing.
  if (e.key !== 'Tab' || !isModal()) return;
  const items = [...rootEl.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

export function close() {
  if (!rootEl || rootEl.hidden) return;
  rootEl.hidden = true;
  document.body.classList.remove('drawer-open');
  document.removeEventListener('keydown', onKeydown, true);
  // Return focus to whatever opened the drawer, but only if it is still in
  // the document — the table re-renders on every state change, so the
  // original row element may already have been replaced.
  if (lastFocusedEl && document.contains(lastFocusedEl)) lastFocusedEl.focus();
  lastFocusedEl = null;
  if (onCloseCallback) onCloseCallback();
}

export function initDrawer(onClose) {
  onCloseCallback = onClose;
  rootEl = document.getElementById('club-drawer');
  rootEl.addEventListener('click', e => {
    if (e.target.closest('[data-drawer-close]')) close();
  });
  // Backdrop click (modal mode only — the backdrop is display:none on desktop).
  document.getElementById('drawer-backdrop').addEventListener('click', close);
}

/**
 * Render the drawer for `club`, or close it when `club` is null. Safe to
 * call on every render pass: re-rendering an already-open drawer keeps it
 * open and does not re-steal focus.
 */
export function renderDrawer(club) {
  if (!rootEl) return;
  if (!club) {
    close();
    return;
  }

  const wasOpen = !rootEl.hidden;
  if (!wasOpen) lastFocusedEl = document.activeElement;

  rootEl.querySelector('#drawer-title').textContent = club.name;
  rootEl.querySelector('#drawer-close').setAttribute('aria-label', t('drawer.close'));
  rootEl.querySelector('#drawer-body').innerHTML = bodyHtml(club);

  // aria-modal only applies in the narrow-viewport sheet layout; on desktop
  // the drawer is a complementary panel that leaves the rest of the page
  // reachable, so claiming modality there would mislead screen readers.
  rootEl.setAttribute('aria-modal', String(isModal()));
  rootEl.hidden = false;
  document.body.classList.add('drawer-open');

  if (!wasOpen) {
    document.addEventListener('keydown', onKeydown, true);
    if (isModal()) rootEl.querySelector('#drawer-close').focus();
  }
}
