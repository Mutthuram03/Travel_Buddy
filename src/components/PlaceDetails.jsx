import FoodList from './FoodList'
import CostCard from './CostCard'
import DynamicImage from './DynamicImage'

function PlaceDetails({ cityName, place }) {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card dark:border-slate-700 dark:bg-slate-900">
        <DynamicImage
          title={place.name}
          fallback={place.image}
          alt={place.name}
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{cityName}</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {place.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{place.description}</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <FoodList foodItems={place.food} />
        <CostCard stayCost={place.stayCost} travelCost={place.travelCost} />
      </div>
    </section>
  )
}

export default PlaceDetails
