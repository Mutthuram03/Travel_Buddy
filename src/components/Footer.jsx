import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-8 border-t border-emerald-200/70 bg-white/80 backdrop-blur-md dark:border-emerald-900 dark:bg-slate-900/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-300">
              <img src="/favicon.png" alt="TravelBuddy Logo" className="h-8 w-8 rounded-full shadow-sm" />
              TravelBuddy
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              Your ultimate group trip assistant for exploring Tamil Nadu. Build itineraries, explore local cuisines, and precisely manage expenses all in one place.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">Explore Cities</Link></li>
              <li><Link to="/planner" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">Trip Planner</Link></li>
              <li><Link to="/planner" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">Expense Splitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} TravelBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer