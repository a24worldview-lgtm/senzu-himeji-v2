export const SITE = {
  name: '仙豆のちから 姫路大手前通り店',
  nameShort: '仙豆のちから',
  description: '姫路駅徒歩5分のドライヘッドスパ・ヘッドマッサージ専門店。眼精疲労・肩こり・不眠・自律神経の乱れを頭のマッサージで改善。完全個室・男性OK。HotPepperで初回クーポンあり。',
  url: 'https://senzu-himeji.com', 
  address: {
    postalCode: '670-0923',
    region: '兵庫県',
    city: '姫路市',
    street: '呉服町48番地 ハトヤビル1階 102',
    full: '兵庫県姫路市呉服町48番地 ハトヤビル1階 102',
    access: 'JR姫路駅北口から徒歩5分',
  },
  hours: {
    open: '10:30',
    close: '22:00',
    lastEntry: '21:00',
    holiday: '不定休',
  },
  geo: {
    lat: 34.8293,
    lng: 134.693,
  },
  hotpepperCoupon: 'https://beauty.hotpepper.jp/kr/slnH000569966/coupon/',
  noteAccount: 'https://note.com/senzu_himeji',
} as const
