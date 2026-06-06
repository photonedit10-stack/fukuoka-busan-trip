# 福岡・釜山 旅遊行程 App 2025 🗾🇰🇷

React + Vite 旅遊行程管理 App，支援 Zeabur 一鍵部署。

## 功能

- 📅 8天行程管理（福岡 5天 + 釜山 3天）
- 🗺️ Google Maps 即時路線地圖嵌入
- 🌤️ Open-Meteo 自動抓取當日天氣預報
- ✏️ 行程點新增 / 編輯 / 刪除
- 🔀 拖曳排序行程點
- ✅ 行前確認清單
- 💴 每日費用試算

## 本地開發

```bash
npm install
npm run dev
```

瀏覽器開啟 http://localhost:5173

## 建置

```bash
npm run build
```

輸出在 `dist/` 資料夾。

## 部署到 Zeabur

1. 將此專案 push 到 GitHub
2. 登入 [zeabur.com](https://zeabur.com)
3. 建立新 Project → Add Service → GitHub
4. 選擇此 repo
5. Zeabur 會自動偵測 Vite 專案並部署

> Zeabur 會自動執行 `npm run build` 並 serve `dist/` 資料夾，無需額外設定。

## 專案結構

```
src/
├── App.jsx                 # 根元件，管理全域狀態
├── main.jsx                # React 入口
├── data/
│   └── days.js             # 所有行程資料、城市座標
├── hooks/
│   └── useWeather.js       # 天氣 API hook (Open-Meteo)
├── components/
│   ├── Sidebar.jsx / .css  # 左側導覽列
│   ├── DayView.jsx         # 單日行程頁面
│   ├── TimelineItem.jsx / .css  # 單一行程點
│   ├── MapPanel.jsx / .css # Google Maps 嵌入
│   ├── WeatherCard.jsx / .css   # 天氣卡片
│   ├── Modal.jsx / .css    # 新增/編輯 Modal
│   └── Overview.jsx        # 行程總覽頁
└── styles/
    └── index.css           # CSS 變數與全域樣式
```
