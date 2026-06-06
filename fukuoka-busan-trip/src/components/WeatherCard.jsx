import React from 'react'
import { useWeather } from '../hooks/useWeather.js'
import './WeatherCard.css'

export default function WeatherCard({ city }) {
  const { weather, status } = useWeather(city)

  return (
    <div className="weather-card">
      <div className="weather-head">
        <i className="ti ti-cloud-sun" /> 目的地即時天氣
      </div>

      <div className="weather-body">
        {status === 'loading' && (
          <div className="weather-loading">
            <i className="ti ti-loader-2 spin" /> 載入中…
          </div>
        )}

        {status === 'error' && (
          <div className="weather-loading error">
            ⚠️ 天氣資料載入失敗
          </div>
        )}

        {status === 'ok' && weather && (
          <>
            {/* 當前 */}
            <div className="weather-now">
              <span className="weather-now-icon">{weather.info.e}</span>
              <div>
                <div className="weather-now-temp">{weather.temp}°C</div>
                <div className="weather-now-desc">{weather.info.d}</div>
              </div>
              <div className="weather-now-meta">
                <span>💧 {weather.humidity}%</span>
                <span>💨 {weather.wind}km/h</span>
              </div>
            </div>

            {/* 今日概況 */}
            <div className="weather-row summary">
              <span className="weather-row-icon">📅</span>
              <span className="weather-row-temp">{weather.tmin}–{weather.tmax}°C</span>
              <span className="weather-row-desc">☔ {weather.rainChance}%</span>
            </div>

            {/* 時段 */}
            {weather.slots.length > 0 && (
              <>
                <div className="weather-day-label" style={{ marginTop: 6 }}>今日時段</div>
                {weather.slots.map((slot, i) => (
                  <div key={i} className="weather-row">
                    <span className="weather-row-time">{slot.label}</span>
                    <span className="weather-row-icon">{slot.e}</span>
                    <span className="weather-row-temp">{slot.temp}°C</span>
                    <span className="weather-row-desc">{slot.d}</span>
                  </div>
                ))}
              </>
            )}

            <div className="weather-source">即時資料 · Open-Meteo</div>
          </>
        )}
      </div>
    </div>
  )
}
