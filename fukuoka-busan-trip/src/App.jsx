import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import DayView from './components/DayView.jsx'
import Overview from './components/Overview.jsx'
import { INITIAL_DAYS } from './data/days.js'

export default function App() {
  const [days, setDays] = useState(() => JSON.parse(JSON.stringify(INITIAL_DAYS)))
  const [activeDay, setActiveDay] = useState(0)

  function handleSetDay(i) {
    setActiveDay(i)
    window.scrollTo(0, 0)
  }

  function handleUpdateItems(newItems) {
    setDays((prev) => {
      const next = [...prev]
      next[activeDay] = { ...next[activeDay], items: newItems }
      return next
    })
  }

  const day = days[activeDay]

  return (
    <div className="shell">
      <Sidebar days={days} activeDay={activeDay} onSetDay={handleSetDay} />
      <main className="main-content">
        {day.city === 'info'
          ? <Overview />
          : <DayView
              key={activeDay}
              day={day}
              dayIndex={activeDay}
              onUpdateItems={handleUpdateItems}
            />
        }
      </main>
    </div>
  )
}
