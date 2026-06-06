import React, { useState, useEffect, useRef } from 'react'
import './Modal.css'

const EMPTY = { icon: '', name: '', time: '', cost: '', detail: '', note: '', noteType: 'warn' }

export default function Modal({ isOpen, editItem, city, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const nameRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    if (editItem) {
      setForm({
        icon: editItem.icon || '',
        name: editItem.name || '',
        time: editItem.time || '',
        cost: editItem.cost || '',
        detail: editItem.detail || '',
        note: editItem.notes?.[0]?.text || '',
        noteType: editItem.notes?.[0]?.type || 'warn',
      })
    } else {
      setForm(EMPTY)
    }
    setTimeout(() => nameRef.current?.focus(), 50)
  }, [isOpen, editItem])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!isOpen) return null

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  function handleSave() {
    if (!form.name.trim()) { nameRef.current?.focus(); return }
    const item = {
      icon: form.icon || '📍',
      name: form.name.trim(),
      time: form.time.trim(),
      cost: parseInt(form.cost) || 0,
      detail: form.detail.trim(),
      notes: form.note.trim() ? [{ type: form.noteType, text: form.note.trim() }] : [],
    }
    onSave(item)
  }

  const isJp = city === 'jp'

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-title">{editItem ? '編輯行程點' : '新增行程點'}</div>

        <div className="form-row">
          <div className="form-group" style={{ flex: '0 0 80px' }}>
            <label className="form-label">表情符號</label>
            <input className="form-input" value={form.icon} onChange={set('icon')} placeholder="📍" maxLength={4} />
          </div>
          <div className="form-group">
            <label className="form-label">行程名稱 *</label>
            <input className="form-input" ref={nameRef} value={form.name} onChange={set('name')} placeholder="景點 / 活動名稱" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">時間</label>
            <input className="form-input" value={form.time} onChange={set('time')} placeholder="09:00 或 早上" />
          </div>
          <div className="form-group">
            <label className="form-label">費用（{isJp ? '¥' : '₩'}）</label>
            <input className="form-input" type="number" value={form.cost} onChange={set('cost')} placeholder="0" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">詳細說明</label>
          <input className="form-input" value={form.detail} onChange={set('detail')} placeholder="補充資訊" />
        </div>

        <div className="form-group">
          <label className="form-label">注意事項</label>
          <textarea className="form-input" value={form.note} onChange={set('note')} placeholder="重要提醒（可空白）" />
        </div>

        <div className="form-group">
          <label className="form-label">注意類型</label>
          <select className="form-input" value={form.noteType} onChange={set('noteType')}>
            <option value="warn">警告（橘）</option>
            <option value="alert">緊急（紅）</option>
            <option value="info">資訊（藍）</option>
            <option value="tip">提示（綠）</option>
          </select>
        </div>

        <div className="modal-btns">
          <button className="btn" onClick={onClose}>取消</button>
          <button className={`btn btn-${isJp ? 'jp' : 'kr'}`} onClick={handleSave}>
            {editItem ? '儲存' : '新增'}
          </button>
        </div>
      </div>
    </div>
  )
}
