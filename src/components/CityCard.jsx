import { Link } from 'react-router-dom'
import DynamicImage from './DynamicImage'

function CityCard({ city }) {
  return (
    <Link
      to={`/city/${city.id}`}
      className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="h-44 overflow-hidden">
        <DynamicImage
          title={`${city.name} Tamil Nadu`}
          fallback={city.heroImage}
          alt={city.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{city.name}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{city.places.length} famous places</p>
      </div>
    </Link>
  )
}

export default CityCard
