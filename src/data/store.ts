export const storeData = {
  name: 'CUBBYHOLE',
  nameEn: 'CUBBYHOLE',
  catchcopy: '金沢散策の休憩に',
  description:
    '尾山神社近くにある、おしゃれな隠れ家カフェ。\n朝の一杯にも、街歩きの休憩にもおすすめです。',
  address: '〒000-0000 住所は入力予定',
  addressMapQuery: '尾山神社 金沢',
  phone: '000-000-0000',
  businessHours: [
    { day: 'モーニング', time: '00:00 〜 00:00', lastOrder: '00:00' },
    { day: 'ランチ', time: '00:00 〜 00:00', lastOrder: '00:00' },
  ],
  closedDays: '定休日は入力予定',
  smoking: {
    allowed: false,
    note: '全席禁煙',
  },
  parking: {
    available: false,
    spaces: 0,
    note: '近隣のコインパーキングをご利用ください。',
  },
  reservation: {
    phone: '000-000-0000',
    note: 'ご予約に関する案内は入力予定です。',
    onlineUrl: '',
    hours: '',
  },
  payment: [
    { name: '現金', icon: '💴' },
    { name: 'クレジットカード', icon: '💳' },
    { name: 'PayPay', icon: '📱' },
    { name: '交通系ICカード', icon: '🎫' },
  ],
  sns: {
    instagram: '',
    twitter: '',
    facebook: '',
    line: '',
  },
  news: [
    {
      date: '2026.01.01',
      tag: 'お知らせ',
      title: 'CUBBYHOLEのウェブサイトをオープンしました',
    },
    {
      date: '2026.01.01',
      tag: 'メニュー',
      title: '季節のメニューのお知らせ',
    },
    {
      date: '2026.01.01',
      tag: 'お知らせ',
      title: '営業時間のご案内',
    },
    {
      date: '2026.01.01',
      tag: 'お知らせ',
      title: 'その他のお知らせ',
    },
  ],
  menu: [
    {
      name: 'メニュー名1',
      description: 'メニューの説明文をここに入力してください。',
      category: 'コーヒー',
      image: '/images/menu/menu1.jpg',
    },
    {
      name: 'メニュー名2',
      description: 'メニューの説明文をここに入力してください。',
      category: 'コーヒー',
      image: '/images/menu/menu2.jpg',
    },
    {
      name: 'メニュー名3',
      description: 'メニューの説明文をここに入力してください。',
      category: 'フード',
      image: '/images/menu/menu3.jpg',
    },
    {
      name: 'メニュー名4',
      description: 'メニューの説明文をここに入力してください。',
      category: 'フード',
      image: '/images/menu/menu4.jpg',
    },
  ],
  gallery: [
    { label: '店内の様子', image: '/images/hero.jpg' },
    { label: 'お店の外観', image: '/images/about.jpg' },
    { label: '入口・外観', image: '/images/about.jpg' },
    { label: 'カフェの雰囲気', image: '/images/hero.jpg' },
  ],
}
