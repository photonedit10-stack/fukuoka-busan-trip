import React from 'react'
import { OVERVIEW_CARDS } from '../data/days.js'

const NOTE_ICONS = {
  warn: 'ti-alert-triangle',
  alert: 'ti-alert-circle',
  info: 'ti-info-circle',
  tip: 'ti-check',
}

export default function Overview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">🗾 福岡・🇰🇷 釜山 行程總覽</div>
          <div className="page-date">2025.06.12 – 06.19 · 8天7夜 · 全團 6大1小</div>
        </div>
      </div>

      <div className="pinned">
        <div className="pinned-title">
          <i className="ti ti-pin" /> 全程重要提醒
        </div>
        {[
          '韓國地圖請用 Naver Map 或 Kakao Map（Google Map 在韓國時常不準）',
          '6/18 15:30 需提前下載 Catchtable App 線上搶排「超必殺豬皮」',
          '機場接送包車 NT$2,600 / 8人（得生旅行社），含兩地址接送',
          '釜山住宿哲修預訂，請提醒哲修於 6/1 付清尾款！',
          '福岡→釜山段每人托運行李限 15kg，血拼請節制',
        ].map((text, i) => (
          <div key={i} className="pinned-row">
            <i className="ti ti-alert-triangle" />
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>

      <div className="ov-grid">
        {OVERVIEW_CARDS.map((card, i) => (
          <div key={i} className="ov-card">
            <div className="ov-card-label">{card.label}</div>
            <div className="ov-card-name">
              {card.icon} {card.name}
              {card.link && (
                <a href={card.link} target="_blank" rel="noreferrer"
                  style={{ color: 'var(--info)', fontSize: 11, marginLeft: 4 }}>
                  <i className="ti ti-external-link" />
                </a>
              )}
            </div>
            <div className="ov-card-detail">{card.detail}</div>
            <span className={`note ${card.note.type}`}>
              <i className={`ti ${NOTE_ICONS[card.note.type] || 'ti-info-circle'}`} />
              {card.note.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
