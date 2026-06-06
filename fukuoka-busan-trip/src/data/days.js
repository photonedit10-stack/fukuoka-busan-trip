export const CITY_COORDS = {
  jp: { lat: 33.5904, lon: 130.4017, name: '福岡', tz: 'Asia/Tokyo' },
  kr: { lat: 35.1796, lon: 129.0756, name: '釜山', tz: 'Asia/Seoul' },
}

export const DAY_DATES = [
  '',             // d0 overview
  '2025-06-12',  // d1
  '2025-06-13',  // d2
  '2025-06-14',  // d3
  '2025-06-15',  // d4
  '2025-06-16',  // d5
  '2025-06-17',  // d6
  '2025-06-18',  // d7
  '2025-06-19',  // d8
]

export const CHECKLISTS = {
  jp: [
    'Visit Japan Web 入境申請已填',
    '備妥日幣現金（建議¥5萬以上）',
    'IC 交通卡（Suica / ICOCA）',
    'Wi-Fi 分享器 / SIM 卡',
    '準備入境卡（飛機上發放）',
  ],
  kr: [
    'Korea ETA 電子旅行授權',
    '備妥韓圜現金',
    'T-money 卡（地鐵用）',
    'Naver Map / Kakao Map 已下載',
    'Catchtable App 已下載',
  ],
}

export const OVERVIEW_CARDS = [
  {
    icon: '✈️',
    label: '去程機票',
    name: '虎航 IT240',
    detail: '6/12 06:45 桃園T1 → 10:05 福岡',
    note: { type: 'alert', text: '凌晨 03:45 到機場 · 不加購餐點 · 得生加3行李額' },
  },
  {
    icon: '🏨',
    label: '福岡住宿',
    name: 'Moat Inside Tenjin',
    detail: '渡邊通站步行2分鐘 · Zoe預訂 · 含洗衣機',
    note: { type: 'info', text: 'booking.com/hotel/jp/moat-inside-tenjin' },
    link: 'https://www.booking.com/hotel/jp/moat-inside-tenjin.zh-tw.html',
  },
  {
    icon: '✈️',
    label: '福岡→釜山',
    name: '濟州航空 7C1451',
    detail: '6/16 08:55 福岡 → 10:00 釜山金海',
    note: { type: 'alert', text: '托運限 15kg！超重費昂貴，提前分攤' },
  },
  {
    icon: '🏨',
    label: '釜山住宿',
    name: 'Sangsang Stay Busan',
    detail: '西面站附近・樂天百貨旁 · 哲修預訂',
    note: { type: 'alert', text: '⚠️ 請提醒哲修 6/1 付清尾款！' },
  },
  {
    icon: '✈️',
    label: '回程機票',
    name: '華航 CI187',
    detail: '6/19 20:00 釜山金海 → 21:35 桃園T2',
    note: { type: 'info', text: '與去程同一訂單綁定' },
  },
  {
    icon: '🚐',
    label: '機場包車',
    name: '8人包車接送',
    detail: 'NT$2,600 含兩地址（得生旅行社）',
    note: { type: 'tip', text: '回台當天 07:30 出發，全員準時集合' },
  },
]

export const INITIAL_DAYS = [
  { id: 'd0', label: '行程總覽', date: '', city: 'info', items: [] },
  {
    id: 'd1', label: 'Day 1', date: '6/12（五）出發日', city: 'jp',
    items: [
      { id: 'a1', icon: '✈️', name: '台灣虎航 IT240 出發', time: '06:45', cost: 0,
        detail: '桃園機場 T1 → 10:05 抵達福岡機場\n去程不加購機上餐點',
        notes: [
          { type: 'alert', text: '凌晨 03:45–04:15 前必須抵達機場！大紅眼班機' },
          { type: 'warn', text: '得生加購 3 個行李額度（三大一小）' },
        ], mp: { x: 60, y: 45 } },
      { id: 'a2', icon: '🧳', name: 'ecbo cloak 寄放大行李', time: '抵達後', cost: 2000,
        detail: '16:52 前存放 8 個大行李，輕裝入市區',
        notes: [{ type: 'info', text: '地鐵寄放櫃，先寄放再辦 check-in' }],
        mp: { x: 100, y: 90 } },
      { id: 'a3', icon: '🏨', name: 'Moat Inside Tenjin 飯店 Check-in', time: '下午', cost: 0,
        detail: '渡邊通站步行 2 分鐘（約 540m）\n房間內附洗衣機 · Zoe 預訂',
        notes: [{ type: 'info', text: 'Booking 連結：booking.com/hotel/jp/moat-inside-tenjin' }],
        link: 'https://www.booking.com/hotel/jp/moat-inside-tenjin.zh-tw.html',
        mp: { x: 105, y: 105 } },
      { id: 'a4', icon: '🍜', name: '中洲屋台街晚餐', time: '19:00', cost: 2000,
        detail: '博多屋台文化，必吃豚骨拉麵',
        notes: [{ type: 'tip', text: '屋台以現金為主，準備日幣零錢' }],
        mp: { x: 110, y: 120 } },
    ],
  },
  {
    id: 'd2', label: 'Day 2', date: '6/13（六）太宰府・柳川', city: 'jp',
    items: [
      { id: 'b1', icon: '🎟️', name: '福岡太宰府・柳川暢遊套票', time: '早上', cost: 2800,
        detail: '使用西鐵一日套票，涵蓋電車＋遊船',
        notes: [{ type: 'info', text: '套票在西鐵福岡（天神）站購買' }],
        mp: { x: 45, y: 45 } },
      { id: 'b2', icon: '⛩️', name: '太宰府天滿宮', time: '上午', cost: 0,
        detail: '學問之神菅原道真的神社，祈求考運',
        notes: [{ type: 'tip', text: '必吃梅枝餅（梅ヶ枝餅），現烤香Q' }],
        mp: { x: 42, y: 65 } },
      { id: 'b3', icon: '🚣', name: '柳川遊船', time: '下午', cost: 1500,
        detail: '乘平底船穿梭水鄉柳川，導遊撐篙',
        notes: [{ type: 'tip', text: '必吃柳川蒸鰻魚飯（せいろ蒸し）' }],
        mp: { x: 38, y: 105 } },
      { id: 'b4', icon: '🏙️', name: '返回福岡市區', time: '傍晚', cost: 500,
        detail: '天神地下街逛街或早休息', notes: [], mp: { x: 100, y: 125 } },
    ],
  },
  {
    id: 'd3', label: 'Day 3', date: '6/14（日）由布院一日遊', city: 'jp',
    items: [
      { id: 'c1', icon: '🚌', name: '高速巴士 福岡→由布院', time: '早上', cost: 2800,
        detail: '博多巴士總站出發，約 2.5 小時',
        notes: [{ type: 'alert', text: '已訂妥來回高速巴士，確認出發時間' }],
        mp: { x: 35, y: 40 } },
      { id: 'c2', icon: '🏔️', name: '由布院散策・金鱗湖', time: '上午', cost: 0,
        detail: '湖面蒸氣繚繞，早晨最美', notes: [], mp: { x: 32, y: 65 } },
      { id: 'c3', icon: '🛍️', name: '由布院商店街購物', time: '午後', cost: 3000,
        detail: '湯の坪街道伴手禮、布丁、可麗餅', notes: [], mp: { x: 35, y: 85 } },
      { id: 'c4', icon: '♨️', name: '溫泉體驗', time: '下午', cost: 800,
        detail: '選間日歸溫泉或足湯',
        notes: [{ type: 'tip', text: '可參考：由布院花麹菊家、亀の井別荘日歸' }],
        mp: { x: 33, y: 100 } },
      { id: 'c5', icon: '🚌', name: '高速巴士 由布院→福岡', time: '傍晚', cost: 0,
        detail: '返回博多', notes: [], mp: { x: 100, y: 130 } },
    ],
  },
  {
    id: 'd4', label: 'Day 4', date: '6/15（一）購物 + 職棒', city: 'jp',
    items: [
      { id: 'e1', icon: '🛍️', name: '白天自由購物', time: '上午–下午', cost: 8000,
        detail: '天神・博多商圈血拼，藥妝、服飾、美食',
        notes: [{ type: 'warn', text: '⚠️ 釜山段托運限 15kg，請控制購物量或分攤重量' }],
        mp: { x: 100, y: 75 } },
      { id: 'e2', icon: '⚾', name: '福岡 PayPay Dome 日本職棒', time: '18:00', cost: 4000,
        detail: '軟銀鷹主場 · 內野指定席 A',
        notes: [
          { type: 'tip', text: '考慮製作徐若熙應援牌，現場氣氛超熱鬧' },
          { type: 'info', text: '建議提早入場體驗球場美食' },
        ], mp: { x: 65, y: 120 } },
    ],
  },
  {
    id: 'd5', label: 'Day 5', date: '6/16（二）移動→釜山', city: 'jp',
    items: [
      { id: 'f1', icon: '🧴', name: '早上最後補貨', time: '早上', cost: 5000,
        detail: '藥妝（松本清、Welcia）、名產、零食最後掃貨',
        notes: [{ type: 'warn', text: '⚠️ 行李必須控制在 15kg 以內（托運），注意超重' }],
        mp: { x: 100, y: 65 } },
      { id: 'f2', icon: '🏨', name: '飯店退房 & 整理行李', time: '出發前', cost: 0,
        detail: '退房後行李直接帶往機場', notes: [], mp: { x: 105, y: 85 } },
      { id: 'f3', icon: '✈️', name: '濟州航空 7C1451 → 釜山', time: '08:55', cost: 0,
        detail: '福岡機場 T1 → 10:00 釜山金海機場',
        notes: [
          { type: 'alert', text: '全團同班機 · 每人托運限額僅 15kg！超重費用昂貴' },
          { type: 'warn', text: '提早 2 小時到機場辦理登機' },
        ], mp: { x: 130, y: 130 } },
    ],
  },
  {
    id: 'd6', label: 'Day 6', date: '6/17（三）海雲台海岸線', city: 'kr',
    items: [
      { id: 'g1', icon: '🚡', name: '天空膠囊列車（尾浦→青沙浦）', time: '08:30', cost: 12000,
        detail: '海上空中纜車，第一班出發',
        notes: [
          { type: 'alert', text: '全團 6大1小，現場需分成兩車搭乘（每車限 4 人）' },
          { type: 'info', text: '已購妥票券' },
        ], mp: { x: 120, y: 48 } },
      { id: 'g2', icon: '🥯', name: 'All Sunday 貝果 / 早餐', time: '早上', cost: 15000,
        detail: '海雲台網紅早餐咖啡廳', notes: [], mp: { x: 115, y: 68 } },
      { id: 'g3', icon: '☕', name: 'Diart Coffee 土耳其奶油麵包', time: '上午', cost: 8000,
        detail: '超人氣打卡甜點', notes: [], mp: { x: 110, y: 82 } },
      { id: 'g4', icon: '🚂', name: '海岸列車（해변열차）', time: '下午', cost: 5000,
        detail: '沿海岸線行駛的觀光小火車，景色絕美', notes: [], mp: { x: 100, y: 96 } },
      { id: 'g5', icon: '🍜', name: '31cm 海鮮刀削麵', time: '下午', cost: 12000,
        detail: '超長份量的韓式刀削麵，必吃打卡', notes: [], mp: { x: 106, y: 108 } },
      { id: 'g6', icon: '🛷', name: 'Skyline Luge 滑車體驗', time: '下午', cost: 18000,
        detail: '居高臨下俯瞰海景，刺激又好玩', notes: [], mp: { x: 95, y: 102 } },
      { id: 'g7', icon: '🦀', name: '晚餐 · 尾浦家生醃醬蟹', time: '晚餐', cost: 40000,
        detail: '간장게장 鮮甜生醃蟹，韓食精髓',
        notes: [{ type: 'tip', text: '人氣店家建議提早到，或請飯店協助訂位' }],
        mp: { x: 118, y: 122 } },
    ],
  },
  {
    id: 'd7', label: 'Day 7', date: '6/18（四）汗蒸幕・西面', city: 'kr',
    items: [
      { id: 'h1', icon: '🍳', name: 'Working Holiday 早午餐', time: '早上', cost: 14000,
        detail: '西面人氣韓式早午餐', notes: [], mp: { x: 82, y: 58 } },
      { id: 'h2', icon: '♨️', name: 'Club D Oasis 汗蒸幕 + 水上樂園', time: '下午', cost: 25000,
        detail: '正宗韓國汗蒸幕，水療、蒸氣房體驗',
        notes: [{ type: 'tip', text: '準備換洗衣物與盥洗用品' }],
        mp: { x: 78, y: 78 } },
      { id: 'h3', icon: '🥩', name: '15:30 Catchtable 搶排「超必殺豬皮」', time: '15:30', cost: 30000,
        detail: '排隊美食！需準時線上搶排',
        notes: [{ type: 'alert', text: '⚠️ 提前下載 Catchtable App，15:30 準時開搶！' }],
        mp: { x: 84, y: 93 } },
      { id: 'h4', icon: '🏬', name: 'Centum City 新世界百貨逛街', time: '傍晚', cost: 20000,
        detail: '亞洲最大百貨，品牌齊全',
        notes: [{ type: 'tip', text: '推薦吃悻悻拉麵（식식라면）' }],
        mp: { x: 118, y: 88 } },
      { id: 'h5', icon: '💉', name: '醫美行程', time: '傍晚', cost: 0,
        detail: 'Centum City 周邊韓國醫美診所',
        notes: [{ type: 'info', text: '建議提前查好診所並線上預約' }],
        mp: { x: 114, y: 100 } },
      { id: 'h6', icon: '🌃', name: '海里團路商圈 + 海雲台傳統市場', time: '晚上', cost: 15000,
        detail: '夜晚逛街掃貨，傳統市場小吃', notes: [], mp: { x: 108, y: 113 } },
    ],
  },
  {
    id: 'd8', label: 'Day 8', date: '6/19（五）返台日', city: 'kr',
    items: [
      { id: 'i1', icon: '🚐', name: '07:30 包車直達金海機場', time: '07:30', cost: 0,
        detail: '8人包車 NT$2,600，得生旅行社安排，含兩地址接送',
        notes: [{ type: 'alert', text: '⚠️ 全員 07:30 準時集合，不等人！' }],
        mp: { x: 58, y: 78 } },
      { id: 'i2', icon: '🧳', name: '辦理登機 & 行李托運', time: '出發後', cost: 0,
        detail: '提早 2–3 小時到機場，悠哉過安檢',
        notes: [{ type: 'warn', text: '回台免稅額每人 NT$12,000，超過須申報' }],
        mp: { x: 65, y: 98 } },
      { id: 'i3', icon: '✈️', name: '中華航空 CI187 返台', time: '20:00', cost: 0,
        detail: '釜山金海機場 → 21:35 桃園機場 T2',
        notes: [{ type: 'info', text: '與 6/12 去程機票同一訂單綁定' }],
        mp: { x: 72, y: 120 } },
    ],
  },
]
