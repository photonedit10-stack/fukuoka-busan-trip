import React from 'react'
import './Sidebar.css'

export default function Sidebar({ days, activeDay, onSetDay }) {
  const jpDays = days.filter((d) => d.city === 'jp')
  const krDays = days.filter((d) => d.city === 'kr')

  return (
    <nav className="sidebar">
      <div className="sb-header">
        <div className="sb-trip">🗾 福岡・釜山</div>
        <div className="sb-sub">6/12 – 6/19 · 2025</div>
      </div>

      <div className="sb-section">概覽</div>
      <div
        className={`sb-item ${activeDay === 0 ? 'active' : ''}`}
        onClick={() => onSetDay(0)}
      >
        <span className="sb-flag">📋</span> 行程總覽
      </div>

      <div className="sb-section">🇯🇵 日本福岡段</div>
      {jpDays.map((d) => {
        const idx = days.findIndex((x) => x.id === d.id)
        return (
          <div
            key={d.id}
            className={`sb-item ${activeDay === idx ? 'active' : ''}`}
            onClick={() => onSetDay(idx)}
          >
            <span className="sb-flag">🇯🇵</span>
            {d.label}
            <span className="sb-dot jp" />
          </div>
        )
      })}

      <div className="sb-section">🇰🇷 韓國釜山段</div>
      {krDays.map((d) => {
        const idx = days.findIndex((x) => x.id === d.id)
        return (
          <div
            key={d.id}
            className={`sb-item ${activeDay === idx ? 'active' : ''}`}
            onClick={() => onSetDay(idx)}
          >
            <span className="sb-flag">🇰🇷</span>
            {d.label}
            <span className="sb-dot kr" />
          </div>
        )
      })}

      <div className="sb-footer">
        <div className="sb-legend">
          <div className="sb-legend-item">
            <div className="sb-legend-swatch" style={{ background: 'var(--jp)' }} />
            日本段
          </div>
          <div className="sb-legend-item">
            <div className="sb-legend-swatch" style={{ background: 'var(--kr)' }} />
            韓國段
          </div>
        </div>
      </div>
    </nav>
  )
}
