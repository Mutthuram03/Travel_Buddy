import { Link } from 'react-router-dom'
import CityCard from '../components/CityCard'
import { tamilNaduData } from '../data/tamilNaduData'

function HomePage() {
  return (
    <section>
      <div className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-card backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Tamil Nadu Place Explorer
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
          Complete Group Trip Assistant
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Pick a city, discover famous places, build your group plan, and precisely manage expenses in one place.
        </p>
      </div>

      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-3">
        <a href="#cities" className="group flex flex-col justify-between rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10 dark:border-indigo-900/50 dark:bg-indigo-900/10">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">Explore Cities</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Discover handpicked destinations, local authentic foods, and famous spots across Tamil Nadu.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Browse now <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </a>

        <Link to="/planner" className="group flex flex-col justify-between rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 dark:border-emerald-900/50 dark:bg-emerald-900/10">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">Trip Planner & Map</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Add destinations, arrange your itinerary, and visualize your entire journey on an interactive map.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            Plan a trip <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>

        <Link to="/planner" className="group flex flex-col justify-between rounded-2xl border border-rose-200 bg-rose-50/50 p-5 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-rose-500/10 dark:border-rose-900/50 dark:bg-rose-900/10">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 dark:text-slate-100 dark:group-hover:text-rose-400">Expenses Splitter</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Track group costs, calculate balances mathematically, and instantly download a split report.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-semibold text-rose-600 dark:text-rose-400">
            Split costs <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>
      </div>

      <div id="cities" className="mt-12 scroll-mt-6">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
          <svg className="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Discover Tamil Nadu Destinations
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tamilNaduData.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage
