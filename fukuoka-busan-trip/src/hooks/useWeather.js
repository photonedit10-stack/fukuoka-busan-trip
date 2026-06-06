import { useState, useEffect } from 'react'
import { CITY_COORDS } from '../data/days.js'

const cache = {}

function wmoToInfo(code) {
  if (code === 0) return { e: '☀️', d: '晴天' }
  if (code <= 2) return { e: '⛅', d: '多雲' }
  if (code === 3) return { e: '☁️', d: '陰天' }
  if (code <= 49) return { e: '🌫️', d: '霧' }
  if (code <= 57) return { e: '🌧️', d: '毛毛雨' }
  if (code <= 67) return { e: '🌧️', d: '雨' }
  if (code <= 77) return { e: '🌨️', d: '雪' }
  if (code <= 82) return { e: '🌦️', d: '陣雨' }
  if (code <= 86) return { e: '🌨️', d: '陣雪' }
  if (code <= 99) return { e: '⛈️', d: '雷雨' }
  return { e: '🌡️', d: '' }
}

async function fetchCurrentWeather(city) {
  if (cache[city]) return cache[city]
  const c = CITY_COORDS[city]
  const url = [
    `https://api.open-meteo.com/v1/forecast`,
    `?latitude=${c.lat}&longitude=${c.lon}`,
    `&current=temperature_2m,weathercode,precipitation_probability,windspeed_10m,relativehumidity_2m`,
    `&hourly=temperature_2m,weathercode,precipitation_probability`,
    `&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max`,
    `&timezone=${c.tz}`,
    `&forecast_days=1`,
  ].join('')
  const res = await fetch(url)
  const json = await res.json()
  cache[city] = json
  // cache 5 分鐘後過期
  setTimeout(() => { delete cache[city] }, 5 * 60 * 1000)
  return json
}

export function useWeather(city) {
  const [weather, setWeather] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!city || city === 'info') return
    setStatus('loading')
    setWeather(null)

    fetchCurrentWeather(city)
      .then((json) => {
        const current = json?.current
        const daily = json?.daily
        if (!current || !daily) { setStatus('error'); return }

        const code = current.weathercode
        const info = wmoToInfo(code)
        const temp = Math.round(current.temperature_2m)
        const tmax = Math.round(daily.temperature_2m_max?.[0])
        const tmin = Math.round(daily.temperature_2m_min?.[0])
        const rainChance = daily.precipitation_probability_max?.[0] ?? 0
        const humidity = current.relativehumidity_2m
        const wind = Math.round(current.windspeed_10m)

        // 今日時段（早/午/晚）
        const today = new Date().toISOString().slice(0, 10)
        const hours = json.hourly?.time || []
        const temps = json.hourly?.temperature_2m || []
        const hcodes = json.hourly?.weathercode || []

        const SLOTS = [
          { label: '早上', hour: 9 },
          { label: '下午', hour: 14 },
          { label: '晚上', hour: 20 },
        ]

        const slots = SLOTS.map((slot) => {
          const idx = hours.findIndex(
            (t) => t === `${today}T${String(slot.hour).padStart(2, '0')}:00`
          )
          if (idx === -1) return null
          const si = wmoToInfo(hcodes[idx])
          return { label: slot.label, temp: Math.round(temps[idx]), ...si }
        }).filter(Boolean)

        setWeather({
          info, temp, tmax, tmin, rainChance, humidity, wind,
          slots,
          cityName: CITY_COORDS[city].name,
        })
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [city])

  return { weather, status }
}
