import { useEffect, useState } from 'react'

function WeatherWidget({ cityName }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isMounted = true
    async function fetchWeather() {
      try {
        setLoading(true)
        setError(false)
        
        // 1. Geocode the city
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`)
        const geoData = await geoRes.json()
        
        if (!geoData.results || geoData.results.length === 0) {
          throw new Error('City not found')
        }
        
        const { latitude, longitude } = geoData.results[0]

        // 2. Fetch weather
        const wxRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`)
        const wxData = await wxRes.json()

        if (isMounted) {
          setWeather(wxData)
          setLoading(false)
        }
      } catch (e) {
        console.error('Weather error:', e)
        if (isMounted) {
          setError(true)
          setLoading(false)
        }
      }
    }
    fetchWeather()
    return () => { isMounted = false }
  }, [cityName])

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900 animate-pulse">
        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-4"></div>
        <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700"></div>
      </div>
    )
  }

  if (error || !weather) return null

  const current = weather.current
  const daily = weather.daily

  // Helper to map simple weather codes to emojis
  const getWeatherIcon = (code) => {
    if (code <= 3) return '☀️' // Clear/Partly cloudy
    if (code <= 49) return '🌫️' // Fog/Smog
    if (code <= 69) return '🌧️' // Rain
    if (code <= 79) return '❄️' // Snow
    if (code <= 99) return '⛈️' // Thunderstorm
    return '🌥️'
  }

  return (
    <div className="rounded-3xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900 dark:bg-sky-900/20 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="text-5xl">{getWeatherIcon(current.weather_code)}</div>
        <div>
          <p className="text-sm font-bold text-sky-800 dark:text-sky-300 uppercase tracking-widest">{cityName} Weather</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-black text-slate-800 dark:text-slate-100">{Math.round(current.temperature_2m)}°c</h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Humidity: {current.relative_humidity_2m}%</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 border-t sm:border-t-0 sm:border-l border-sky-200 dark:border-sky-800 pt-4 sm:pt-0 sm:pl-6">
        {daily.time.slice(1, 4).map((date, i) => (
          <div key={date} className="text-center text-sm">
            <p className="font-semibold text-slate-600 dark:text-slate-300">
              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <p className="text-lg">{getWeatherIcon(daily.weather_code[i+1])}</p>
            <p className="text-xs font-medium text-slate-500">
              {Math.round(daily.temperature_2m_max[i+1])}° | {Math.round(daily.temperature_2m_min[i+1])}°
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherWidget