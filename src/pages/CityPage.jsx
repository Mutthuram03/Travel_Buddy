import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PlaceCard from '../components/PlaceCard'
import WeatherWidget from '../components/WeatherWidget'
import MapView from '../components/MapView'
import { findCityById } from '../data/tamilNaduData'

function CityPage() {
  const { cityId } = useParams()
  const city = findCityById(cityId)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'map'

  if (!city) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-200">
        City not found.
      </div>
    )
  }

  // Format places for the map component
  const mapPlaces = city.places.map(p => ({
    name: p.name,
    cityName: city.name,
    id: p.id
  }))

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">City</p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">{city.name}</h1>
        </div>
        <Link
          to="/"
          className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Back to Cities
        </Link>
      </div>

      {/* Live Weather Widget */}
      <WeatherWidget cityName={city.name} />

      {/* Toggle View */}
      <div className="flex justify-end gap-2 my-6">
        <button 
          onClick={() => setViewMode('list')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition ${viewMode === 'list' ? 'bg-slate-800 text-white dark:bg-emerald-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
        >
          Grid View
        </button>
        <button 
          onClick={() => setViewMode('map')}
          className={`px-4 py-2 rounded-xl text-sm font-bold transition ${viewMode === 'map' ? 'bg-slate-800 text-white dark:bg-emerald-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
        >
          Map View
        </button>
      </div>

      {/* Content Area */}
      {viewMode === 'list' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {city.places.map((place) => (
            <PlaceCard key={place.id} cityId={city.id} place={place} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <MapView places={mapPlaces} />
        </div>
      )}
    </section>
  )
}

export default CityPage
