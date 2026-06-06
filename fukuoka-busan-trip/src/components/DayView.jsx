import React, { useState } from 'react'
import TimelineItem from './TimelineItem.jsx'
import MapPanel from './MapPanel.jsx'
import WeatherCard from './WeatherCard.jsx'
import Modal from './Modal.jsx'
import { CHECKLISTS, DAY_DATES } from '../data/days.js'
import { useWeather } from '../hooks/useWeather.js'

export default function DayView({ day, dayIndex, onUpdateItems }) {
  const [dragSrc, setDragSrc] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [editIdx, setEditIdx] = useState(null)
  const [checks, setChecks] = useState(() => Array(CHECKLISTS[day.city]?.length || 0).fill(false))

  const isJp = day.city === 'jp'
  const currency = isJp ? '¥' : '₩'
  const totalCost = day.items.reduce((s, it) => s + (it.cost || 0), 0)
  const dateStr = DAY_DATES[dayIndex] || ''
  const checklistItems = CHECKLISTS[day.city] || []

  const { weather, status } = useWeather(day.city)

  // ── Drag ──
  function handleDragStart(e, i) {
    setDragSrc(i)
    e.currentTarget.classList.add('dragging')
  }

  function handleDragOver(e, i) {
    e.preventDefault()
    document.querySelectorAll('.t-item').forEach((el) => el.classList.remove('drag-over'))
    if (i !== dragSrc) e.currentTarget.classList.add('drag-over')
  }

  function handleDrop(e, i) {
    e.preventDefault()
    if (dragSrc === null || dragSrc === i) return
    const next = [...day.items]
    const [moved] = next.splice(dragSrc, 1)
    next.splice(i, 0, moved)
    onUpdateItems(next)
    setDragSrc(null)
  }

  function handleDragEnd() {
    document.querySelectorAll('.t-item').forEach((el) =>
      el.classList.remove('dragging', 'drag-over')
    )
    setDragSrc(null)
  }

  // ── CRUD ──
  function handleDelete(i) {
    if (!confirm('確定刪除此行程點？')) return
    const next = [...day.items]
    next.splice(i, 1)
    onUpdateItems(next)
  }

  function openAdd() {
    setEditIdx(null)
    setModalOpen(true)
  }

  function openEdit(i) {
    setEditIdx(i)
    setModalOpen(true)
  }

  function handleSave(item) {
    const next = [...day.items]
    if (editIdx !== null) {
      next[editIdx] = {
        ...next[editIdx],
        ...item,
      }
    } else {
      next.push({
        id: 'n' + Date.now(),
        mp: { x: Math.floor(Math.random() * 110) + 35, y: Math.floor(Math.random() * 90) + 40 },
        ...item,
      })
    }
    onUpdateItems(next)
    setModalOpen(false)
  }

  function toggleCheck(i) {
    setChecks((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  // Weather chip content
  let chipContent = null
  if (dateStr) {
    if (status === 'loading') {
      chipContent = <span className="weather-chip loading"><i className="ti ti-cloud" /> 載入天氣中…</span>
    } else if (status === 'ok' && weather) {
      chipContent = (
        <span className="weather-chip">
          {weather.info.e} {weather.cityName} {weather.tmin}–{weather.tmax}°C ☔{weather.rainChance}%
        </span>
      )
    } else if (status === 'error') {
      chipContent = <span className="weather-chip error"><i className="ti ti-cloud-off" /> 天氣載入失敗</span>
    }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">{isJp ? '🇯🇵' : '🇰🇷'} {day.date}</div>
        </div>
        <button className={`btn btn-${isJp ? 'jp' : 'kr'}`} onClick={openAdd}>
          <i className="ti ti-plus" /> 新增
        </button>
      </div>

      <div className="chips">
        {chipContent}
      </div>

      <div className="content-grid">
        {/* Timeline */}
        <div className="timeline-col">
          <div className="card">
            {day.items.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={i}
                city={day.city}
                onEdit={openEdit}
                onDelete={handleDelete}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
              />
            ))}
            <div className="add-row" onClick={openAdd}>
              <i className="ti ti-plus" /> 新增行程點
            </div>
          </div>

          <div className="cost-bar">
            <span className="cost-label"><i className="ti ti-wallet" /> 今日預估費用</span>
            <span className="cost-val">{currency}{totalCost.toLocaleString()}</span>
          </div>

          <div className="checklist">
            <div className="checklist-title">
              <i className="ti ti-checklist" /> 行前確認清單
            </div>
            {checklistItems.map((text, i) => (
              <label key={i} className={`check-row ${checks[i] ? 'done' : ''}`}>
                <input
                  type="checkbox"
                  checked={checks[i]}
                  onChange={() => toggleCheck(i)}
                />
                {text}
              </label>
            ))}
          </div>
        </div>

        {/* Side panel */}
        <div className="side-col">
          <MapPanel items={day.items} city={day.city} />
          <WeatherCard city={day.city} />
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        editItem={editIdx !== null ? day.items[editIdx] : null}
        city={day.city}
        onSave={handleSave}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}
