import { Link } from 'react-router-dom'
import DynamicImage from './DynamicImage'

function PlaceCard({ cityId, place }) {
  return (
    <Link
      to={`/place/${cityId}/${place.id}`}
      className="group overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="h-48 overflow-hidden">
        <DynamicImage
          title={place.name}
          fallback={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{place.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{place.description}</p>
      </div>
    </Link>
  )
}

export default PlaceCard
