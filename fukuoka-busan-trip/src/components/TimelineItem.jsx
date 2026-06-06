import React from 'react'
import './TimelineItem.css'

const NOTE_ICONS = {
  warn: 'ti-alert-triangle',
  alert: 'ti-alert-circle',
  info: 'ti-info-circle',
  tip: 'ti-check',
}

export default function TimelineItem({ item, index, city, onEdit, onDelete, onDragStart, onDragOver, onDrop, onDragEnd }) {
  const q = encodeURIComponent(item.name + (city === 'jp' ? ',福岡,日本' : ',釜山,韓國'))
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`

  return (
    <div
      className="t-item"
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragEnd={onDragEnd}
    >
      <span className="t-item-grip">
        <i className="ti ti-grip-vertical" />
      </span>
      <span className="t-item-icon">{item.icon || '📍'}</span>

      <div className="t-item-body">
        <div className="t-item-name">
          {item.time && <span className="t-item-time">{item.time}</span>}
          {item.name}
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer" className="t-item-ext-link">
              <i className="ti ti-external-link" />
            </a>
          )}
        </div>

        {item.detail && (
          <div className="t-item-detail">
            {item.detail.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </div>
        )}

        {item.notes && item.notes.length > 0 && (
          <div className="notes">
            {item.notes.map((n, i) => (
              <span key={i} className={`note ${n.type}`}>
                <i className={`ti ${NOTE_ICONS[n.type] || 'ti-info-circle'}`} />
                {n.text}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="t-item-actions">
        <a href={mapsUrl} target="_blank" rel="noreferrer" title="在 Google Maps 查看">
          <button className="icon-btn map-btn">
            <i className="ti ti-map-pin" />
            <span className="btn-label">地圖</span>
          </button>
        </a>
        <button className="icon-btn edit-btn" title="編輯" onClick={() => onEdit(index)}>
          <i className="ti ti-edit" />
          <span className="btn-label">編輯</span>
        </button>
        <button className="icon-btn danger" title="刪除" onClick={() => onDelete(index)}>
          <i className="ti ti-trash" />
          <span className="btn-label">刪除</span>
        </button>
      </div>
    </div>
  )
}
