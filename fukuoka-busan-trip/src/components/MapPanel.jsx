import React from 'react'
import './MapPanel.css'

function buildMapEmbedUrl(items, city) {
  const suffix = city === 'jp' ? '福岡' : '釜山'
  const places = items.map((it) => encodeURIComponent(it.name + ' ' + suffix))
  if (places.length === 0) return ''
  if (places.length === 1) {
    return `https://maps.google.com/maps?q=${places[0]}&output=embed&z=14`
  }
  const origin = places[0]
  const dest = places[places.length - 1]
  const waypoints = places.slice(1, -1).join('|')
  let url = `https://maps.google.com/maps?saddr=${origin}&daddr=${dest}`
  if (waypoints) url += `&dirflg=d&via=${waypoints}`
  url += `&output=embed`
  return url
}

function buildRouteUrl(items, city) {
  const suffix = city === 'jp' ? '+福岡+日本' : '+釜山+韓國'
  const wp = items.map((it) => encodeURIComponent(it.name + suffix)).join('/')
  return `https://www.google.com/maps/dir/${wp}`
}

export default function MapPanel({ items, city }) {
  if (!items || items.length === 0) return null
  const embedUrl = buildMapEmbedUrl(items, city)
  const routeUrl = buildRouteUrl(items, city)

  return (
    <div className="map-card">
      <div className="map-head">
        <i className="ti ti-map-2" /> 今日路線地圖
      </div>
      <iframe
        className="map-embed"
        src={embedUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="今日路線地圖"
      />
      <a className="map-open" href={routeUrl} target="_blank" rel="noreferrer">
        <i className="ti ti-external-link" /> 完整 Google Maps 路線
      </a>
    </div>
  )
}
