import { Link, useParams } from 'react-router-dom'
import PlaceDetails from '../components/PlaceDetails'
import { findCityById, findPlaceById } from '../data/tamilNaduData'

function PlacePage() {
  const { cityId, placeId } = useParams()
  const city = findCityById(cityId)
  const place = findPlaceById(cityId, placeId)

  if (!city || !place) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-200">
        Place not found.
      </div>
    )
  }

  return (
    <section>
      <Link
        to={`/city/${cityId}`}
        className="mb-5 inline-flex rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        Back to {city.name}
      </Link>
      <PlaceDetails cityName={city.name} place={place} />
    </section>
  )
}

export default PlacePage
