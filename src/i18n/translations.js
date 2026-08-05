// Translation dictionaries for every user-facing string in the app.
// Keys are grouped by UI area so it's easy to see what's still missing
// when a new string is added — every language object must have the same
// key shape as `en`.

export const SUPPORTED_LOCALES = ['en', 'zh', 'ja', 'ko'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_META = {
  en: { label: 'English', short: 'EN' },
  zh: { label: '中文', short: '中文' },
  ja: { label: '日本語', short: '日本語' },
  ko: { label: '한국어', short: '한국어' }
};

export const translations = {
  en: {
    title: 'Jeju Dive Club Comparator',
    subtitle: 'Compare scuba diving clubs on Jeju Island. Click a column header to sort, click a row to highlight it on the map.',
    loading: 'Loading database...',
    errorLoading: 'Error loading database: {error}',
    dbStatus: '[DB] rows loaded: {total} | mappable: {mappable} | unmappable: {unmappable}',
    dbWarnUnmappable: '{count} club(s) missing GPS coordinates:',
    table: {
      name: 'Name',
      city: 'City',
      size: 'Size',
      instructors: 'Instructors',
      years: 'Years',
      languages: 'Languages',
      certs: 'Certs',
      boat: 'Boat',
      tec: 'Tec',
      free: 'Free',
      price: 'Price/dive (KRW)',
      rating: 'Avg rating',
      website: 'Website',
      naverMap: 'Naver Map',
      yes: 'Yes',
      no: 'No',
      link: 'link',
      map: 'map',
      emptyValue: '-'
    },
    filters: {
      certification: 'Certification',
      size: 'Size',
      language: 'Language',
      maxPrice: 'Max price/dive (KRW)',
      noLimit: 'No limit',
      allCertifications: 'All certifications',
      allSizes: 'All sizes',
      allLanguages: 'All languages',
      reset: 'Reset filters',
      showingAll: 'Showing all {total} clubs',
      showingFiltered: 'Showing {filtered} of {total} clubs'
    },
    popup: {
      certs: 'Certs',
      languages: 'Languages',
      price: 'Price/dive',
      website: 'Website',
      emptyValue: '-'
    },
    footer: {
      prompt: 'Spotted an error or missing club?',
      link: 'Suggest edits on GitHub'
    },
    languageSwitcher: {
      label: 'Language'
    }
  },

  zh: {
    title: '济州岛潜水俱乐部比较器',
    subtitle: '比较济州岛的潜水俱乐部。点击列标题排序，点击一行以在地图上高亮显示。',
    loading: '正在加载数据库...',
    errorLoading: '加载数据库时出错：{error}',
    dbStatus: '[数据库] 已加载：{total} | 可定位：{mappable} | 不可定位：{unmappable}',
    dbWarnUnmappable: '{count} 家俱乐部缺少 GPS 坐标：',
    table: {
      name: '名称',
      city: '城市',
      size: '规模',
      instructors: '教练人数',
      years: '成立年数',
      languages: '语言',
      certs: '认证',
      boat: '船只',
      tec: '技术潜水',
      free: '自由潜水',
      price: '每次潜水价格（韩元）',
      rating: '平均评分',
      website: '网站',
      naverMap: 'Naver 地图',
      yes: '是',
      no: '否',
      link: '链接',
      map: '地图',
      emptyValue: '-'
    },
    filters: {
      certification: '认证',
      size: '规模',
      language: '语言',
      maxPrice: '最高价格/次（韩元）',
      noLimit: '无限制',
      allCertifications: '所有认证',
      allSizes: '所有规模',
      allLanguages: '所有语言',
      reset: '重置筛选',
      showingAll: '显示全部 {total} 家俱乐部',
      showingFiltered: '显示 {filtered} / {total} 家俱乐部'
    },
    popup: {
      certs: '认证',
      languages: '语言',
      price: '每次潜水价格',
      website: '网站',
      emptyValue: '-'
    },
    footer: {
      prompt: '发现错误或缺失的俱乐部？',
      link: '在 GitHub 上提出修改建议'
    },
    languageSwitcher: {
      label: '语言'
    }
  },

  ja: {
    title: '済州島ダイビングクラブ比較',
    subtitle: '済州島のスキューバダイビングクラブを比較できます。列の見出しをクリックして並べ替え、行をクリックして地図上でハイライトします。',
    loading: 'データベースを読み込み中...',
    errorLoading: 'データベースの読み込みエラー：{error}',
    dbStatus: '[DB] 読込件数：{total} | 地図表示可：{mappable} | 地図表示不可：{unmappable}',
    dbWarnUnmappable: 'GPS座標が未登録のクラブが{count}件あります：',
    table: {
      name: '名称',
      city: '都市',
      size: '規模',
      instructors: 'インストラクター数',
      years: '創業年数',
      languages: '対応言語',
      certs: '認定資格',
      boat: 'ボート所有',
      tec: 'テクニカル',
      free: 'フリーダイビング',
      price: '1ダイブ料金（KRW）',
      rating: '平均評価',
      website: 'ウェブサイト',
      naverMap: 'Naverマップ',
      yes: 'あり',
      no: 'なし',
      link: 'リンク',
      map: '地図',
      emptyValue: '-'
    },
    filters: {
      certification: '認定資格',
      size: '規模',
      language: '対応言語',
      maxPrice: '1ダイブの最高料金（KRW）',
      noLimit: '上限なし',
      allCertifications: 'すべての認定資格',
      allSizes: 'すべての規模',
      allLanguages: 'すべての言語',
      reset: 'フィルターをリセット',
      showingAll: '全{total}件のクラブを表示中',
      showingFiltered: '{total}件中{filtered}件のクラブを表示中'
    },
    popup: {
      certs: '認定資格',
      languages: '対応言語',
      price: '1ダイブ料金',
      website: 'ウェブサイト',
      emptyValue: '-'
    },
    footer: {
      prompt: '誤りや掲載漏れのクラブを見つけましたか？',
      link: 'GitHubで編集を提案する'
    },
    languageSwitcher: {
      label: '言語'
    }
  },

  ko: {
    title: '제주 스쿠버다이빙 클럽 비교',
    subtitle: '제주도의 스쿠버다이빙 클럽을 비교해 보세요. 열 제목을 클릭하면 정렬되고, 행을 클릭하면 지도에서 강조 표시됩니다.',
    loading: '데이터베이스를 불러오는 중...',
    errorLoading: '데이터베이스 로딩 오류: {error}',
    dbStatus: '[DB] 불러온 행: {total} | 지도 표시 가능: {mappable} | 지도 표시 불가: {unmappable}',
    dbWarnUnmappable: 'GPS 좌표가 없는 클럽 {count}곳:',
    table: {
      name: '이름',
      city: '도시',
      size: '규모',
      instructors: '강사 수',
      years: '운영 연수',
      languages: '지원 언어',
      certs: '자격증',
      boat: '보트 보유',
      tec: '테크니컬',
      free: '프리다이빙',
      price: '다이빙당 가격(원)',
      rating: '평균 평점',
      website: '웹사이트',
      naverMap: '네이버 지도',
      yes: '예',
      no: '아니오',
      link: '링크',
      map: '지도',
      emptyValue: '-'
    },
    filters: {
      certification: '자격증',
      size: '규모',
      language: '지원 언어',
      maxPrice: '다이빙당 최대 가격(원)',
      noLimit: '제한 없음',
      allCertifications: '모든 자격증',
      allSizes: '모든 규모',
      allLanguages: '모든 언어',
      reset: '필터 초기화',
      showingAll: '전체 {total}개 클럽 표시 중',
      showingFiltered: '{total}개 중 {filtered}개 클럽 표시 중'
    },
    popup: {
      certs: '자격증',
      languages: '지원 언어',
      price: '다이빙당 가격',
      website: '웹사이트',
      emptyValue: '-'
    },
    footer: {
      prompt: '오류나 누락된 클럽을 발견하셨나요?',
      link: 'GitHub에서 수정 제안하기'
    },
    languageSwitcher: {
      label: '언어'
    }
  }
};
