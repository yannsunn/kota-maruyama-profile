// 定数の管理

// URL定数
export const URLS = {
  instagram: 'https://www.instagram.com/marukou0722/',
  googleMaps: 'https://maps.app.goo.gl/wx3xBtgNCd27grwz9?g_st=ic',
  serviceDocument: 'https://docs.google.com/presentation/d/1bbNZD6bPcGXMabY6nve-OdkFeVjy9aUM/edit?slide=id.g34206fbfd05_0_698#slide=id.g34206fbfd05_0_698',
  elanMarireInstagram: 'https://www.instagram.com/elan_marire/',
  linkStretchInstagram: 'https://www.instagram.com/link_stretch/',
  phone: 'tel:0359258182'
} as const;

// 画像定数
export const IMAGES = {
  profile: '/kota-profile.jpg',
  about: '/S__8241389_0.jpg',
  gallery: [
    'S__8241403.jpg',
    'S__8241389_0.jpg',
    'S__8241391_0.jpg',
    'S__8241392_0.jpg',
    'S__8241393_0.jpg',
    'S__8241394_0.jpg',
    'S__8241395_0.jpg',
    'S__8241396.jpg',
    'S__8241397.jpg',
    'S__8241399.jpg',
    'S__8241400.jpg',
    'S__8241402.jpg'
  ]
} as const;

// 実績データ
export interface Achievement {
  title: string;
  link: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '最新インフルエンサーコラボイベント',
    link: 'https://www.instagram.com/p/DKY-vciTQ9f/?img_index=1'
  },
  {
    title: 'インフルエンサー×経営者集客イベント',
    link: 'https://www.instagram.com/p/DIYCEyqTOb3/?igsh=MXYwdTM5OW1nemh4Nw=='
  },
  {
    title: '同い年会',
    link: 'https://www.instagram.com/p/DJz6MoMT2MT/?igsh=MTNtcmlpNmZ4MnpjZg=='
  },
  {
    title: 'スポーツイベント 1',
    link: 'https://www.instagram.com/p/C67uwGPSxbP/?igsh=MTloZW83Njd1cWxibA=='
  },
  {
    title: 'スポーツイベント 2',
    link: 'https://www.instagram.com/p/C9b3i7WyIA3/?igsh=MmFpZmM4bGFhZnRt'
  },
  {
    title: 'サバゲーイベント',
    link: 'https://www.instagram.com/p/C2j7RsPyZIH/?igsh=d3h5aXJsZXYwbWZ3'
  }
];

// 経歴データ
export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  icon: 'briefcase' | 'trophy' | 'calendar';
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024年11月 - 現在',
    title: '株式会社Wolf CEO',
    description: '創業。BPO事業（Sales/SNS/建築）、イベントプロデュース、SaaS事業を展開',
    icon: 'briefcase'
  },
  {
    period: '2022年 - 2024年',
    title: '(株)Neptune 営業部長',
    description: 'SNSマーケ・映像スクールの商材販売を担当',
    icon: 'trophy'
  },
  {
    period: '2018年 - 2022年',
    title: '元警察 特殊部隊',
    description: '18～22歳の4年間、特殊部隊として勤務',
    icon: 'calendar'
  }
];

// 事業内容データ
export interface BusinessItem {
  title: string;
  description: string;
  colorClass: string;
  details?: {
    serviceName?: string;
    company?: string;
    link?: string;
  };
  highlights?: string[];
}

export const BUSINESS_ITEMS: BusinessItem[] = [
  {
    title: '① BPO事業',
    description: '営業・SNS・建築の3領域で業務最適化を実現',
    colorClass: 'from-gray-600 to-gray-800',
    details: {
      serviceName: '節約マーケ君',
      company: 'by 株式会社Perfact',
      link: URLS.serviceDocument
    }
  },
  {
    title: '② イベントプロデュース',
    description: '累計100本超の実績。インフルエンサー×経営者の架け橋',
    colorClass: 'from-blue-600 to-blue-800',
    highlights: [
      '250名規模イベント',
      '東京タワー / トランポランド',
      '経営者 150名',
      '総フォロワー3,000万リーチ',
      'インフルエンサー 100名',
      'ビジネスマッチング実績多数'
    ]
  },
  {
    title: '③ 飲食マーケティング・コンサル',
    description: '0→1立ち上げから売上最大化まで。4,000名の独自ネットワーク活用',
    colorClass: 'from-gray-500 to-gray-700',
    details: {
      serviceName: 'おばんざいさくら',
      company: '新宿で展開中'
    }
  }
];

// 顧問業データ
export interface AdvisoryItem {
  title: string;
  description?: string;
  highlight?: string;
  link?: string;
  linkText?: string;
  colorClass: string;
  icon: 'trophy' | 'heart' | 'instagram' | 'briefcase';
}

export const ADVISORY_ITEMS: AdvisoryItem[] = [
  {
    title: 'チルモングミ',
    description: '1年間で1万2,000個販売',
    highlight: 'Amazonグミランキング5位',
    colorClass: 'from-blue-600 to-blue-800',
    icon: 'trophy'
  },
  {
    title: 'animal dentist',
    description: '犬用歯磨き粉事業',
    colorClass: 'from-gray-600 to-gray-800',
    icon: 'heart'
  },
  {
    title: 'エランマリール',
    link: URLS.elanMarireInstagram,
    linkText: 'Instagram',
    description: 'エステ2万円券無料招待',
    colorClass: 'from-blue-600 to-blue-800',
    icon: 'instagram'
  },
  {
    title: 'リンクストレッチ',
    link: URLS.linkStretchInstagram,
    linkText: 'Instagram',
    colorClass: 'from-gray-600 to-gray-800',
    icon: 'briefcase'
  }
];

// 趣味リスト
export const HOBBIES = [
  '筋トレ',
  'MMA',
  'サウナ',
  'ダイビング',
  'サバゲー',
  '格闘技',
  'イベント企画',
  '散歩'
] as const;

// 個人情報
export const PERSONAL_INFO = {
  name: '丸山康太',
  nameKana: 'まるやまこうた',
  age: 25,
  birthYear: 1999,
  location: '神奈川県出身、東京・新宿在住',
  company: '株式会社Wolf',
  position: 'CEO',
  catchphrase: '伸び代',
  description: '元警察特殊部隊から起業家へ。',
  achievements: {
    events: '100本超',
    reach: '3,000万フォロワー',
    tokyoTowerEvent: '6月8日',
    followers: '30万フォロワー連携',
    monthlyAttendees: '月間100名集客達成'
  }
} as const;

// 店舗情報
export const STORE_INFO = {
  name: 'おばんざいさくら',
  address: '〒160-0022 東京都新宿区新宿３丁目８−２ クロスビル B1階',
  phone: '03-5925-8182',
  hours: {
    weekdays: '月〜土: 17:00〜24:00',
    closed: '日・祝: 定休日'
  },
  access: [
    'JR新宿駅 東口・南口 徒歩3分',
    '新宿三丁目駅 徒歩1分'
  ],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.557028838397!2d139.70190681525644!3d35.687900080192264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5d6b6aa8d%3A0x6c63d989f4d8a4a2!2z44CSMTY2LTAwMjIg5p2x5Lqs6YO95paw5a6_5Yy65paw5a6_77yT5LiB55uu77yY4oiS77ySIOOCr-ODreOCueODi-ODqyBCMQ!5e0!3m2!1sja!2sjp!4v1639999999999!5m2!1sja!2sjp'
} as const;

// ソーシャルメディア
export const SOCIAL_MEDIA = {
  instagram: {
    url: URLS.instagram,
    handle: '@marukou0722'
  }
} as const;

// SEO関連
export const SEO = {
  siteName: '丸山康太 | 株式会社Wolf CEO',
  description: '元警察特殊部隊から起業家へ。イベント実績100本超、総リーチ3,000万フォロワー。BPO事業、イベントプロデュース、飲食マーケティングを展開。',
  keywords: ['丸山康太', '株式会社Wolf', 'イベントプロデュース', 'マーケティング', 'BPO事業', 'SNSマーケティング'],
  ogImage: IMAGES.profile
} as const;

// Copyright
export const COPYRIGHT = '© 2024 丸山康太. All rights reserved.' as const;