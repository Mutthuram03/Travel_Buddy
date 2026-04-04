import { useState } from 'react'
import { allPlaces } from '../data/tamilNaduData'

function TripForm({ onCreateTrip }) {
  const [name, setName] = useState('')
  const [selectedPlaces, setSelectedPlaces] = useState([])

  const togglePlace = (placeId) => {
    setSelectedPlaces((prev) =>
      prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !selectedPlaces.length) {
      return
    }
    onCreateTrip({ name: name.trim(), selectedPlaces })
    setName('')
    setSelectedPlaces([])
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Create Trip</h3>
      <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">Trip Name</label>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Friends Hill Escape"
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring dark:border-slate-600 dark:bg-slate-800"
      />
      <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">Selected Places</p>
      <div className="mt-2 grid max-h-48 gap-2 overflow-y-auto rounded-xl border border-slate-200 p-3 dark:border-slate-700">
        {allPlaces.map((place) => (
          <label key={place.id} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <input
              type="checkbox"
              checked={selectedPlaces.includes(place.id)}
              onChange={() => togglePlace(place.id)}
            />
            <span>{place.placeName} ({place.cityName})</span>
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        Save Trip
      </button>
    </form>
  )
}

export default TripForm
