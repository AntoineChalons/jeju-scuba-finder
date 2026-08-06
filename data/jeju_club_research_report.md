# Jeju Island Scuba Diving Clubs — Source-Grounded Research Report

Compiled 2026-08-06. Every value below is followed by a markdown link to the exact page it came from, fetched during this research session. `n.a.` = not confirmable from a fetched source.

## Method & caveats (read first)

- **Primary sources used:** Kakao Map place pages (`place.map.kakao.com/<id>`, reached via the Kakao map search/place APIs), the PADI dive-centre locator (`padi.com/dive-center/south-korea/<slug>/`), the Korean dive-shop directory Dive To Korea (`divetokorea.com`), and each shop's own website.
- **Naver Map could not be read.** `map.naver.com`, `m.place.naver.com` and `pcmap.place.naver.com` returned `disallow_by_robots` through the fetcher and an `ncaptcha` block through direct HTTP. **Every `naver_map_url` below is therefore a constructed Naver Map search URL of the form `https://map.naver.com/p/search/<url-encoded Korean name>`, not a verified place-page permalink.** Naver review counts/ratings are consequently `n.a.` throughout; Naver-hosted *blog* reviews (blog.naver.com posts, with dates) were reachable via the Kakao place API's blog-review feed and are reported.
- **TripAdvisor was almost entirely unreachable** (direct HTTP returned a 775-byte block page; the fetcher timed out on 7 of 8 attraction pages). Only the Scuba Life page rendered. TripAdvisor rows are `n.a.` elsewhere, with the page URL noted.
- **Review recency rule applied:** only reviews dated **January 2024 or later** are counted where dates are visible. Kakao's place API exposes a lifetime `review_count` plus the *three most recent* individual star reviews with timestamps — so for each shop I report the lifetime total (clearly labelled) **and** the dated subset that is actually verifiable as 2024+. Blog-review dates are exact and are counted properly.
- **`size`** is an evidence-based estimate keyed to the PADI-listed staff count where available (1–2 = small, 3–5 = medium, 6+ = large), otherwise to other stated evidence; the basis is given each time.
- **`owns_boat`** is taken from an explicit "Dive boat" facility flag on PADI, an explicit `전용보트`/`전용선` claim, or a named vessel. A shop that merely *runs* boat dives is not counted as owning one.
- **`years_of_existence`** is counted from a sourced founding year to 2026.
- PADI locator pages obfuscate e-mail addresses with Cloudflare `data-cfemail`; the addresses below were decoded from that attribute on the fetched page.

---

## 1. DIVEMAP — 다이브맵

| Field | Value | Source |
|---|---|---|
| Official name | DIVEMAP / 다이브맵 (operating entity ㈜엠에이치넷, biz. reg. 796-87-01886) | [Hank App notice page](https://www.hankapp.net/posts/2) |
| City | Seogwipo-si | [Kakao place 775388245](https://place.map.kakao.com/775388245) |
| Address | 제주특별자치도 서귀포시 일주동로 9117, 2층 (법환동 19-1) | [Kakao place 775388245](https://place.map.kakao.com/775388245); also given as "제주특별자치도 서귀포시 일주동로 9117, 2층" on [Hank App](https://www.hankapp.net/posts/2) |
| gps_lat / gps_lng | 33.24692314 / 126.51877015 | [Kakao place 775388245](https://place.map.kakao.com/775388245) |
| website_url | https://www.divemap.kr (Kakao lists https://www.marlinapp.net) | [Hank App](https://www.hankapp.net/posts/2); [Kakao place 775388245](https://place.map.kakao.com/775388245) |
| naver_map_url | https://map.naver.com/p/search/%EB%8B%A4%EC%9D%B4%EB%B8%8C%EB%A7%B5 (constructed search) | see caveats |
| size | medium — operates its own Jeju centre plus a second mainland centre; no staff count published | [Marlin/DiveMap centre page](https://www.marlin.co.kr/270) |
| num_instructors | n.a. (site says only "전세계 No.1 PADI 소속강사") | [Marlin/DiveMap centre page](https://www.marlin.co.kr/270) |
| years_of_existence | n.a. — no founding year published | [Hank App](https://www.hankapp.net/posts/2) |
| owns_boat | n.a. | [Hank App](https://www.hankapp.net/posts/2) |
| tec_diving | n.a. | [Marlin/DiveMap centre page](https://www.marlin.co.kr/270) |
| freediving | n.a. | [Marlin/DiveMap centre page](https://www.marlin.co.kr/270) |
| est. fun-dive price (KRW) | n.a. — no price table on any fetched DIVEMAP page | [Hank App](https://www.hankapp.net/posts/2) |
| languages_spoken | n.a. | [Hank App](https://www.hankapp.net/posts/2) |
| certifications | PADI ("PADI 스쿠버 리뷰 프로그램", "전세계 No.1 PADI 소속강사"); marine-leisure business registered with MOF | [Marlin/DiveMap centre page](https://www.marlin.co.kr/270) |
| email | hank@mhnet.co.kr (also marlin@mhnet.co.kr) | [Hank App](https://www.hankapp.net/posts/2); [Marlin page](https://www.marlin.co.kr/270) |
| mobile_phone | n.a. — only landline 070-4242-2484 | [Kakao place 775388245](https://place.map.kakao.com/775388245) |
| kakaotalk | Channel "다이브맵" — http://pf.kakao.com/_QcMExl/chat | [Hank App](https://www.hankapp.net/posts/2) |
| whatsapp | n.a. | [Hank App](https://www.hankapp.net/posts/2) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/775388245](https://place.map.kakao.com/775388245) |
| Naver blog reviews (via Kakao feed) | n.a. | 4 of 4, all 2026-01-30 → 2026-04-02 | [2026-04-02 fam-tour post](https://blog.naver.com/wiseoceans/224238013269), [2026-03-15](https://blog.naver.com/wiseoceans/224217024208), [2026-01-30](https://blog.naver.com/wiseoceans/224165357856) |
| TripAdvisor | n.a. (page blocked) | n.a. | [DIVEMAP Jeju Scuba Diving](https://www.tripadvisor.com/Attraction_Review-g297892-d34367493-Reviews-DIVEMAP_Jeju_Scuba_Diving-Seogwipo_Jeju_Island.html) |

Recent sentiment: no dated customer star-reviews exist since Jan 2024; the only 2024+ content is four promotional/operator-side Naver blog posts, so sentiment is unmeasurable rather than positive or negative. **Note: no PADI locator page exists — `padi.com/dive-center/south-korea/divemap/` returns HTTP 404.**

---

## 2. Good Diver — 굿다이버

| Field | Value | Source |
|---|---|---|
| Official name | Good Diver / 굿다이버 (GOOD DIVER) | [PADI: Good Diver](https://www.padi.com/dive-center/south-korea/good-diver/); [gooddiver.com centre page](https://www.gooddiver.com/center) |
| City | Seogwipo-si (Gangjeong-dong) | [Kakao place 618999865](https://place.map.kakao.com/618999865) |
| Address | 제주특별자치도 서귀포시 중산간서로 41 (강정동) / "41, Jungsanganseo-ro, Seogwipo-si, 63558" | [Kakao place 618999865](https://place.map.kakao.com/618999865); [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| gps_lat / gps_lng | 33.26108383 / 126.50605654 (PADI: 33.2610247 / 126.5037501) | [Kakao place 618999865](https://place.map.kakao.com/618999865); [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| website_url | https://www.gooddiver.com | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| naver_map_url | https://map.naver.com/p/search/%EA%B5%BF%EB%8B%A4%EC%9D%B4%EB%B2%84 (constructed) | see caveats |
| size | medium — "3 PADI Instructors" listed as staff | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| years_of_existence | n.a. | [gooddiver.com centre page](https://www.gooddiver.com/center) |
| owns_boat | no — PADI facility list has no "Dive boat" entry (classroom, adaptive facility, A/C, Wi-Fi, retail, parking) | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| tec_diving | no — activities are "PADI Scuba Diving, Conservation, PADI First Aid – EFR, Adaptive Diving"; no TecRec | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| freediving | no — no PADI Freediving in activities offered | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| est. fun-dive price (KRW) | 120,000 (boat/island 2 dives; 3 dives 180,000; discover dive 100,000) | [Badaon tourism listing for 굿다이버](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST023244) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| certifications | PADI (5 Star IDC centre) | [gooddiver.com centre page](https://www.gooddiver.com/center); [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| email | gooddiver@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| mobile_phone | n.a. — listed number is landline +82 64-762-7677 | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/good-diver/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 (3 reviews lifetime) | **0** — the three visible reviews are dated 2022-06-24, 2021-05-05, 2019-07-29 | [place.map.kakao.com/618999865](https://place.map.kakao.com/618999865) |
| Naver blog reviews | n.a. | 4 of 6 visible, dated 2026-01-06 → 2026-06-10 | [2026-06-10 night-diving specialty](https://blog.naver.com/friedtomato_/224311631300), [2026-01-06 solo winter fun dive](https://blog.naver.com/friedtomato_/224136772493) |
| Visit Jeju | n.a. (page returned `bad_robots_code`) | n.a. | [Visit Jeju 굿다이버](https://m.visitjeju.net/kr/detail/view?contentsid=CNTS_200000000008211) |
| TripAdvisor | n.a. (fetch failed) | n.a. | [Good Diver on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297885-d16881843-Reviews-Good_Diver-Jeju_Jeju_Island.html) |

Recent sentiment: no star reviews since Jan 2024, but a steady stream of positive 2026 Naver blog write-ups (photo-heavy fun/discover dives, night-diving specialty courses) suggests an active, well-regarded training centre.

---

## 3. Mako Dive — 마코다이브

| Field | Value | Source |
|---|---|---|
| Official name | Mako Dive / 마코다이브 | [PADI: Mako Dive](https://www.padi.com/dive-center/south-korea/mako-dive-2/); [makodive.imweb.me](https://makodive.imweb.me/) |
| City | Seogwipo-si (Donghong-dong) | [Kakao place 1946299507](https://place.map.kakao.com/1946299507) |
| Address | 제주특별자치도 서귀포시 동홍로 133 (동홍동 558-2) | [makodive.imweb.me](https://makodive.imweb.me/); [Bizw listing](https://m.bizw.kr/m_review.php?id=98277) |
| gps_lat / gps_lng | 33.26043215 / 126.56733157 | [Kakao place 1946299507](https://place.map.kakao.com/1946299507) |
| website_url | https://makodive.imweb.me/ | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| naver_map_url | https://map.naver.com/p/search/%EB%A7%88%EC%BD%94%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | medium — 3 PADI Instructors; site describes a resident instructor couple | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/); [makodive.imweb.me](https://makodive.imweb.me/) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| years_of_existence | n.a. | [makodive.imweb.me](https://makodive.imweb.me/) |
| owns_boat | yes — "Dive boat" listed among facilities | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| tec_diving | yes — "PADI TecRec" and "Rebreather/CCR Diving" in activities offered | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| freediving | no — freediving not among activities offered | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| est. fun-dive price (KRW) | 120,000 (boat fun dive ×2); shop blog quotes 130,000 for 2 dives all-inclusive; discover boat dive 100,000 | [Bizw price list](https://m.bizw.kr/m_review.php?id=98277); [Mako blog price post](https://blog.naver.com/makodive/222755201302) |
| languages_spoken | Korean, Chinese | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| certifications | PADI (5 Star; TecRec, CCR) | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |
| email | makodive@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/); [makodive.imweb.me](https://makodive.imweb.me/) |
| mobile_phone | +82-10-2370-8214 | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/); [makodive.imweb.me](https://makodive.imweb.me/) |
| kakaotalk | n.a. | [makodive.imweb.me](https://makodive.imweb.me/) |
| whatsapp | n.a. (WeChat listed as social channel) | [PADI](https://www.padi.com/dive-center/south-korea/mako-dive-2/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 3.7 (3 reviews lifetime, incl. one 1-star) | **0** — visible reviews dated 2021-06-10, 2020-10-21, 2019-10-12 | [place.map.kakao.com/1946299507](https://place.map.kakao.com/1946299507) |
| Naver blog reviews | n.a. | 42 lifetime; the 4 most recent visible are all Aug 2024 | [2024-08-20 discover-dive review](https://blog.naver.com/sora5517/223554829331), [2024-08-10 fun-dive review](https://blog.naver.com/makodive/223543260176) |
| Naver blog (customer, 2026) | n.a. | 1 — 2026 discover-dive review noting 80,000–100,000 KRW seasonal pricing and a 1:1 session | [2026 Mako discover-dive review](https://blog.naver.com/dltnwls816/224334924515) |

Recent sentiment: positive but thin — 2024–2026 blog reviews praise small-group/1:1 attention and photos; the only negative signal (a 1-star Kakao rating) predates 2024.

---

## 4. Seastar Dive — 제주씨스타다이브

| Field | Value | Source |
|---|---|---|
| Official name | Seastar Dive / 제주씨스타다이브 (Jeju Seastar Dive) | [PADI: Seastar Dive](https://www.padi.com/dive-center/south-korea/seastar-dive/); [Kakao place 948132249](https://place.map.kakao.com/948132249) |
| City | Seogwipo-si (Hogeun-dong) | [Kakao place 948132249](https://place.map.kakao.com/948132249) |
| Address | 제주특별자치도 서귀포시 서호호근로 154 (호근동) | [Kakao place 948132249](https://place.map.kakao.com/948132249); PADI gives "154, Seohohogeun-ro, Seogwipo-si" — [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| gps_lat / gps_lng | 33.260991 / 126.524816 | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| website_url | https://blog.naver.com/inst_haenjoo | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/); [Kakao place 948132249](https://place.map.kakao.com/948132249) |
| naver_map_url | https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EC%94%A8%EC%8A%A4%ED%83%80%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | medium — 3 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| years_of_existence | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| owns_boat | no — facilities are classroom, Wi-Fi, retail, on-site accommodation, parking; no dive boat | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| tec_diving | no — activities: PADI Scuba Diving, PADI Freediving, Snorkelling, Conservation, EFR | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| freediving | yes — "PADI Freediving" offered; freediving equipment rental available | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| est. fun-dive price (KRW) | n.a. — the shop's fun-dive price post exists but did not render | [Seastar fun-dive price post](https://blog.naver.com/inst_haenjoo/223854826766) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| certifications | PADI (incl. IDC — 2026 PADI IDC course announced) | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/); [2026 IDC notice](https://blog.naver.com/inst_haenjoo/224178030686) |
| email | herro12@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| mobile_phone | +82-10-6255-0987 | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/); [Kakao place 948132249](https://place.map.kakao.com/948132249) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/seastar-dive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/948132249](https://place.map.kakao.com/948132249) |
| Naver blog reviews | n.a. | 3 of the 4 visible are 2026 (2026-06-12 customer review; two 2026-02-10 operator notices) | [2026-06-12 customer review](https://blog.naver.com/hi2547225/224314154551), [2026 price list](https://blog.naver.com/inst_haenjoo/224177989146) |

Recent sentiment: the one dated 2026 customer account is dramatic but ultimately favourable (a panic/hyperventilation incident handled by the instructor); otherwise only operator posts, so the sample is too small to generalise.

---

## 5. My Town Diver Bros — 우리동네 잠수하는 형들

| Field | Value | Source |
|---|---|---|
| Official name | My Town Diver Bros / 우리동네잠수하는형들 | [PADI: My Town Diver Bros](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/); [jejumtdb-mo.imweb.me](https://jejumtdb-mo.imweb.me/) |
| City | **Jeju City** (Jocheon-eup, Hamdeok/Sinheung area) — the only Jeju-si shop besides My Divers and Sea Sky | [Kakao place 247230821](https://place.map.kakao.com/247230821) |
| Address | 제주특별자치도 제주시 조천읍 조함해안로 330-1, 1층 101호 (신흥리) | [Kakao place 247230821](https://place.map.kakao.com/247230821); [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| gps_lat / gps_lng | 33.54962357 / 126.6528513 | [Kakao place 247230821](https://place.map.kakao.com/247230821) |
| website_url | https://jejumtdb-mo.imweb.me/ | [Kakao place 247230821](https://place.map.kakao.com/247230821) |
| naver_map_url | https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4%EC%9E%A0%EC%88%98%ED%95%98%EB%8A%94%ED%98%95%EB%93%A4 (constructed) | see caveats |
| size | medium — 3 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| years_of_existence | n.a. | [jejumtdb-mo.imweb.me](https://jejumtdb-mo.imweb.me/) |
| owns_boat | no — facilities are classroom, adaptive facility, A/C, Wi-Fi, food & drinks, parking | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| tec_diving | no — activities: PADI Scuba Diving, Conservation, EFR | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| est. fun-dive price (KRW) | n.a. for fun dives; Hamdeok beach **discover** dive advertised at 65,000 (list 80,000), and a 59,000 90-minute discover session was quoted by a customer | [Tamnao product page](https://www.tamnao.com/web/sp/detailPrdt.do?prdtNum=SP00002740); [customer price comparison post](https://blog.naver.com/urimalo_/222405257104) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| certifications | PADI ("PADI 전문 강사"; ELITE INSTRUCTOR awards) | [jejumtdb-mo.imweb.me](https://jejumtdb-mo.imweb.me/) |
| email | lmw0556@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| mobile_phone | +82-10-8382-0727 | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/); [Kakao place 247230821](https://place.map.kakao.com/247230821) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/) |
| whatsapp | n.a. (Facebook, Instagram @jeju.mytown.diver and YouTube @MTDBrother listed) | [PADI](https://www.padi.com/dive-center/south-korea/my-town-diver-bros/); [Kakao place 247230821](https://place.map.kakao.com/247230821) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no star reviews returned | 0 | [place.map.kakao.com/247230821](https://place.map.kakao.com/247230821) |
| Naver blog reviews | n.a. | 3 of 3 visible are 2025-10 → 2026-05 | [2026-05-09 one-day class review](https://blog.naver.com/happybogus526/224280215587), [2026-05-07 review](https://blog.naver.com/nozistudio/224277785381), [2025-10-13 Hamdeok review](https://blog.naver.com/almangooo/224040031710) |

Recent sentiment: consistently positive 2025–2026 blog coverage of the "one-day class" format — reviewers highlight diving in the real sea rather than a pool, and beginner-friendly coaching.

---

## 6. Into Dive — 인투다이브

| Field | Value | Source |
|---|---|---|
| Official name | INTODIVE / 인투다이브 | [intodive.com](http://intodive.com/); [PADI: Into Dive](https://www.padi.com/dive-center/south-korea/into-dive/) |
| City | Seogwipo-si (Seohong-dong) | [Kakao place 637159505](https://place.map.kakao.com/637159505) |
| Address | 제주특별자치도 서귀포시 남성중로 169, 1층 (서홍동) | [Kakao place 637159505](https://place.map.kakao.com/637159505); [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| gps_lat / gps_lng | 33.24688119 / 126.55269986 (PADI: 33.2542 / 126.55472) | [Kakao place 637159505](https://place.map.kakao.com/637159505); [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| website_url | https://www.intodive.com | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| naver_map_url | https://map.naver.com/p/search/%EC%9D%B8%ED%88%AC%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | medium — 3 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| years_of_existence | n.a. | [intodive.com](http://intodive.com/) |
| owns_boat | yes — "Dive boat" listed in facilities (with on-site training pool, house reef, waterfront location) | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| tec_diving | yes — "PADI TecRec" in activities offered; CO2 scrubber/absorbent among services | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| freediving | yes — full PADI freediving ladder on the site (베이직프리다이버 → 마스터프리다이버); "PADI Freediving" + "PADI Mermaid" on PADI | [intodive.com](http://intodive.com/); [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| est. fun-dive price (KRW) | n.a. — the site's "다이빙요금 및 서비스" page did not render | [intodive.com](http://intodive.com/) |
| languages_spoken | Korean (PADI lists Korean only) | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| certifications | PADI (OW → IDC, specialties, TecRec, Freediving, Mermaid, EFR) | [intodive.com](http://intodive.com/); [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| email | diver7942@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |
| mobile_phone | +82-10-3786-9249 | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/); [Kakao place 637159505](https://place.map.kakao.com/637159505) |
| kakaotalk | n.a. (Instagram jeju.intodive listed) | [Kakao place 637159505](https://place.map.kakao.com/637159505) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/into-dive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 (4 reviews lifetime) | **1 verifiable** — most recent visible review dated 2024-03-16, 5★ | [place.map.kakao.com/637159505](https://place.map.kakao.com/637159505) |
| Naver blog reviews | n.a. | 28 lifetime; the 4 most recent visible are 2025-02 → 2025-07 | [2025-07-08 discover-dive review](https://blog.naver.com/okay_yuni/223925933703), [2025-02-18 dry-suit specialty review](https://blog.naver.com/nbssam/223765302072) |

Recent sentiment: uniformly positive — the 2024 Kakao review is 5★ and 2025 blog posts frame it as the shop "real divers" in Seogwipo use, with strong specialty-course coverage.

---

## 7. Splash Diving Center (Jeju) — 스플래시다이빙센터

| Field | Value | Source |
|---|---|---|
| Official name | Splash Diving Center (Jeju) / 스플래시다이빙센터 | [PADI: Splash Diving Center](https://www.padi.com/dive-center/south-korea/splash-diving-center/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| City | Seogwipo-si (Topyeong-dong) | [Kakao place 957593950](https://place.map.kakao.com/957593950) |
| Address | 제주특별자치도 서귀포시 토평남로30번길 29 (63564) | [Kakao place 957593950](https://place.map.kakao.com/957593950); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| gps_lat / gps_lng | 33.26347385 / 126.59201943 | [Kakao place 957593950](https://place.map.kakao.com/957593950) |
| website_url | https://splash-dive.com/jeju/ | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/); [splash-dive.com](https://splash-dive.com/) |
| naver_map_url | https://map.naver.com/p/search/%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C%EB%8B%A4%EC%9D%B4%EB%B9%99%EC%84%BC%ED%84%B0 (constructed) | see caveats |
| size | small–medium — 2 PADI Instructors listed, but two boats and IDC-resort status imply crew beyond the instructor count | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| num_instructors | 2 | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/) |
| years_of_existence | **10** (established 2016; "SINCE 2016") | [splash-dive.com](https://splash-dive.com/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| owns_boat | **yes** — "Two private boats (Splash No.1/No.2) with dual electric lifts depart Seogwipo Port"; "Dive boat" also in PADI facilities | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/); [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/) |
| tec_diving | yes — "Technical diving" service; full-face mask, DPV/SUEX, drysuit, sidemount specialties | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| freediving | no — not listed | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| est. fun-dive price (KRW) | **120,000** (fun dive ×2, private boat; +60,000 per extra dive; night boat 80,000; night beach 70,000) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| certifications | PADI (5 Star Instructor Development Resort) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-splashdive-jeju/) |
| email | longstime@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/) |
| mobile_phone | +82-10-6819-2511 (Kakao lists landline 064-738-0829) | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/); [Kakao place 957593950](https://place.map.kakao.com/957593950) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/) |
| whatsapp | n.a. (Instagram listed) | [PADI](https://www.padi.com/dive-center/south-korea/splash-diving-center/) |

Note: PADI carries a duplicate listing at [splash-resort](https://www.padi.com/dive-center/south-korea/splash-resort/) with identical coordinates, address, e-mail and phone.

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/957593950](https://place.map.kakao.com/957593950) |
| Naver blog reviews | n.a. | 3 of 3 visible, 2025-09 → 2025-10 | [2025-10-29](https://blog.naver.com/ask1233/224056445364), [2025-10-17 PADI 5 Star post](https://blog.naver.com/hggpp/224044604713), [2025-09-08 fun-dive review](https://blog.naver.com/meck-kkabi/223999450990) |

Recent sentiment: positive 2025 blog coverage focused on the private-boat operation; no star-rated customer feedback since Jan 2024.

---

## 8. Bubble Tank — 버블탱크

| Field | Value | Source |
|---|---|---|
| Official name | Bubble Tank / 버블탱크 (제주 버블탱크) | [bubbletank.co.kr](https://www.bubbletank.co.kr/discovery); [PADI: Bubble Tank](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 2012265465](https://place.map.kakao.com/2012265465) |
| Address | 제주특별자치도 서귀포시 칠십리로 100, 버블탱크 (서귀동); PADI lists "41 Budu-ro, Seogwipo-si, 63596" | [Kakao place 2012265465](https://place.map.kakao.com/2012265465); [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| gps_lat / gps_lng | 33.24088261 / 126.56618433 | [Kakao place 2012265465](https://place.map.kakao.com/2012265465) |
| website_url | https://www.bubbletank.co.kr | [Kakao place 2012265465](https://place.map.kakao.com/2012265465) |
| naver_map_url | https://map.naver.com/p/search/%EB%B2%84%EB%B8%94%ED%83%B1%ED%81%AC (constructed) | see caveats |
| size | large — 5 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| num_instructors | 5 | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| years_of_existence | **10** (founded in Yangyang 2016; relocated to Seogwipo 2019) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bubbletank/) |
| owns_boat | yes — "Dive boat" in PADI facilities; markets itself as "제주 보트다이빙 전문" | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/); [funprice page](https://www.bubbletank.co.kr/funprice) |
| tec_diving | **yes, extensively** — Tec Basics, Tec40/45/50, Trimix 65; dedicated "TEC FUN" price list; trimix and CCR rental among services | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bubbletank/); [funprice page](https://www.bubbletank.co.kr/funprice); [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| freediving | yes per PADI activities ("PADI Freediving"); not advertised on the shop's own pages | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| est. fun-dive price (KRW) | **120,000** (boat ×2 incl. snacks); 130,000–139,000 with gear package; night beach 70,000, night boat 80,000; extra dive 60,000 | [funprice page](https://www.bubbletank.co.kr/funprice); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bubbletank/) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| certifications | PADI (TecRec incl. Trimix, Freediving, EFR) | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| email | bubbletank@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| mobile_phone | +82-10-6575-8945 | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/bubble-tank/) |
| whatsapp | n.a. (Facebook, Instagram @jeju_bubbletank, Naver café) | [Kakao place 2012265465](https://place.map.kakao.com/2012265465) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 (7 reviews lifetime) | **1 verifiable** — 2026-06-08, 5★ (other two visible are 2023-11-22 and 2023-06-14) | [place.map.kakao.com/2012265465](https://place.map.kakao.com/2012265465) |
| Naver blog reviews | n.a. | 49 lifetime; 4 most recent visible are 2025-11 → 2026-01 | [2026-01-11 winter discover dive](https://blog.naver.com/jky8945/224142874783), [2025-11-28 six-dive review](https://blog.naver.com/tpdl0323/224091381116) |
| TripAdvisor | n.a. (fetch blocked) | n.a. | [Bubbletank on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297892-d27934826-Reviews-Bubbletank-Seogwipo_Jeju_Island.html) |

Recent sentiment: strongly positive — 5★ Kakao review in 2026 and a heavy, recent Naver blog stream centred on Munseom/Seopseom/Beomseom boat diving and year-round operation.

---

## 9. Jeju Scuba School — 제주스쿠버스쿨

| Field | Value | Source |
|---|---|---|
| Official name | Jeju Scuba School / 제주스쿠버스쿨 | [jejuscubaschool.com](https://jejuscubaschool.com/); [PADI: Jeju Scuba School](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| City | Seogwipo-si (Seoho-dong) | [Kakao place 1994825891](https://place.map.kakao.com/1994825891) |
| Address | 제주특별자치도 서귀포시 서호호근로46번길 68 (서호동) / PADI: "70, Seohohogeun-ro 46beon-gil, 63569" | [Kakao place 1994825891](https://place.map.kakao.com/1994825891); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-jejuscubaschool/) |
| gps_lat / gps_lng | 33.24846926 / 126.52885056 | [Kakao place 1994825891](https://place.map.kakao.com/1994825891) |
| website_url | https://jejuscubaschool.com | [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| naver_map_url | https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EC%8A%A4%EC%BF%A0%EB%B2%84%EC%8A%A4%EC%BF%A8 (constructed) | see caveats |
| size | **large** — 5 PADI Instructors, on-site training pool and accommodation | [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| num_instructors | 5 | [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| years_of_existence | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-jejuscubaschool/) |
| owns_boat | no explicit ownership claim — runs shore and boat diving; no "Dive boat" facility flag on PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-jejuscubaschool/); [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| tec_diving | **yes** — PADI TecRec, Rebreather/CCR, sidemount; trimix, mixed gas and CO2 scrubber among services | [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/); [jejuscubaschool.com](https://jejuscubaschool.com/) |
| freediving | no | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-jejuscubaschool/) |
| est. fun-dive price (KRW) | **120,000** (boat ×2); night boat 100,000, night beach 80,000; gear rental 30,000/day | [fun-diving price page](https://jejuscubaschool.com/fun-diving) |
| languages_spoken | English, Korean (basic English) | [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-jejuscubaschool/) |
| certifications | PADI (OW, AOW, Rescue, DM, IDC, TecRec, Sidemount) | [jejuscubaschool.com](https://jejuscubaschool.com/) |
| email | jejuscubaschool@naver.com | [jejuscubaschool.com](https://jejuscubaschool.com/); [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| mobile_phone | +82-10-4506-4269 (also 010-2965-7123; landline 064-739-7123) | [jejuscubaschool.com](https://jejuscubaschool.com/); [PADI](https://www.padi.com/dive-center/south-korea/jeju-scuba-school/) |
| kakaotalk | KakaoTalk channel consultation offered; channel ID not published | [jejuscubaschool.com](https://jejuscubaschool.com/) |
| whatsapp | n.a. | [jejuscubaschool.com](https://jejuscubaschool.com/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 3.5 (8 reviews lifetime) | **2 verifiable** — 2025-12-12 (5★) and 2024-02-05 (5★); third visible is 2022-06-23 | [place.map.kakao.com/1994825891](https://place.map.kakao.com/1994825891) |
| Naver/Tistory blog reviews | n.a. | 145 lifetime; 4 most recent visible are all 2026 (2026-02-23 → 2026-05-12) | [2026-05-12 English post](https://scubadiving.tistory.com/8), [2026-02-23 PADI Tec 40/45/50 post](https://blog.naver.com/yan7985/224193256928) |

Recent sentiment: mixed-to-positive — the two dated 2024+ Kakao reviews are both 5★, but the 3.5 lifetime average implies older negative ratings; recent output skews toward technical-diving content.

---

## 10. Cozy Dive — 코지 다이브

| Field | Value | Source |
|---|---|---|
| Official name | COZY DIVE / 코지 다이브 | [PADI: Cozy Dive](https://www.padi.com/dive-center/south-korea/cozy-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| City | Seogwipo-si (Seohong-dong) | [Kakao place 1261965184](https://place.map.kakao.com/1261965184) |
| Address | 제주특별자치도 서귀포시 남성로128번길 1-3 (서홍동) | [Kakao place 1261965184](https://place.map.kakao.com/1261965184); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| gps_lat / gps_lng | 33.24236648 / 126.5543892 | [Kakao place 1261965184](https://place.map.kakao.com/1261965184) |
| website_url | https://cozydive.imweb.me | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| naver_map_url | https://map.naver.com/p/search/%EC%BD%94%EC%A7%80%20%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | small — no staff count published on PADI; facilities limited to classroom/retail/parking | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| years_of_existence | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| owns_boat | no — no dive-boat facility flag; boat fun diving run to Munseom/Beomseom/Seopseom | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| tec_diving | no | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| freediving | **yes** — "PADI Freediving" offered; freediving equipment rental | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| est. fun-dive price (KRW) | **140,000** (2 boat fun dives, guide/boarding/tanks/weights/shower incl.); 3 dives 180,000; beach fun dive 40,000/dive | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| languages_spoken | Korean, English, Japanese | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| certifications | PADI | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| email | flownaru@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/) |
| mobile_phone | +82-10-3302-3763 | [PADI](https://www.padi.com/dive-center/south-korea/cozy-dive/); [Kakao place 1261965184](https://place.map.kakao.com/1261965184) |
| kakaotalk | Kakao Channel enquiries 08:00–22:00 (ID not published) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cozydive/) |
| whatsapp | n.a. (Instagram @cozydive) | [Kakao place 1261965184](https://place.map.kakao.com/1261965184) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 (4 reviews lifetime) | **2 verifiable** — 2025-07-26 (5★) and 2025-06-07 (5★); third visible is 2021-06-26 | [place.map.kakao.com/1261965184](https://place.map.kakao.com/1261965184) |
| Naver blog reviews | none returned | 0 | [place.map.kakao.com/1261965184](https://place.map.kakao.com/1261965184) |

Recent sentiment: positive — both 2025 Kakao reviews are 5★; the shop's multilingual (Japanese-capable) small-group positioning is its distinguishing feature.

---

## 11. The Blue Jeju Resort — 제주다이브리조트

| Field | Value | Source |
|---|---|---|
| Official name | The Blue Jeju Resort / 제주다이브리조트 (Jeju Dive Resort) | [PADI: The Blue Jeju Resort](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/); [Kakao place 522790143](https://place.map.kakao.com/522790143) |
| City | Seogwipo-si (Bomok-dong) | [Kakao place 522790143](https://place.map.kakao.com/522790143) |
| Address | 제주특별자치도 서귀포시 칠십리로 479 (보목동), 63599 | [Kakao place 522790143](https://place.map.kakao.com/522790143); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/) |
| gps_lat / gps_lng | 33.2419995 / 126.60169343 | [Kakao place 522790143](https://place.map.kakao.com/522790143) |
| website_url | https://jejudiveresort.modoo.at/ — **dead**: Naver modoo! shut down 2025-06-26; Instagram @jeju_dive_resort is the live channel | [jejudiveresort.modoo.at](https://jejudiveresort.modoo.at/); [Kakao place 522790143](https://place.map.kakao.com/522790143) |
| naver_map_url | https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%8B%A4%EC%9D%B4%EB%B8%8C%EB%A6%AC%EC%A1%B0%ED%8A%B8 (constructed) | see caveats |
| size | large (estimate) — full resort: on-site training pool, classroom, aquarium/deep pool, dive boat, accommodation, retail, house reef | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| num_instructors | n.a. — no staff count published | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| years_of_existence | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/) |
| owns_boat | **yes** — "전용보트"; "Dive boat" in PADI facilities | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/); [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| tec_diving | **yes** — "PADI TecRec"; trimix, mixed gas and CO2 scrubber among services | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/) |
| freediving | **yes** — "PADI Freediving" | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| est. fun-dive price (KRW) | n.a. for fun dives; a visitor blog states tank + weight rental 25,000 and full gear rental 30,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/); [2024 resort blog post](https://blog.naver.com/captain_peanut/223502285383) |
| languages_spoken | English, Korean, Chinese | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-thebluejejuresort/) |
| certifications | PADI (TecRec, Freediving, Adaptive, EFR) | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| email | jeju.dive.resort@gmail.com | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| mobile_phone | +82-10-9757-5775 | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/); [Kakao place 522790143](https://place.map.kakao.com/522790143) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |
| whatsapp | n.a. (Facebook, Instagram) | [PADI](https://www.padi.com/dive-center/south-korea/the-blue-jeju-resort/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no star reviews returned | 0 | [place.map.kakao.com/522790143](https://place.map.kakao.com/522790143) |
| Naver blog reviews | n.a. | 8 lifetime; the 4 visible are all 2025-06-13 | [2025-06-13 review](https://blog.naver.com/kimbomi007/223898498727), [2025-06-13 freediving + lodging review](https://blog.naver.com/okimina80/223898118972) |

Recent sentiment: positive but suspiciously clustered — four same-day 2025 blog posts praising the dive-plus-lodging package read like a coordinated campaign, so treat as marketing rather than organic feedback.

---

## 12. Blue In Dive — 블루인 다이브

| Field | Value | Source |
|---|---|---|
| Official name | Blue In Dive / 블루인다이브 (Blue In Free & Scuba Diving) | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| City | Seogwipo-si (Hogeun-dong) | [Kakao place 1887860384](https://place.map.kakao.com/1887860384) |
| Address | 제주특별자치도 서귀포시 중산간동로 8260 (호근동 795), 63575 | [Kakao place 1887860384](https://place.map.kakao.com/1887860384); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| gps_lat / gps_lng | 33.25630 / 126.53350 (Kakao: 33.26197263 / 126.53451445) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/); [Kakao place 1887860384](https://place.map.kakao.com/1887860384) |
| website_url | http://www.blueinskinscuba.com | [PADI: Blue In](https://www.padi.com/dive-center/south-korea/blue-in/) |
| naver_map_url | https://map.naver.com/p/search/%EB%B8%94%EB%A3%A8%EC%9D%B8%20%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | medium — 2 PADI Instructors on PADI, but the shop claims "제주도내 가장 많은 강사진" with a resident Course Director | [PADI](https://www.padi.com/dive-center/south-korea/blue-in/); [blueinskinscuba.com](https://www.blueinskinscuba.com/intro) |
| num_instructors | 2 (PADI-listed) | [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| years_of_existence | n.a. for founding; relocated/expanded 2019 (7 years at current site) | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| owns_boat | **yes** — "runs its own dive boat to Seogwipo coastal sites"; "전용보트"; "Dive boat" on PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/); [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| tec_diving | yes — "PADI TecRec" in activities offered; trimix among services | [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| freediving | **yes** — "스쿠버&프리다이빙 교육"; "PADI Freediving" | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro); [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| est. fun-dive price (KRW) | **130,000** (boat fun dive ×2, gear extra); beach fun dive ×2 100,000; discover beach 100,000 / island boat 120,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| languages_spoken | Korean, basic English | [PADI](https://www.padi.com/dive-center/south-korea/blue-in/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| certifications | PADI 5 Star IDC Resort, store S-25731; resident Course Director | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-blueindive/) |
| email | bluein_scuba@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| mobile_phone | +82-10-9426-0032 (landline 064-733-1036) | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro); [PADI](https://www.padi.com/dive-center/south-korea/blue-in/) |
| kakaotalk | n.a. | [blueinskinscuba.com](https://www.blueinskinscuba.com/intro) |
| whatsapp | n.a. (Instagram @blue_in_scuba) | [Kakao place 1887860384](https://place.map.kakao.com/1887860384) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 (7 reviews lifetime) | **3 verifiable** — 2025-08-13, 2024-05-21, 2024-05-20, all 5★ | [place.map.kakao.com/1887860384](https://place.map.kakao.com/1887860384) |
| Naver blog reviews | n.a. | 4 of 4 visible are 2024-06 → 2026-07 | [2026-07-17 paid-out-of-pocket review](https://blog.naver.com/atb04128/224349491990), [2025-08-07 price + review](https://blog.naver.com/rohzodiac/223962138540) |

Recent sentiment: clearly positive and the best-verified 2024+ record among Jeju shops — three 5★ Kakao reviews since May 2024 plus independent "내돈내산" (self-funded) blog reviews through July 2026.

---

## 13. OceanCare — (사)오션케어

| Field | Value | Source |
|---|---|---|
| Official name | OceanCare / (사) 오션케어 — a registered marine-conservation association that also runs PADI diving | [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11) |
| City | Seogwipo-si (Pyoseon-myeon, Seongeup-ri) | [Kakao place 1046329383](https://place.map.kakao.com/1046329383) |
| Address | 제주특별자치도 서귀포시 표선면 번영로 2524 (성읍리) | [Kakao place 1046329383](https://place.map.kakao.com/1046329383); [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11) |
| gps_lat / gps_lng | 33.40599997 / 126.776625 (PADI shows a conflicting 33.2423 / 126.4635) | [Kakao place 1046329383](https://place.map.kakao.com/1046329383); [PADI: Oceancare](https://www.padi.com/dive-center/south-korea/oceancare/) |
| website_url | https://www.oceancare.or.kr | [Kakao place 1046329383](https://place.map.kakao.com/1046329383) |
| naver_map_url | https://map.naver.com/p/search/%EC%98%A4%EC%85%98%EC%BC%80%EC%96%B4 (constructed) | see caveats |
| size | small — PADI lists no staff, facilities limited to parking; services limited to equipment sales and rental | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| years_of_existence | n.a. | [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11) |
| owns_boat | no | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| tec_diving | no — activities are "PADI Scuba Diving, Conservation" only | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| est. fun-dive price (KRW) | n.a. — no price list published; the organisation runs underwater clean-up dives rather than commercial fun dives | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| languages_spoken | Korean | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| certifications | PADI | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| email | badaya@oceancare.or.kr (PADI lists badaya@outlook.kr) | [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11); [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |
| mobile_phone | +82-10-4756-5124 (main line 064-787-5152; fax 064-800-8995) | [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11) |
| kakaotalk | n.a. | [oceancare.or.kr](https://www.oceancare.or.kr/default/mp3/mp3_sub1.php?sub=01&com_board_basic=read_form&com_board_idx=3&com_board_id=11) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/oceancare/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/1046329383](https://place.map.kakao.com/1046329383) |
| Naver blog reviews | none returned | 0 | [place.map.kakao.com/1046329383](https://place.map.kakao.com/1046329383) |

Recent sentiment: no consumer feedback exists since Jan 2024 — consistent with a conservation NGO rather than a retail dive shop.

---

## 14. Ocean Tree — 오션트리

| Field | Value | Source |
|---|---|---|
| Official name | Ocean Tree / 오션트리 (Ocean Tree Resort & Diving) | [oceantree.co.kr](http://oceantree.co.kr/); [PADI: Ocean Tree](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| City | Seogwipo-si (Gangjeong-dong) | [Kakao place 972911142](https://place.map.kakao.com/972911142) |
| Address | 제주특별자치도 서귀포시 월드컵로 188 (강정동), 63564 | [Kakao place 972911142](https://place.map.kakao.com/972911142); [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| gps_lat / gps_lng | 33.23287798 / 126.50531826 | [Kakao place 972911142](https://place.map.kakao.com/972911142) |
| website_url | http://oceantree.co.kr | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| naver_map_url | https://map.naver.com/p/search/%EC%98%A4%EC%85%98%ED%8A%B8%EB%A6%AC (constructed) | see caveats |
| size | **large** — 6 PADI Instructors (largest instructor count found on Jeju) | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| num_instructors | 6 | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| years_of_existence | n.a. | [oceantree.co.kr](http://oceantree.co.kr/) |
| owns_boat | no — boating fee is charged separately ("보팅비별도"); no dive-boat facility flag | [diving price page](http://oceantree.co.kr/sh_page/page56.php); [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| tec_diving | no — activities: PADI Scuba Diving only | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| est. fun-dive price (KRW) | **140,000** (2 dives, morning/afternoon; 3 dives 210,000; discover dive 120,000; VAT and boating extra) | [diving price page](http://oceantree.co.kr/sh_page/page56.php) |
| languages_spoken | n.a. — PADI language field is empty | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| certifications | PADI ("PADI 공식 다이빙 센터", DM and instructor courses) | [diving price page](http://oceantree.co.kr/sh_page/page56.php) |
| email | oceantree7@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/ocean-tree/) |
| mobile_phone | +82-10-3692-7252 (landline 064-739-1239) | [diving price page](http://oceantree.co.kr/sh_page/page56.php); [oceantree.co.kr](http://oceantree.co.kr/) |
| kakaotalk | **oceantree7** (KakaoTalk Plus) | [oceantree.co.kr](http://oceantree.co.kr/); [diving price page](http://oceantree.co.kr/sh_page/page56.php) |
| whatsapp | n.a. | [oceantree.co.kr](http://oceantree.co.kr/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 4.4 (20 reviews lifetime — the largest Kakao sample of any club here) | **3 verifiable** — 2025-09-20, 2025-08-20, 2024-04-08, all 5★ | [place.map.kakao.com/972911142](https://place.map.kakao.com/972911142) |
| Naver blog reviews | n.a. | 3 of 4 visible are 2026 (2026-03-31 → 2026-05-29); a 2025-06-28 post is explicitly negative | [2026-05-29 resort review](https://blog.naver.com/yenyo2/224300242946), [2026-04-21 "everything good except the owner"](https://blog.naver.com/skdygks17/224256275795), [2025-06-28 "비추" negative review](https://blog.naver.com/orested/223914909449) |

Recent sentiment: **mixed** — dive-side Kakao ratings since 2024 are all 5★, but recent lodging-side blog posts complain about the owner and one explicitly does not recommend the accommodation.

---

## 15. Dive Stay Resort — 다이브스테이

| Field | Value | Source |
|---|---|---|
| Official name | DIVE STAY / 다이브스테이 | [Kakao place 27200909](https://place.map.kakao.com/27200909); [DiveBnB resort listing](https://www.divebnb.net/home/resort/view.do?resortSn=1578) |
| City | Seogwipo-si (Hahyo-dong) | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| Address | 제주특별자치도 서귀포시 하효중앙로 35 (하효동) | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| gps_lat / gps_lng | 33.25368615 / 126.61974191 | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| website_url | http://www.divestay.co.kr/ (returned `broken_content_ip_and_js` when fetched); Naver café and blog also listed | [Kakao place 27200909](https://place.map.kakao.com/27200909); [divestay.co.kr](http://www.divestay.co.kr/) |
| naver_map_url | https://map.naver.com/p/search/%EB%8B%A4%EC%9D%B4%EB%B8%8C%EC%8A%A4%ED%85%8C%EC%9D%B4 (constructed) | see caveats |
| size | small (estimate) — no staff data on any reachable source; single-site resort with one 2023 review | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| num_instructors | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| years_of_existence | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| owns_boat | n.a. | [DiveBnB listing](https://www.divebnb.net/home/resort/view.do?resortSn=1578) |
| tec_diving | n.a. | [DiveBnB listing](https://www.divebnb.net/home/resort/view.do?resortSn=1578) |
| freediving | n.a. | [DiveBnB listing](https://www.divebnb.net/home/resort/view.do?resortSn=1578) |
| est. fun-dive price (KRW) | n.a. | [DiveBnB listing](https://www.divebnb.net/home/resort/view.do?resortSn=1578) |
| languages_spoken | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| certifications | n.a. — **no PADI locator page exists** (`/dive-center/south-korea/dive-stay/` returns HTTP 404) | [PADI 404](https://www.padi.com/dive-center/south-korea/dive-stay/) |
| email | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| mobile_phone | +82-10-6390-3452 | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| kakaotalk | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |
| whatsapp | n.a. | [Kakao place 27200909](https://place.map.kakao.com/27200909) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/27200909](https://place.map.kakao.com/27200909) |
| Naver blog reviews | n.a. | **0** — the only blog review is dated 2023-09-03, before the cut-off | [2023-09-03 Open Water review](https://blog.naver.com/qksksk6446/223201226971) |

Recent sentiment: **no feedback of any kind dated Jan 2024 or later**, and the website is unreachable — the weakest online footprint of the 33, raising a question over whether the shop is still trading.

---

## 16. My Divers — 마이다이버스

| Field | Value | Source |
|---|---|---|
| Official name | My Divers / 마이다이버스 (MyDivers) | [mydivers.co.kr](http://mydivers.co.kr/); [PADI: My Divers](https://www.padi.com/dive-center/south-korea/my-divers/) |
| City | **Jeju City** (Jocheon-eup, Sinchon-ri) | [Kakao place 1017462398](https://place.map.kakao.com/1017462398) |
| Address | 제주특별자치도 제주시 조천읍 신촌북3길 14-28 (신촌리), 63337 | [Kakao place 1017462398](https://place.map.kakao.com/1017462398); [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| gps_lat / gps_lng | 33.53767872 / 126.61717669 | [Kakao place 1017462398](https://place.map.kakao.com/1017462398) |
| website_url | http://www.mydivers.co.kr | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| naver_map_url | https://map.naver.com/p/search/%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8A%A4 (constructed) | see caveats |
| size | small — PADI lists no staff count and only classroom + A/C as facilities | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| years_of_existence | n.a. | [mydivers.co.kr](http://mydivers.co.kr/) |
| owns_boat | no | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| tec_diving | yes — "PADI TecRec" among activities offered | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| freediving | no course listing, but freediving equipment rental is offered | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| est. fun-dive price (KRW) | n.a. — no price list on the site | [mydivers.co.kr](https://www.mydivers.co.kr) |
| languages_spoken | Korean | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| certifications | PADI 5 Star Instructor Development Center | [mydivers.co.kr](https://www.mydivers.co.kr); [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| email | yryryt@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| mobile_phone | n.a. — only landline +82 64-783-9630 | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/); [Kakao place 1017462398](https://place.map.kakao.com/1017462398) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/my-divers/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/1017462398](https://place.map.kakao.com/1017462398) |
| Naver blog reviews | none returned | 0 | [place.map.kakao.com/1017462398](https://place.map.kakao.com/1017462398) |

Recent sentiment: no dated customer feedback since Jan 2024; the shop presents itself as a training-first PADI 5 Star IDC with a second branch in Ilsan on the mainland.

---

## 17. MDI Scuba — 엠디아이스쿠버

| Field | Value | Source |
|---|---|---|
| Official name | M:DI Scuba / 엠디아이스쿠버 | [mdiscuba.wixsite.com/jeju](https://mdiscuba.wixsite.com/jeju); [PADI: MDI Scuba](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 848288449](https://place.map.kakao.com/848288449) |
| Address | 제주특별자치도 서귀포시 칠십리로 101, 1층 (서귀동) | [Kakao place 848288449](https://place.map.kakao.com/848288449) |
| gps_lat / gps_lng | 33.24138957 / 126.56599299 | [Kakao place 848288449](https://place.map.kakao.com/848288449) |
| website_url | https://mdiscuba.wixsite.com/jeju | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| naver_map_url | https://map.naver.com/p/search/%EC%97%A0%EB%94%94%EC%95%84%EC%9D%B4%EC%8A%A4%EC%BF%A0%EB%B2%84 (constructed) | see caveats |
| size | medium (estimate) — no staff count on PADI, but a national chain with a Seoul head branch and an on-site pool/deep pool + dive boat | [mdiscuba.wixsite.com/jeju](https://mdiscuba.wixsite.com/jeju); [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/); [MDI blog](https://blog.naver.com/mdiscuba/223057144994) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| years_of_existence | n.a. | [mdiscuba.wixsite.com/jeju](https://mdiscuba.wixsite.com/jeju) |
| owns_boat | yes — "Dive boat" among facilities | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| tec_diving | **yes** — "테크니컬 코스 / TEC DEEP & TRIMIX"; PADI TecRec; mixed gas service | [mdiscuba.wixsite.com/jeju](https://mdiscuba.wixsite.com/jeju); [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| freediving | **yes** — "PADI Freediving"; freediving equipment rental; 2025 freediving customer reviews | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/); [2025 freediving review](https://blog.naver.com/nonovely/223947004943) |
| est. fun-dive price (KRW) | **120,000** ("펀다이빙 2회 14만원 → 12만원") | [mdiscuba.wixsite.com/jeju](https://mdiscuba.wixsite.com/jeju) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| certifications | PADI (TecRec, Freediving, Public Safety Diver, Adaptive, EFR) | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| email | mdiscuba@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| mobile_phone | +82-10-3706-5036 (Kakao lists 0503-7153-1572) | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/); [Kakao place 848288449](https://place.map.kakao.com/848288449) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |
| whatsapp | n.a. (Instagram) | [PADI](https://www.padi.com/dive-center/south-korea/mdi-scuba/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (0 reviews lifetime) | 0 | [place.map.kakao.com/848288449](https://place.map.kakao.com/848288449) |
| Naver blog reviews | n.a. | 4 of 4 visible are 2025-07-24/25 | [2025-07-25 freediving review](https://blog.naver.com/nonovely/223947004943), [2025-07-25 scuba review](https://blog.naver.com/herohwangsae/223946433675), [2025-07-24 freediving review](https://blog.naver.com/realppark/223945907921) |

Recent sentiment: positive but campaign-shaped — four favourable freediving/scuba posts published within 48 hours in July 2025, with no independent star ratings to corroborate.

---

## 18. Sea Sky Jeju — 제주바다하늘다이브센터

| Field | Value | Source |
|---|---|---|
| Official name | Sea Sky Jeju / 제주바다하늘다이브센터 | [PADI: Sea Sky Jeju](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/); [Kakao place 18147649](https://place.map.kakao.com/18147649) |
| City | **Jeju City** (Dodu-1-dong) — the only club in this set on the north coast | [Kakao place 18147649](https://place.map.kakao.com/18147649) |
| Address | 제주특별자치도 제주시 도두3길 20 (도두일동) / "20, Dodu 3 gil, jeju-si, 63112" | [Kakao place 18147649](https://place.map.kakao.com/18147649); [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| gps_lat / gps_lng | 33.50439309 / 126.47014246 (PADI: 33.5044581 / 126.4680336) | [Kakao place 18147649](https://place.map.kakao.com/18147649); [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| website_url | https://blog.naver.com/seaskyjeju — the old modoo! site seaskyjeju.modoo.at is **dead** ("modoo!는 2025년 6월 26일부로 서비스를 종료") | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/); [seaskyjeju.modoo.at](https://seaskyjeju.modoo.at/) |
| naver_map_url | https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%B0%94%EB%8B%A4%ED%95%98%EB%8A%98%EB%8B%A4%EC%9D%B4%EB%B8%8C%EC%84%BC%ED%84%B0 (constructed) | see caveats |
| size | **large** — 5 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| num_instructors | 5 | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| years_of_existence | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| owns_boat | **yes** — "Dive boat" among facilities; boat-diving blog posts from the shop | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/); [2026-07-21 boat-dive post](https://blog.naver.com/seaskyjeju/224352918839) |
| tec_diving | no — activities are only "PADI Scuba Diving, PADI First Aid - EFR, PADI Purpose Built Facility" | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| freediving | no — not among activities offered | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| est. fun-dive price (KRW) | n.a. for open-water fun diving. Nearest published figure: **98,000** for the Aqua Planet large-tank discover dive (Visit Jeju page itself returns `bad_robots_code`; value read from the indexed Visit Jeju result) | [Visit Jeju listing](https://m.visitjeju.net/kr/detail/view?contentsid=CNTS_000000000022900&menuId=DOM_000002016004000000) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| certifications | PADI (Purpose Built Facility, EFR); PADI Enriched Air Diver listed at USD 80 | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| email | seaskyjeju@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| mobile_phone | +82-10-8222-2664 (landline 064-702-2664) | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/); [Kakao place 18147649](https://place.map.kakao.com/18147649) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/sea-sky-jeju/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (4 reviews lifetime) | **0** — the three visible reviews are dated 2020-11-25, 2022-08-10, 2021-04-12 | [place.map.kakao.com/18147649](https://place.map.kakao.com/18147649) |
| Naver blog reviews | n.a. (29 lifetime) | 4 of 4 visible are July 2026, but all are **self-published by the shop's own blog** | [2026-07-27](https://blog.naver.com/seaskyjeju/224359009690), [2026-07-22](https://blog.naver.com/seaskyjeju/224354498734), [2026-07-21](https://blog.naver.com/seaskyjeju/224352918839) |
| TripAdvisor | n.a. — page blocked to automated fetch | n.a. | [Jeju Sea Sky Dive Center](https://www.tripadvisor.co.kr/Attraction_Review-g297885-d12339141-Reviews-Jeju_Sea_Sky_Dive_Center-Jeju_Jeju_Island.html) |

Recent sentiment: no independent customer rating since Jan 2024 — the only fresh content is the centre's own marketing blog, so treat the 5.0 Kakao score as stale (last real review 2022).

---

## 19. Haevit Dive — 해빛다이브

| Field | Value | Source |
|---|---|---|
| Official name | Haevit Dive / 해빛다이브 (biz. reg. 734-10-02212) | [haevitdive.com](https://haevitdive.com/haevit/about/); [PADI: Haevit Dive](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 1354596561](https://place.map.kakao.com/1354596561) |
| Address | 제주특별자치도 서귀포시 칠십리로 123, 1층 / "1F 123 Chilsimni-ro, 63596" | [haevitdive.com](https://haevitdive.com/haevit/about/); [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| gps_lat / gps_lng | 33.24306127 / 126.56756954 (PADI: 33.243096 / 126.567645) | [Kakao place 1354596561](https://place.map.kakao.com/1354596561); [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| website_url | http://haevitdive.com | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/); [haevitdive.com](https://haevitdive.com/haevit/about/) |
| naver_map_url | https://map.naver.com/p/search/%ED%95%B4%EB%B9%9B%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **medium** — 4 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| num_instructors | 4 | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| years_of_existence | n.a. | [haevitdive.com](https://haevitdive.com/haevit/about/) |
| owns_boat | **yes** — "다이빙 전용 25인승 배" / purpose-built 25-seat dive boat "Haevit-ho" (12-diver capacity, twin lifts, bow thruster); "Dive boat" in PADI facilities | [haevitdive.com](https://haevitdive.com/haevit/about/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-haevitdive/); [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| tec_diving | no PADI TecRec listing, but the shop offers **Nitrox and mixed-gas fills** | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| freediving | no — not among activities offered | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| est. fun-dive price (KRW) | **100,000** (2 boat fun dives; guide, tanks, light breakfast and lunch included, gear extra). Night dive 120,000; discover dive 100,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-haevitdive/) |
| languages_spoken | English, Korean ("English-speaking, foreigner-friendly") | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-haevitdive/) |
| certifications | PADI 5 Star Dive Center | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-haevitdive/) |
| email | camu521@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| mobile_phone | +82-10-3032-1970 (landline 064-767-1970) | [haevitdive.com](https://haevitdive.com/haevit/about/); [PADI](https://www.padi.com/dive-center/south-korea/haevit-dive/) |
| kakaotalk | n.a. — Dive To Korea says the fastest channel is Instagram DM @haevit_dive | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-haevitdive/) |
| whatsapp | n.a. (Instagram @haevit_dive is the listed homepage on Kakao) | [Kakao place 1354596561](https://place.map.kakao.com/1354596561) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 3.6 / 5 (9 reviews lifetime) | **3 verified** — 2026-04-22 (5★), 2026-06-16 (5★), 2026-03-04 (5★) | [place.map.kakao.com/1354596561](https://place.map.kakao.com/1354596561) |
| Naver blog reviews | n.a. (110 lifetime — the highest count in this set) | 4 of 4 visible are July 2026, third-party bloggers | [2026-07-17](https://blog.naver.com/korean_zorba/224349679775), [2026-07-13](https://blog.naver.com/bong716_/224344980847), [2026-07-08](https://blog.naver.com/hi2547225/224340351206) |

Recent sentiment: strongly positive and genuinely current — every recent Kakao review is 5★ and third-party bloggers in July 2026 praise the Munseom wreck point and beginner handling; the 3.6 average is dragged down by older low scores.

---

## 20. Scuba Life — 스쿠버라이프

| Field | Value | Source |
|---|---|---|
| Official name | Scuba Life / 스쿠버라이프 | [PADI: Scuba Life](https://www.padi.com/dive-center/south-korea/scuba-life-2/); [Kakao place 25733517](https://place.map.kakao.com/25733517) |
| City | Seogwipo-si (Donghong-dong) | [Kakao place 25733517](https://place.map.kakao.com/25733517) |
| Address | 제주특별자치도 서귀포시 중산간동로 7939 (동홍동) / "7939 Jungsangandong-ro, Seogwipo-si, 63586" | [Kakao place 25733517](https://place.map.kakao.com/25733517); [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| gps_lat / gps_lng | 33.26589207 / 126.5682706 (PADI: 33.2658811 / 126.5683498) | [Kakao place 25733517](https://place.map.kakao.com/25733517); [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| website_url | https://www.scubalife.net (returns `disallow_by_robots` to automated fetch) | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| naver_map_url | https://map.naver.com/p/search/%EC%8A%A4%EC%BF%A0%EB%B2%84%EB%9D%BC%EC%9D%B4%ED%94%84 (constructed) | see caveats |
| size | **small** (estimate) — PADI lists no staff count and no dive boat; facilities are classroom + A/C + Wi-Fi + parking | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| years_of_existence | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| owns_boat | no — no "Dive boat" facility, though "Accessible boat diving" is offered as an adaptive service | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| tec_diving | **yes** — "PADI TecRec, Rebreather/ CCR Diving"; Nitrox, Trimix and mixed-gas fills | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| freediving | **yes** — "PADI Freediving"; freediving equipment rental; 15 sets of freediving mask/snorkel/fins held | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/); [TripAdvisor listing text](https://www.tripadvisor.co.kr/Attraction_Review-g297892-d17537477-Reviews-Scuba_Life-Seogwipo_Jeju_Island.html) |
| est. fun-dive price (KRW) | n.a. — the shop's own site is robots-blocked and no price is published elsewhere | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| languages_spoken | **Korean, Mandarin** (the only club in the set listing Mandarin and no English); Line and WeChat as social channels | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| certifications | PADI (TecRec, CCR, Freediving, EFR) | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| email | scubaskin@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| mobile_phone | +82-10-9120-1114 | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/); [Kakao place 25733517](https://place.map.kakao.com/25733517) |
| kakaotalk | n.a. — Line and WeChat listed instead | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/scuba-life-2/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (5 reviews lifetime) | **0** — visible reviews are 2020-07-04, 2021-06-14, 2021-04-19 | [place.map.kakao.com/25733517](https://place.map.kakao.com/25733517) |
| TripAdvisor | 4.5 / 5 bubbles, **2 reviews lifetime, latest Jul 2021** | **0** | [Scuba Life on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297892-d17537477-Reviews-Scuba_Life-Seogwipo_Jeju_Island.html) |

Recent sentiment: **no feedback at all since Jan 2024** on either platform — the ratings are high but entirely pre-2022; this is a Chinese-market-facing tec/CCR shop with a very thin recent public footprint.

---

## 21. Seogwipo Dive Center — 서귀포다이브센터

| Field | Value | Source |
|---|---|---|
| Official name | Seogwipo Dive Center / 서귀포다이브센터 | [PADI: Seogwipo Dive Center](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/); [Kakao place 639348916](https://place.map.kakao.com/639348916) |
| City | Seogwipo-si (**Namwon-eup, Harye-ri** — east coast, well outside Seogwipo town) | [Kakao place 639348916](https://place.map.kakao.com/639348916) |
| Address | 제주특별자치도 서귀포시 남원읍 하례망장포로 65-13, 2층 / "2F, 65-13 Haryemangjangpo-ro, Namwon-eup" | [Kakao place 639348916](https://place.map.kakao.com/639348916); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| gps_lat / gps_lng | 33.25975717 / 126.63953011 (PADI: 33.258501 / 126.639663) | [Kakao place 639348916](https://place.map.kakao.com/639348916); [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/) |
| website_url | https://seogwipodive.com (PADI still points at the dead seogwipodive.modoo.at) | [Kakao place 639348916](https://place.map.kakao.com/639348916); [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/) |
| naver_map_url | https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%EB%8B%A4%EC%9D%B4%EB%B8%8C%EC%84%BC%ED%84%B0 (constructed) | see caveats |
| size | **small–medium** (estimate) — no staff count published, but the centre runs its own boat and private pier | [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| num_instructors | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| years_of_existence | **12 years** — "operating since 2014" | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| owns_boat | **yes** — "전용보트"; "has its own private pier and beach allowing both shore and boat diving from the center" | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| tec_diving | no — PADI lists only "PADI Scuba Diving" | [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| est. fun-dive price (KRW) | **150,000** (2 boat fun dives). Island ×2 120,000; beach ×1 50,000. Discover: beach 65,000 / boat 100,000 / island 150,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| languages_spoken | **Korean only** — "No English"; website and booking channels Korean-only | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| certifications | PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/); [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/) |
| email | kny4176@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/) |
| mobile_phone | +82-10-4255-4176 | [PADI](https://www.padi.com/dive-center/south-korea/seogwipo-dive-center/); [Kakao place 639348916](https://place.map.kakao.com/639348916) |
| kakaotalk | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |
| whatsapp | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 4.7 / 5 (11 reviews lifetime) | **1 verified** — 2024-09-18 (5★); the other visible ones are 2022-03-11 and 2021-04-06 | [place.map.kakao.com/639348916](https://place.map.kakao.com/639348916) |
| Blog review | n.a. (1 lifetime) | 1 — 2025-05-05 price/booking round-up (not a first-hand dive report) | [heal-you.tistory.com/665](https://heal-you.tistory.com/665) |
| Visit Jeju | n.a. — page returns `bad_robots_code` | n.a. | [Visit Jeju listing](https://visitjeju.net/kr/detail/view?contentsid=CNTS_000000000022353) |

Recent sentiment: thin but positive — one confirmed 5★ review in Sept 2024; the shop's differentiators (private pier, 12-year track record, cheapest beach dive at ₩50,000) are documented but reach almost no English-speaking audience.

---

## 22. Mobydick Dive — 모비딕 다이브센터

| Field | Value | Source |
|---|---|---|
| Official name | Moby Dick Dive / 모비딕 다이브센터 | [PADI: Mobydick Dive](https://www.padi.com/dive-center/south-korea/mobydick-dive/); [Kakao place 523205134](https://place.map.kakao.com/523205134) |
| City | Seogwipo-si (Seohong-dong) | [Kakao place 523205134](https://place.map.kakao.com/523205134) |
| Address | 제주특별자치도 서귀포시 남성중로121번길 12 (서홍동) / "12, Namseongjung-ro 121beon-gil" | [Kakao place 523205134](https://place.map.kakao.com/523205134); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| gps_lat / gps_lng | 33.24276538 / 126.55550415 (PADI: 33.2426979 / 126.5556414) | [Kakao place 523205134](https://place.map.kakao.com/523205134); [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| website_url | http://mobydickdive.co.kr (full English mirror site maintained) | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| naver_map_url | https://map.naver.com/p/search/%EB%AA%A8%EB%B9%84%EB%94%95%20%EB%8B%A4%EC%9D%B4%EB%B8%8C%EC%84%BC%ED%84%B0 (constructed) | see caveats |
| size | **medium** — 4 PADI Instructors, plus a 36-capacity yacht crew operation | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| num_instructors | 4 | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| years_of_existence | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| owns_boat | **yes — the strongest boat asset on the island**: "Jeju's only dedicated diving yacht (Moby Dick, 55ft, capacity 36)" | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/); [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| tec_diving | **yes** — "PADI TecRec, Rebreather/ CCR Diving"; TDI-line technical and CCR; Trimix, mixed gas, CO2 scrubber, CCR rental | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| freediving | **yes** — "PADI Freediving" | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| est. fun-dive price (KRW) | **160,000** (2 dives, standard). Extra dive 80,000; night dive 80,000 (5+ people); discover 150,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| languages_spoken | English, Korean, Chinese (WeChat listed) | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| certifications | PADI, SDI, TDI, NAUI, CMAS — owner Heo Young-do is an SDI/TDI Course Director | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-mobydick/) |
| email | youngdoheo@gmail.com | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| mobile_phone | +82-10-9520-0038 (landline 064-733-1038) | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/); [Kakao place 523205134](https://place.map.kakao.com/523205134) |
| kakaotalk | n.a. — WeChat is the listed messaging channel | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/mobydick-dive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 4.1 / 5 (14 reviews lifetime — the largest Kakao sample in this set) | **0 verified** — the three visible reviews are 2021-04-19 (5★), 2020-11-16 (**1★**), 2020-05-08 (5★) | [place.map.kakao.com/523205134](https://place.map.kakao.com/523205134) |
| Naver blog reviews | n.a. (10 lifetime) | **4** — 2026-04-15, 2025-07-11, 2024-08-20, 2024-08-19 | [2026-04-15 yacht dive](https://blog.naver.com/ingijjung/224253699396), [2025-07-11](https://blog.naver.com/daily_something/223927337744), [2024-08-20](https://blog.naver.com/vley1001/223554730489), [2024-08-19](https://blog.naver.com/ehdal0723/223552568724) |

Recent sentiment: consistently positive blog coverage 2024→2026 centred on the yacht experience and the soft-coral sites; the 4.1 Kakao average reflects one old 1★ outlier rather than anything recent.

---

## 23. Yong Dive — 용다이브

| Field | Value | Source |
|---|---|---|
| Official name | Yong Dive / 용다이브 | [PADI: Yong Dive](https://www.padi.com/dive-center/south-korea/yong-dive/); [Kakao place 860986935](https://place.map.kakao.com/860986935) |
| City | Seogwipo-si (Seogwi-dong, in front of Seogwipo Port) | [Kakao place 860986935](https://place.map.kakao.com/860986935); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| Address | 제주특별자치도 서귀포시 솔동산로10번길 39-1, 1층 (Crystal Hotel 1F) | [Kakao place 860986935](https://place.map.kakao.com/860986935); [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| gps_lat / gps_lng | 33.24125001 / 126.5627018 (PADI: 33.242295 / 126.56209; Dive To Korea: 33.24270 / 126.56250) | [Kakao place 860986935](https://place.map.kakao.com/860986935); [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| website_url | n.a. — PADI still lists yongdivejeju.modoo.at, which is **dead** (modoo! closed 2025-06-26); Instagram @yongdivecenter is the live channel | [yongdivejeju.modoo.at](https://yongdivejeju.modoo.at/); [Kakao place 860986935](https://place.map.kakao.com/860986935) |
| naver_map_url | https://map.naver.com/p/search/%EC%9A%A9%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **medium** — 4 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| num_instructors | 4 | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| years_of_existence | n.a. — but described as "새로운 용다이브" (newly opened) in an Oct 2025 review, suggesting a recent launch or relocation | [2025-10-20 review](https://blog.naver.com/smile3539/224046616324) |
| owns_boat | **yes** — "전용보트"; "1-minute walk to the boat"; "Dive boat" in PADI facilities | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/); [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| tec_diving | no — activities are "PADI Scuba Diving, EFR, Purpose Built Facility"; Nitrox only | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| est. fun-dive price (KRW) | n.a. — no published price found (own site dead) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| languages_spoken | English, Korean ("English-speaking", "Foreigner friendly") | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| certifications | PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |
| email | yongdivecenter@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| mobile_phone | +82-10-4441-7762 (Kakao lists 010-9416-7762) | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/); [Kakao place 860986935](https://place.map.kakao.com/860986935) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/yong-dive/) |
| whatsapp | **+82-10-4441-7762** — "Instagram bio invites WhatsApp inquiries" (one of only two clubs in the set with a documented WhatsApp) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-yongdive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (3 reviews lifetime) | **2 verified** — 2025-10-20 (5★), 2024-04-27 (5★) | [place.map.kakao.com/860986935](https://place.map.kakao.com/860986935) |
| Naver blog reviews | n.a. (12 lifetime) | **4** — 2026-06-05, 2025-10-20, 2025-10-02, 2025-09-24, all third-party and explicitly 내돈내산 (self-paid) | [2026-06-05 내돈내산](https://blog.naver.com/tadadadak_/224306498035), [2025-10-20](https://blog.naver.com/smile3539/224046616324), [2025-10-02 OW course](https://blog.naver.com/lee_529/224029951220), [2025-09-24 solo fun dive](https://blog.naver.com/bloodytoothkid_/224020517311) |

Recent sentiment: the most credible recent word-of-mouth in the set — multiple self-paid 2025–2026 bloggers praise the facilities, instructors and port-front location, and it accepts solo fun divers.

---

## 24. Blue Whale Dive — 블루웨일다이브

| Field | Value | Source |
|---|---|---|
| Official name | Blue Whale Dive / 블루웨일다이브 | [PADI: Blue Whale Dive](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [Kakao place 692022430](https://place.map.kakao.com/692022430) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 692022430](https://place.map.kakao.com/692022430) |
| Address | 제주특별자치도 서귀포시 소암로 35 (서귀동) / "35, Soam-ro, Seogwipo-si, 63595" | [Kakao place 692022430](https://place.map.kakao.com/692022430); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| gps_lat / gps_lng | 33.24494316 / 126.56944127 (Dive To Korea: 33.24496 / 126.56947) | [Kakao place 692022430](https://place.map.kakao.com/692022430); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| website_url | n.a. — PADI lists bluewhaledive.modoo.at, which is **dead**; Instagram is the live channel | [bluewhaledive.modoo.at](https://bluewhaledive.modoo.at/); [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| naver_map_url | https://map.naver.com/p/search/%EB%B8%94%EB%A3%A8%EC%9B%A8%EC%9D%BC%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **small** — no staff count on PADI, facilities limited to classroom + parking | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| years_of_existence | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| owns_boat | no — no "Dive boat" facility on PADI; Dive To Korea lists dive type "Boat" but does not state ownership | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| tec_diving | **conflicting** — PADI activities list has **no TecRec**; Dive To Korea says "plus tec diving". Treat as unconfirmed | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| freediving | **yes — a core specialty**: "PADI Freediving, PADI Mermaid"; freediving equipment rental; multiple 2025 PADI freediving-certification reviews | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [2025-10-09 freediving Lv1+2 review](https://blog.naver.com/khi5223/224035856499) |
| est. fun-dive price (KRW) | **100,000** ("펀 프리다이빙"). Discover scuba: beach 70,000 / island 100,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| languages_spoken | English (basic), Korean; "Foreigner friendly" | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-bluewhaledive/) |
| certifications | PADI (Freediving, Mermaid); also runs 수중레저안전요원 (underwater leisure safety officer) courses | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [2026-06-22 shop post](https://blog.naver.com/sangwonwon/224323694296) |
| email | sangwonwon@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| mobile_phone | +82-10-3118-0410 | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/); [Kakao place 692022430](https://place.map.kakao.com/692022430) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |
| whatsapp | n.a. (Instagram listed) | [PADI](https://www.padi.com/dive-center/south-korea/blue-whale-dive-2/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (8 reviews lifetime) | **2 verified** — both 2026-08-02 (5★, i.e. four days before this report) | [place.map.kakao.com/692022430](https://place.map.kakao.com/692022430) |
| Naver blog reviews | n.a. (57 lifetime) | **4** — 2026-07-27, 2026-06-22 (shop's own), 2025-10-29, 2025-10-09 | [2026-07-27](https://blog.naver.com/duck_life_is/224358892980), [2025-10-29 Seopseom fun dive](https://blog.naver.com/dbsdk0618/224057114771), [2025-10-09 freediving Lv1+2](https://blog.naver.com/khi5223/224035856499) |
| TripAdvisor | n.a. — page blocked to automated fetch | n.a. | [Blue Whale Dive on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297892-d28549997-Reviews-Blue_Whale_Dive-Seogwipo_Jeju_Island.html) |

Recent sentiment: the freshest feedback of any club here (two 5★ Kakao reviews dated 2026-08-02) and a run of positive freediving-course write-ups, including one about overcoming water phobia.

---

## 25. Start Scuba School — 스타트스쿠버다이빙

| Field | Value | Source |
|---|---|---|
| Official name | Start Scuba School / 스타트 스쿠버다이빙 (affiliated with 제주스쿠버스쿨 — "same instructors", per a customer) | [PADI: Start Scuba School](https://www.padi.com/dive-center/south-korea/start-scuba-school/); [2024-03 customer post](https://blog.naver.com/gts_daily/223380315063) |
| City | Seogwipo-si (Donghong-dong) | [Kakao place 668217740](https://place.map.kakao.com/668217740) |
| Address | 제주특별자치도 서귀포시 칠십리로 201, 1층 (동홍동) | [Kakao place 668217740](https://place.map.kakao.com/668217740); [2024-03 review](https://blog.naver.com/jejunam0102/223389508840) |
| gps_lat / gps_lng | 33.24675887 / 126.57410545 (PADI: 33.2467919 / 126.5741207) | [Kakao place 668217740](https://place.map.kakao.com/668217740); [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| website_url | https://startscuba.imweb.me/ | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/); [startscuba.imweb.me](https://startscuba.imweb.me/) |
| naver_map_url | https://map.naver.com/p/search/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%8A%A4%EC%BF%A0%EB%B2%84%EB%8B%A4%EC%9D%B4%EB%B9%99 (constructed) | see caveats |
| size | **medium** — 3 PADI Instructors, own pool, on-site accommodation | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/); [2024-03 customer post](https://blog.naver.com/gts_daily/223380315063) |
| num_instructors | 3 | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| years_of_existence | n.a. | [startscuba.imweb.me](https://startscuba.imweb.me/) |
| owns_boat | **yes** — "Dive boat" among PADI facilities | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| tec_diving | **yes** — "PADI TecRec"; Trimix, mixed gas and CO2 scrubber services | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| freediving | no — snorkelling only among activities | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| est. fun-dive price (KRW) | **80,000** per beach fun dive; +20,000 boat fee for Seopseom/Munseom. Discover dive 60,000, or **100,000** with photos | [2024-07 customer price note](https://blog.naver.com/ba-ki/223535329624); [2024-03 customer price note](https://blog.naver.com/jejunam0102/223389508840) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| certifications | PADI (TecRec, EFR); Open Water / Advanced / Master / Rescue courses run | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/); [2024-03 customer post](https://blog.naver.com/gts_daily/223380315063) |
| email | scubadiving@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| mobile_phone | +82-10-3058-1993 (shop line 070-8147-7123) | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/); [2024-07 customer post](https://blog.naver.com/ba-ki/223535329624) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/start-scuba-school/) |
| whatsapp | n.a. — Instagram @start_scubadiving | [startscuba.imweb.me](https://startscuba.imweb.me/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (**0 reviews lifetime**) | 0 | [place.map.kakao.com/668217740](https://place.map.kakao.com/668217740) |
| Naver blog reviews | n.a. (**99 lifetime** — second-highest in the set) | **4 of 4 visible** — 2025-10-02, 2025-09-29, 2025-09-17, 2025-09-16, plus 2024 posts | [2025-10-02](https://blog.naver.com/tpdl0323/224030109518), [2025-09-29](https://blog.naver.com/dwdwdw1105/224025777428), [2025-09-17](https://blog.naver.com/wltn0545/224011558304), [2025-09-16](https://blog.naver.com/tmvkdltl123/224007814420) |

Recent sentiment: high-volume, uniformly upbeat blog coverage through late 2025 aimed at first-timers and couples — but zero star-rated reviews anywhere, so the sentiment rests entirely on narrative posts.

---

## 26. Cool Dive — 쿨다이브

| Field | Value | Source |
|---|---|---|
| Official name | Cool Dive / 쿨다이브 | [cooldive.co.kr](https://cooldive.co.kr/); [PADI: Cool Dive](https://www.padi.com/dive-center/south-korea/cool-dive/) |
| City | Seogwipo-si (Seogwi-dong, at Seogwipo Port — same building as Yong Dive) | [Kakao place 1234310151](https://place.map.kakao.com/1234310151) |
| Address | 제주특별자치도 서귀포시 솔동산로10번길 39-1 (서귀동 699-10) | [Kakao place 1234310151](https://place.map.kakao.com/1234310151); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| gps_lat / gps_lng | 33.24126988 / 126.56271243 (PADI: 33.241348 / 126.562768) | [Kakao place 1234310151](https://place.map.kakao.com/1234310151); [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/) |
| website_url | https://cooldive.co.kr/ | [Kakao place 1234310151](https://place.map.kakao.com/1234310151); [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/) |
| naver_map_url | https://map.naver.com/p/search/%EC%BF%A8%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **small** — 2 PADI Instructors | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| num_instructors | 2 | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| years_of_existence | **7 years** — "opened 2019"; owner Lee Kyung-won | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| owns_boat | **yes** — 15 m-class dedicated dive boat "Cooldive-ho"; "Dive boat" in PADI facilities | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/); [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/) |
| tec_diving | **yes** — "PADI TecRec"; tech courses year-round; mixed gas + Nitrox | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| freediving | **yes** — "PADI Freediving"; freediving equipment rental | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| est. fun-dive price (KRW) | **140,000** (2 boat fun dives on the Cooldive-ho) — the shop's own web store lists the same product at **130,000** (source conflict flagged by Dive To Korea). Discover 100,000; snorkelling 60,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| languages_spoken | PADI lists English + Korean, but "the shop's own website and booking channels (KakaoTalk/Naver SmartStore) are Korean-only with no English pages" | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| certifications | PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| email | cooldivejeju@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/) |
| mobile_phone | +82-10-9399-0096 (Kakao lists 0502-5554-5278 safe number) | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/); [Kakao place 1234310151](https://place.map.kakao.com/1234310151) |
| kakaotalk | KakaoTalk channel used for booking (channel ID not published) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-cooldive/) |
| whatsapp | n.a. — Instagram + YouTube listed | [PADI](https://www.padi.com/dive-center/south-korea/cool-dive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 4.8 / 5 (5 reviews lifetime) | **3 verified, all 2024** — 2024-06-25 (5★), 2024-07-12 (5★), 2024-04-29 (5★) | [place.map.kakao.com/1234310151](https://place.map.kakao.com/1234310151) |
| Naver blog reviews | n.a. (11 lifetime) | **4** — 2025-07-16, 2025-06-04, and two on 2024-07-14 | [2025-07-16 50-log milestone](https://blog.naver.com/pjjy4996/223936337757), [2024-07-14](https://blog.naver.com/hongi_ooda/223512716971), [2024-07-14](https://blog.naver.com/yeobdol/223512041232) |

Recent sentiment: solidly positive with a genuine 2024 star-rated burst (three 5★) and a repeat-customer 2025 post; the practical caveat is Korean-only service despite the English PADI listing.

---

## 27. Scubee Dive — 스쿠비다이브

| Field | Value | Source |
|---|---|---|
| Official name | Scubee Dive / 스쿠비다이브 | [scubeedive.com](http://scubeedive.com/); [PADI: Scubee Dive](https://www.padi.com/dive-center/south-korea/scubee-dive/) |
| City | Seogwipo-si (Topyeong-dong / Bomok area — east of town) | [Kakao place 1661558401](https://place.map.kakao.com/1661558401) |
| Address | 제주특별자치도 서귀포시 칠십리로317번길 14, 1층 (토평동), 63599 | [Kakao place 1661558401](https://place.map.kakao.com/1661558401); [scubeedive.com](http://scubeedive.com/) |
| gps_lat / gps_lng | 33.24708553 / 126.58783346 (PADI: 33.2467016 / 126.5878504) | [Kakao place 1661558401](https://place.map.kakao.com/1661558401); [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/) |
| website_url | http://scubeedive.com/ | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/); [Kakao place 1661558401](https://place.map.kakao.com/1661558401) |
| naver_map_url | https://map.naver.com/p/search/%EC%8A%A4%EC%BF%A0%EB%B9%84%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **medium** — PADI counts 2 instructors, but the shop's own staff page lists **6 named instructors** (center head 윤준 plus 5) | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/); [scubeedive.com](http://scubeedive.com/) |
| num_instructors | 2 per PADI; 6 listed on the shop's own site | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/); [scubeedive.com](http://scubeedive.com/) |
| years_of_existence | **~5 years** — "founded Oct 2021" | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| owns_boat | **yes** — "center-operated boat" / "전용보트"; "Dive boat" in PADI facilities | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/); [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/) |
| tec_diving | **yes** — "PADI TecRec" | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| freediving | **yes** — two staff are listed as 스쿠버다이빙/프리다이빙 instructors, incl. 대표 강사 김두통 | [scubeedive.com](http://scubeedive.com/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| est. fun-dive price (KRW) | **120,000** (2 boat fun dives). Night: beach 70,000 (2+) / boat 80,000 (4+). PADI DSD 120,000; trial beach 70,000 / boat 100,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| languages_spoken | Korean; basic English ("Foreigner friendly"; PADI lists English + Korean) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/); [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/) |
| certifications | PADI — owner Jun Yoon is a PADI IDC Staff Instructor, MSDT and EFR Trainer | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| email | scubeedive@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/) |
| mobile_phone | +82-10-2312-9603 | [PADI](https://www.padi.com/dive-center/south-korea/scubee-dive/); [Kakao place 1661558401](https://place.map.kakao.com/1661558401) |
| kakaotalk | KakaoTalk mentioned as a booking channel; ID not published | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-scubeedive/) |
| whatsapp | n.a. — Instagram @scubeedive | [Kakao place 1661558401](https://place.map.kakao.com/1661558401) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (2 reviews lifetime) | **0** — latest visible review is 2023-06-20 | [place.map.kakao.com/1661558401](https://place.map.kakao.com/1661558401) |
| Naver blog reviews | n.a. (48 lifetime) | **4** — 2025-12-06 (shop's own), 2025-11-14, 2025-10-25, 2025-10-13 | [2025-11-14 DSD honest review](https://blog.naver.com/leehong2424/224075281775), [2025-10-25 OW course](https://blog.naver.com/gs3255/224053407347), [2025-10-13 phobia-recovery post](https://blog.naver.com/uoekko/224039150462) |

Recent sentiment: no star ratings since Jan 2024, but a steady late-2025 stream of detailed third-party posts on DSD and Open Water courses, several from non-swimmers, all favourable.

---

## 28. Badadive — 바다다이브

| Field | Value | Source |
|---|---|---|
| Official name | Badadive / 바다다이브 | [PADI: Badadive](https://www.padi.com/dive-center/south-korea/badadive/); [Kakao place 1012962688](https://place.map.kakao.com/1012962688) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 1012962688](https://place.map.kakao.com/1012962688) |
| Address | 제주특별자치도 서귀포시 동홍로12번길 5 (서귀동 253-10), 63590 | [Kakao place 1012962688](https://place.map.kakao.com/1012962688); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/) |
| gps_lat / gps_lng | 33.24979698 / 126.56849999 (PADI: 33.24966 / 126.56849) | [Kakao place 1012962688](https://place.map.kakao.com/1012962688); [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| website_url | https://badadive.com (returns `bad_robots_code` to automated fetch) | [PADI](https://www.padi.com/dive-center/south-korea/badadive/); [Kakao place 1012962688](https://place.map.kakao.com/1012962688) |
| naver_map_url | https://map.naver.com/p/search/%EB%B0%94%EB%8B%A4%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **small** — "1 PADI Instructor" | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| num_instructors | 1 | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| years_of_existence | n.a. — premises "renovated in 2022" | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/) |
| owns_boat | no — no "Dive boat" facility on PADI; boat dives run but ownership not stated | [PADI](https://www.padi.com/dive-center/south-korea/badadive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/) |
| tec_diving | **yes** — "PADI TecRec"; Nitrox fills | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/badadive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/) |
| est. fun-dive price (KRW) | **130,000** (2 dives; light lunch from 3 dives). Night boat 90,000 / beach 70,000; discover island-boat 100,000 / beach 80,000 | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/) |
| languages_spoken | Korean; basic English | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-badadive/); [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| certifications | PADI — notably strong adaptive-diving credentials (adaptive equipment, staff trained in adaptive support) | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| email | ojh9922@hanmail.net | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| mobile_phone | +82-10-4601-7622 (Kakao lists 0503-7150-6297 safe number) | [PADI](https://www.padi.com/dive-center/south-korea/badadive/); [Kakao place 1012962688](https://place.map.kakao.com/1012962688) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/badadive/) |
| whatsapp | n.a. — Instagram @jang_instructor | [Kakao place 1012962688](https://place.map.kakao.com/1012962688) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 3.7 / 5 (3 reviews lifetime — **the lowest average in the set**) | **2 verified** — 2026-05-31 (**1★**) and 2024-06-22 (5★) | [place.map.kakao.com/1012962688](https://place.map.kakao.com/1012962688) |
| Naver blog reviews | n.a. (20 lifetime) | **4** — 2025-12-06, 2025-07-18, 2025-06-18, 2025-06-04 (three are the shop's own blog) | [2025-12-06 OW+AOW customer review](https://blog.naver.com/suhuii9/224100224858), [2025-07-18 shop post](https://blog.naver.com/bada_dive/223938653645) |
| TripAdvisor | n.a. — page blocked to automated fetch | n.a. | [Badadive on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297892-d25447422-Reviews-Badadive-Seogwipo_Jeju_Island.html) |

Recent sentiment: **mixed and the only genuinely negative recent signal in the set** — a 1★ Kakao review in May 2026 sits against a 5★ from 2024 and a positive Dec 2025 certification write-up; the small sample makes the 3.7 average volatile.

---

## 29. Dive Together Resort — 다이브투게더

| Field | Value | Source |
|---|---|---|
| Official name | Dive Together / 다이브투게더 | [divetogether.co.kr](https://divetogether.co.kr/fundive); [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| Address | 제주특별자치도 서귀포시 천지연로 17-1 (서귀동) | [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| gps_lat / gps_lng | 33.2416322 / 126.56447138 | [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| website_url | https://divetogether.co.kr/ (the older divetogether.modoo.at is **dead**) | [Kakao place 1021388163](https://place.map.kakao.com/1021388163); [divetogether.modoo.at](https://divetogether.modoo.at/) |
| naver_map_url | https://map.naver.com/p/search/%EB%8B%A4%EC%9D%B4%EB%B8%8C%ED%88%AC%EA%B2%8C%EB%8D%94 (constructed) | see caveats |
| size | **medium** (estimate) — **no PADI dive-centre page exists** (`/dive-center/south-korea/dive-together/` → 404), but it runs its own boat, resort lodging and guided groups | [PADI 404](https://www.padi.com/dive-center/south-korea/dive-together/); [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| num_instructors | n.a. | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| years_of_existence | n.a. | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| owns_boat | **yes** — "샵전용 보트로 숙련된 가이드와 함께" | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| tec_diving | n.a. — not stated anywhere; the programme list is discover / OW / fun / night / ReActivate | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| freediving | n.a. — not stated | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| est. fun-dive price (KRW) | **120,000** ("보트 펀다이빙 기본 2회 — 2회 120,000원"; extra dive 60,000, VAT extra; tanks, boating, underwater photos and a light lunch included, gear rental extra) | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| languages_spoken | n.a. — all published material is Korean | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| certifications | PADI (runs PADI ReActivate as an official programme) | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| email | n.a. | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| mobile_phone | +82-10-4718-7070 | [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| kakaotalk | KakaoTalk channel + KakaoTalk chat + Naver Talk offered as booking channels (ID not published) | [divetogether.co.kr](https://divetogether.co.kr/fundive) |
| whatsapp | n.a. — Instagram @divetogether_jeju | [Kakao place 1021388163](https://place.map.kakao.com/1021388163) |
| Extra | Resort lodging ₩20,000/night (single or twin, private shower) | [divetogether.co.kr](https://divetogether.co.kr/fundive) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 4.5 / 5 (8 reviews lifetime) | **2 verified** — 2026-07-12 (5★), 2025-09-18 (5★) | [place.map.kakao.com/1021388163](https://place.map.kakao.com/1021388163) |
| Naver blog reviews | n.a. (56 lifetime) | **4** — 2025-07-09, 2024-09-20, 2024-09-18, 2024-09-14 | [2025-07-09 Munseom/Beomseom trip log](https://blog.naver.com/glori-sunny/223927410868), [2024-09-18 fun dive](https://blog.naver.com/durldi99/223587928574), [2024-09-14](https://blog.naver.com/jejudovisitor/223584169100) |
| TripAdvisor | n.a. — page blocked to automated fetch | n.a. | [DIVE TOGETHER on TripAdvisor](https://www.tripadvisor.com/Attraction_Review-g297892-d24968038-Reviews-DIVE_TOGETHER-Seogwipo_Jeju_Island.html) |

Recent sentiment: consistently positive across 2024–2026, with detailed fun-dive trip logs (Munseom, Beomseom, Sammaebong) and repeated praise for the guided boat format and cheap on-site lodging.

---

## 30. Seaflow — 씨플로우

| Field | Value | Source |
|---|---|---|
| Official name | 씨플로우 / SEAFLOW DIVE (Seaflow Dive Center) | [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter); [PADI: Seaflow](https://www.padi.com/dive-center/south-korea/seaflow/) |
| City | Seogwipo-si (Seoho-dong / Sinsigaji new town, near the World Cup Stadium) | [Kakao place 932982348](https://place.map.kakao.com/932982348); [PADI](https://www.padi.com/dive-center/south-korea/seaflow/) |
| Address | 제주특별자치도 서귀포시 신중로13번길 69, 지하1층 (서호동 1449-6) | [Kakao place 932982348](https://place.map.kakao.com/932982348); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/) |
| gps_lat / gps_lng | 33.25746984 / 126.51284212 (PADI: 33.257469 / 126.5129) | [Kakao place 932982348](https://place.map.kakao.com/932982348); [PADI](https://www.padi.com/dive-center/south-korea/seaflow/) |
| website_url | https://www.seaflow.kr | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter) |
| naver_map_url | https://map.naver.com/p/search/%EC%94%A8%ED%94%8C%EB%A1%9C%EC%9A%B0 (constructed) | see caveats |
| size | **small** — "1 PADI Instructor" on PADI; "a private shop run with a lead instructor and dive teams capped at 4"; the site names 2 instructors (대표강사 임희수, 강사 김남기) | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/); [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter) |
| num_instructors | 1 (PADI) / 2 named on own site | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter) |
| years_of_existence | n.a. | [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter) |
| owns_boat | **no** — no "Dive boat" facility; boat dives are run but Dive To Korea explicitly does not state ownership. The differentiator is an **on-site dedicated training pool + deep pool + house reef** | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/); [seaflow.kr](https://www.seaflow.kr/seaflowdivecenter) |
| tec_diving | **yes** — "PADI TecRec"; Trimix and mixed-gas services | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/) |
| freediving | **yes — a core specialty**: "PADI Freediving, PADI Mermaid"; freediving equipment rental; scuba + freediving try-dives | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/) |
| est. fun-dive price (KRW) | **120,000** (2 boat fun dives, VAT excluded). 3 dives 180,000; 4 dives 240,000; 2 beach dives 100,000; night 60,000; Aqua Planet dive 100,000; KakaoTalk-channel package 130,000. Trial: beach 60,000 / boat 80,000 (2026 event prices) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/); [seaflow.kr fun-dive page](https://www.seaflow.kr/scubafundivinginformation) |
| languages_spoken | English, Korean | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/) |
| certifications | PADI (TecRec, Freediving, Mermaid, EFR, Purpose Built Facility); registered marine-leisure operator with liability insurance, all staff hold coastal-safety and water-rescue qualifications | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-seaflow/) |
| email | heesu941007@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/) |
| mobile_phone | +82-10-9117-8342 (Kakao 0507-1427-7752; blogs cite 0507-1445-3575) | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/); [Kakao place 932982348](https://place.map.kakao.com/932982348); [2025 customer post](https://blog.naver.com/ttuparkle/223847054688) |
| kakaotalk | **ID `liamheesu`**; channel http://pf.kakao.com/_yxjXxhK | [shop blog post](https://blog.naver.com/seaflowdivingcenter/223366738102) |
| whatsapp | n.a. — Instagram listed | [PADI](https://www.padi.com/dive-center/south-korea/seaflow/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (3 reviews lifetime) | **2 verified** — 2026-05-02 (5★), 2025-02-09 (5★) | [place.map.kakao.com/932982348](https://place.map.kakao.com/932982348) |
| Naver blog reviews | n.a. (87 lifetime) | **4 of 4 visible** — 2026-07-15, 2026-04-10, 2026-02-14, 2026-01-15 | [2026-07-15 freediving course](https://blog.naver.com/hi2547225/224347644536), [2026-04-10 내돈내산 fun dive](https://blog.naver.com/mumu2684/224247143932), [2026-02-14 freediving cert](https://blog.naver.com/hi2547225/224184065137) |
| Naver Place (via customer post) | 12 visitor reviews + 337 blog reviews cited | n.a. — Naver Map not machine-readable (see caveats) | [2025 customer post citing Naver counts](https://blog.naver.com/ttuparkle/223847054688) |

Recent sentiment: excellent and very current — an unbroken run of 2026 self-paid posts praising the private small-team format, the on-site pool and the included underwater photography; freediving is the dominant theme.

---

## 31. Home Dive — 홈다이브

| Field | Value | Source |
|---|---|---|
| Official name | Home Dive / 홈다이브 ("집처럼 편안한 다이브 센터") | [PADI: Home Dive](https://www.padi.com/dive-center/south-korea/home-dive/); [Dive To Korea](https://divetokorea.com/shops/shop-jeju-homedive/) |
| City | Seogwipo-si (Donghong-dong) | [Kakao place 429915856](https://place.map.kakao.com/429915856) |
| Address | 제주특별자치도 서귀포시 일주동로8625번길 16-4 (동홍동), 63589 | [Kakao place 429915856](https://place.map.kakao.com/429915856); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| gps_lat / gps_lng | 33.25310986 / 126.56625162 (Dive To Korea: 33.25308 / 126.56623). **PADI's own coordinates 33.15113 / 126.33588 are wrong** — they fall in open country far from the address | [Kakao place 429915856](https://place.map.kakao.com/429915856); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/); [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| website_url | n.a. — PADI lists homedive.modoo.at, which is **dead** (modoo! closed 2025-06-26) | [homedive.modoo.at](https://homedive.modoo.at/); [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| naver_map_url | https://map.naver.com/p/search/%ED%99%88%EB%8B%A4%EC%9D%B4%EB%B8%8C (constructed) | see caveats |
| size | **small** — "1 PADI Instructor"; "run by an IDC Staff Instructor" | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| num_instructors | 1 | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| years_of_existence | n.a. | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| owns_boat | no — no "Dive boat" facility; dive types listed as shore + boat | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| tec_diving | no — activities are "PADI Scuba Diving, Conservation, EFR" | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| est. fun-dive price (KRW) | n.a. — no price published (site dead) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| languages_spoken | **Korean only** — "한국어 / No English / Limited foreigner support" | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/); [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| certifications | PADI | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |
| email | homedive@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| mobile_phone | +82-10-5024-8180 | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/); [Kakao place 429915856](https://place.map.kakao.com/429915856) |
| kakaotalk | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| whatsapp | n.a. — Instagram listed | [PADI](https://www.padi.com/dive-center/south-korea/home-dive/) |
| Hours | Daily 08:00–22:00 (the longest published hours in the set) | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | no rating (**0 reviews lifetime**, 0 blog reviews) | 0 | [place.map.kakao.com/429915856](https://place.map.kakao.com/429915856) |
| Naver Place (secondary citation) | count only — "네이버 플레이스 15 reviews"; dates not machine-readable (see caveats) | unverifiable | [Dive To Korea](https://divetokorea.com/en/shops/shop-jeju-homedive/) |

Recent sentiment: **no dated feedback obtainable since Jan 2024** — a one-instructor, Korean-only shop with essentially no public review footprint outside a Naver Place count that could not be date-checked.

---

## 32. ECO Divers — 에코다이버스 (제주점)

| Field | Value | Source |
|---|---|---|
| Official name | ECO Divers / 에코다이버스 (Jeju branch of a multi-branch chain: Seoul, Sokcho, Jeju, Cebu) | [PADI: ECO Divers](https://www.padi.com/dive-center/south-korea/eco-divers/); [ecodivers.co.kr intro](http://www.ecodivers.co.kr/page/sub1_1) |
| City | Seogwipo-si (Seogwi-dong) | [Kakao place 1634125766](https://place.map.kakao.com/1634125766) |
| Address | **Conflicting.** Kakao (current): 제주특별자치도 서귀포시 칠십리로 145, 장원주상복합건물 1층 102호 (서귀동). PADI and the Korea marine-tourism directory list the older 서귀포시 부두로 51 (서귀동, 평화각) | [Kakao place 1634125766](https://place.map.kakao.com/1634125766); [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [Badaon directory](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST021693) |
| gps_lat / gps_lng | 33.24437881 / 126.56894079 (PADI, tied to the old address: 33.2404581 / 126.5645547) | [Kakao place 1634125766](https://place.map.kakao.com/1634125766); [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| website_url | http://www.ecodivers.co.kr (intermittently returns `broken_content_ip_block` / traffic-exceeded) | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [ecodivers.co.kr](http://www.ecodivers.co.kr/) |
| naver_map_url | https://map.naver.com/p/search/%EC%97%90%EC%BD%94%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8A%A4 (constructed) | see caveats |
| size | **small** at the Jeju branch (estimate) — PADI lists no staff and no facilities for this location; the chain as a whole is large | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [ecodivers.co.kr intro](http://www.ecodivers.co.kr/page/sub1_1) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| years_of_existence | n.a. | [ecodivers.co.kr intro](http://www.ecodivers.co.kr/page/sub1_1) |
| owns_boat | n.a. — no boat stated; the Jeju branch's visible output is hopping tours and snorkelling | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [2025-08 hopping-tour review](https://blog.naver.com/layla-attic/223982671443) |
| tec_diving | no — PADI activities list is "PADI Scuba Diving" only | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| freediving | **yes** — "스쿠버다이빙 / 프리다이빙 전문 교육센터"; trains and assesses both scuba and freediving instructors | [ecodivers.co.kr intro](http://www.ecodivers.co.kr/page/sub1_1); [Badaon directory](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST021693) |
| est. fun-dive price (KRW) | n.a. for scuba fun dives. Published freediving courses: **Level 1 from 140,000**, Level 2 from 340,000 (the notice page itself is robots-blocked; value read from the indexed result) | [ECO Divers freediving notice](http://www.ecodivers.co.kr/bbs/notice/143870) |
| languages_spoken | Korean (nothing else stated; PADI language field empty) | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| certifications | PADI; the shop states it trains and evaluates instructors in both scuba and freediving | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [Badaon directory](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST021693) |
| email | free_yh@nate.com | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| mobile_phone | +82-10-9537-3373 ("빌리쌤"); chain line 070-5033-3373; directory lists 0507-1487-3416 | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/); [ecodivers.co.kr](http://www.ecodivers.co.kr/); [Badaon directory](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST021693) |
| kakaotalk | KakaoTalk to 010-9537-3373 is the stated enquiry route (no separate ID) | [ECO Divers freediving notice](http://www.ecodivers.co.kr/bbs/notice/143870) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/eco-divers/) |
| Extra | Free guesthouse accommodation for course students at the Jeju branch | [ecodivers.co.kr intro](http://www.ecodivers.co.kr/page/sub1_1); [Badaon directory](https://badaon.or.kr/seantour_map/travel/destination/detail.do?destId=DEST021693) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | 5.0 / 5 (3 reviews lifetime) | **3 verified — all of them** — 2026-07-28 (5★), 2026-05-15 (5★), 2024-09-19 (5★) | [place.map.kakao.com/1634125766](https://place.map.kakao.com/1634125766) |
| Naver blog reviews | n.a. (10 lifetime) | **4** — 2026-05-14, 2025-08-25, 2025-08-21, 2025-07-27, mostly snorkelling / island-hopping | [2026-05-14 내돈내산](https://blog.naver.com/jisuning92/224284856830), [2025-08-25 hopping tour](https://blog.naver.com/layla-attic/223982671443), [2025-08-21](https://blog.naver.com/yotppi2/223978513582), [2025-07-27](https://blog.naver.com/silver_im/223947745006) |
| MyRealTrip | 5.0 (guide profile) | dates not shown on the profile page | [MyRealTrip guide 8958](https://www.myrealtrip.com/guides/8958) |

Recent sentiment: uniformly positive and entirely post-2024 on Kakao (a rare clean sweep), though the recent reviews are for snorkelling and hopping tours rather than scuba fun diving — this branch reads more as a freediving/snorkel operation than a fun-dive shop.

---

## 33. Jamsootaki Dive Club — 잠수타기 다이브클럽

> **This is the one club in the 33 that could not be fully identified from current sources.** Its only live listing is a PADI dive-centre page with no staff, language, service or facility data; there is no Kakao Map place record; its website's domain does not resolve; and no review dated Jan 2024 or later was found on any platform.

| Field | Value | Source |
|---|---|---|
| Official name | Jamsootaki Dive Club / 잠수타기 다이브클럽 | [PADI: Jamsootaki Dive Club](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/); [Instagram @jamsootaki profile title](https://www.instagram.com/jamsootaki/) |
| City | Seogwipo-si (Seogwi-dong, near Cheonjiyeon) | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| Address | 제주특별자치도 서귀포시 천지연로41번길 7 / "7, Cheonjyeon-ro 41beon-gil, Seogwipo-si, 63596" | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/); [2019 shop-introduction blog](https://blog.naver.com/hulke04/221580379134) |
| gps_lat / gps_lng | 33.2419198 / 126.5616902 | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| website_url | http://www.jamsootaki.com — **domain does not resolve** (`dns_failed_to_resolve`) | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/); [jamsootaki.com](http://www.jamsootaki.com) |
| naver_map_url | https://map.naver.com/p/search/%EC%9E%A0%EC%88%98%ED%83%80%EA%B8%B0%20%EB%8B%A4%EC%9D%B4%EB%B8%8C%ED%81%B4%EB%9F%BD (constructed) | see caveats |
| size | **small** (estimate) — PADI lists no staff, no facilities and no services | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| num_instructors | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| years_of_existence | n.a. — documented as operating at least since 2019 | [2019 blog](https://blog.naver.com/hulke04/221580379134) |
| owns_boat | n.a. — not stated; the 2019 write-up describes Munseom diving | [2019 blog](https://blog.naver.com/hulke04/221580379134) |
| tec_diving | no — activities are "PADI Scuba Diving" only | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| freediving | no | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| est. fun-dive price (KRW) | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| languages_spoken | n.a. — PADI language field is empty | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| certifications | PADI | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| email | junyone@naver.com | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |
| mobile_phone | +82-10-6393-0412 | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/); [2019 blog](https://blog.naver.com/hulke04/221580379134) |
| kakaotalk | **ID `diverjune`** ("카카오ID : diverjune") — from a 2019 post, may be stale | [2019 blog](https://blog.naver.com/hulke04/221580379134) |
| whatsapp | n.a. | [PADI](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) |

**Feedback**

| Source | Avg rating | Reviews dated Jan 2024+ | URL |
|---|---|---|---|
| Kakao Map | **no place record exists** | — | [Kakao map search](https://place.map.kakao.com/) |
| Naver blog | n.a. | **0** — the only substantive post found is from 2019 | [2019 blog](https://blog.naver.com/hulke04/221580379134) |
| Instagram | n.a. — profile is robots-blocked to automated fetch | unverifiable | [@jamsootaki](https://www.instagram.com/jamsootaki/) |

Recent sentiment: **none available.** Searches attempted, all returning no current place record or dated review: `잠수타기`, `잠수타기 서귀포`, `잠수타기다이브클럽`, `천지연로41번길 7`, `서귀포 천지연로41번길 다이빙` against the Kakao place API; plus web searches for the Korean and romanised names. The PADI listing, the dead domain and the 2019-era contact details together suggest the club is dormant or operating informally.

---

## Summary table (all 33)

| # | Club | City | Size | Instr. | Boat | Tec | Free | Fun dive (KRW) | Kakao ★ (lifetime) | Reviews Jan 2024+ |
|---|---|---|---|---|---|---|---|---|---|---|
| 18 | Sea Sky Jeju | Jeju City | large | 5 | yes | no | no | n.a. | 5.0 (4) | 0 star-rated |
| 19 | Haevit Dive | Seogwipo | medium | 4 | yes | no | no | 100,000 | 3.6 (9) | 3 |
| 20 | Scuba Life | Seogwipo | small | n.a. | no | yes | yes | n.a. | 5.0 (5) | 0 |
| 21 | Seogwipo Dive Center | Seogwipo (Namwon) | small–med | n.a. | yes | no | no | 150,000 | 4.7 (11) | 1 |
| 22 | Mobydick Dive | Seogwipo | medium | 4 | yes (yacht) | yes | yes | 160,000 | 4.1 (14) | 0 star-rated |
| 23 | Yong Dive | Seogwipo | medium | 4 | yes | no | no | n.a. | 5.0 (3) | 2 |
| 24 | Blue Whale Dive | Seogwipo | small | n.a. | no | conflicting | yes | 100,000 | 5.0 (8) | 2 |
| 25 | Start Scuba School | Seogwipo | medium | 3 | yes | yes | no | 80,000/dive | — (0) | 0 star-rated |
| 26 | Cool Dive | Seogwipo | small | 2 | yes | yes | yes | 140,000 | 4.8 (5) | 3 |
| 27 | Scubee Dive | Seogwipo | medium | 2–6 | yes | yes | yes | 120,000 | 5.0 (2) | 0 star-rated |
| 28 | Badadive | Seogwipo | small | 1 | no | yes | no | 130,000 | 3.7 (3) | 2 (incl. one 1★) |
| 29 | Dive Together | Seogwipo | medium | n.a. | yes | n.a. | n.a. | 120,000 | 4.5 (8) | 2 |
| 30 | Seaflow | Seogwipo | small | 1–2 | no | yes | yes | 120,000 | 5.0 (3) | 2 |
| 31 | Home Dive | Seogwipo | small | 1 | no | no | no | n.a. | — (0) | 0 |
| 32 | ECO Divers | Seogwipo | small (branch) | n.a. | n.a. | no | yes | n.a. | 5.0 (3) | 3 |
| 33 | Jamsootaki Dive Club | Seogwipo | small | n.a. | n.a. | no | no | n.a. | no record | 0 |

Source for every cell in this table is the corresponding club section above.

## Cross-cutting observations

- **Fun-dive price band:** the confirmed 2-dive boat prices cluster at ₩100,000–160,000, with Haevit Dive cheapest at [₩100,000](https://divetokorea.com/en/shops/shop-jeju-haevitdive/) and Mobydick Dive dearest at [₩160,000](https://divetokorea.com/en/shops/shop-jeju-mobydick/) (a 55 ft yacht justifies the premium). Seogwipo Dive Center's [₩150,000](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) is high for a shop with no English support.
- **The modoo! die-off matters:** Naver shut modoo! on 2025-06-26, killing the official websites of [Sea Sky Jeju](https://seaskyjeju.modoo.at/), [Yong Dive](https://yongdivejeju.modoo.at/), [Blue Whale Dive](https://bluewhaledive.modoo.at/), [Home Dive](https://homedive.modoo.at/) and [Dive Together's old site](https://divetogether.modoo.at/). PADI's directory still links several of these dead URLs, so any dataset built from PADI alone will carry broken links.
- **PADI data is stale in places:** [Home Dive's PADI coordinates](https://www.padi.com/dive-center/south-korea/home-dive/) are ~15 km off, and [ECO Divers' PADI address](https://www.padi.com/dive-center/south-korea/eco-divers/) predates the move recorded on [Kakao](https://place.map.kakao.com/1634125766). Kakao coordinates should be preferred throughout.
- **Review data is genuinely thin.** Across clubs 18–33 only ~25 star-rated reviews carry a date of Jan 2024 or later. The freshest signals are [Blue Whale Dive](https://place.map.kakao.com/692022430) (two 5★ on 2026-08-02) and [ECO Divers](https://place.map.kakao.com/1634125766) (all three of its reviews are 2024+). The only recent negative is [Badadive's 1★ of 2026-05-31](https://place.map.kakao.com/1012962688).
- **Blog-review counts are a better activity proxy than star counts**: [Haevit Dive](https://place.map.kakao.com/1354596561) (110), [Start Scuba School](https://place.map.kakao.com/668217740) (99) and [Seaflow](https://place.map.kakao.com/932982348) (87) dominate, while [Home Dive](https://place.map.kakao.com/429915856) and [Jamsootaki](https://www.padi.com/dive-center/south-korea/jamsootaki-dive-club/) have effectively none.
- **English service is scarcer than PADI implies.** [Seogwipo Dive Center](https://divetokorea.com/en/shops/shop-jeju-seogwipodive/) and [Home Dive](https://divetokorea.com/en/shops/shop-jeju-homedive/) are explicitly Korean-only; [Cool Dive](https://divetokorea.com/en/shops/shop-jeju-cooldive/) is listed as bilingual on PADI but Korean-only in practice; [Scuba Life](https://www.padi.com/dive-center/south-korea/scuba-life-2/) targets Mandarin speakers instead.
