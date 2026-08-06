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
      showingFiltered: 'Showing {filtered} of {total} clubs',
      capabilities: 'Capabilities',
      ownsBoat: 'Owns a boat',
      tecDiving: 'Tec diving',
      freediving: 'Freediving'
    },
    drawer: {
      title: 'Club details',
      close: 'Close details',
      sectionAbout: 'About',
      sectionContact: 'Contact',
      sectionFeedback: 'Feedback',
      city: 'City',
      address: 'Address',
      size: 'Size',
      instructors: 'Instructors',
      years: 'Years in business',
      languages: 'Languages',
      certs: 'Certifications',
      boat: 'Owns a boat',
      tec: 'Tec diving',
      free: 'Freediving',
      price: 'Price/dive',
      website: 'Website',
      naverMap: 'Naver Map',
      noContact: 'No contact details recorded.',
      feedbackPending: 'Feedback summaries are not available yet.',
      contactEmail: 'Email',
      contactMobilePhone: 'Phone',
      contactWhatsapp: 'WhatsApp',
      contactKakaotalk: 'KakaoTalk',
      contactInstagram: 'Instagram',
      emptyValue: '-'
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
      showingFiltered: '显示 {filtered} / {total} 家俱乐部',
      capabilities: '装备与项目',
      ownsBoat: '拥有船只',
      tecDiving: '技术潜水',
      freediving: '自由潜水'
    },
    drawer: {
      title: '俱乐部详情',
      close: '关闭详情',
      sectionAbout: '基本信息',
      sectionContact: '联系方式',
      sectionFeedback: '评价',
      city: '城市',
      address: '地址',
      size: '规模',
      instructors: '教练人数',
      years: '经营年数',
      languages: '语言',
      certs: '认证',
      boat: '拥有船只',
      tec: '技术潜水',
      free: '自由潜水',
      price: '每次潜水价格',
      website: '网站',
      naverMap: 'Naver 地图',
      noContact: '暂无联系方式。',
      feedbackPending: '暂无评价摘要。',
      contactEmail: '邮箱',
      contactMobilePhone: '电话',
      contactWhatsapp: 'WhatsApp',
      contactKakaotalk: 'KakaoTalk',
      contactInstagram: 'Instagram',
      emptyValue: '-'
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
      showingFiltered: '{total}件中{filtered}件のクラブを表示中',
      capabilities: '対応項目',
      ownsBoat: 'ボート所有',
      tecDiving: 'テックダイビング',
      freediving: 'フリーダイビング'
    },
    drawer: {
      title: 'クラブ詳細',
      close: '詳細を閉じる',
      sectionAbout: '基本情報',
      sectionContact: '連絡先',
      sectionFeedback: '評価',
      city: '市',
      address: '住所',
      size: '規模',
      instructors: 'インストラクター数',
      years: '営業年数',
      languages: '対応言語',
      certs: '認定資格',
      boat: 'ボート所有',
      tec: 'テクニカルダイビング',
      free: 'フリーダイビング',
      price: '1ダイブ料金',
      website: 'ウェブサイト',
      naverMap: 'Naver マップ',
      noContact: '連絡先の登録はありません。',
      feedbackPending: '評価のまとめはまだありません。',
      contactEmail: 'メール',
      contactMobilePhone: '電話',
      contactWhatsapp: 'WhatsApp',
      contactKakaotalk: 'KakaoTalk',
      contactInstagram: 'Instagram',
      emptyValue: '-'
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
      showingFiltered: '{total}개 중 {filtered}개 클럽 표시 중',
      capabilities: '지원 항목',
      ownsBoat: '보트 보유',
      tecDiving: '테크니컬 다이빙',
      freediving: '프리다이빙'
    },
    drawer: {
      title: '클럽 상세정보',
      close: '상세정보 닫기',
      sectionAbout: '기본 정보',
      sectionContact: '연락처',
      sectionFeedback: '후기',
      city: '지역',
      address: '주소',
      size: '규모',
      instructors: '강사 수',
      years: '운영 연수',
      languages: '지원 언어',
      certs: '자격증',
      boat: '보트 보유',
      tec: '테크니컬 다이빙',
      free: '프리다이빙',
      price: '다이빙당 가격',
      website: '웹사이트',
      naverMap: '네이버 지도',
      noContact: '등록된 연락처가 없습니다.',
      feedbackPending: '후기 요약은 아직 제공되지 않습니다.',
      contactEmail: '이메일',
      contactMobilePhone: '전화',
      contactWhatsapp: '왓츠앱',
      contactKakaotalk: '카카오톡',
      contactInstagram: '인스타그램',
      emptyValue: '-'
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
