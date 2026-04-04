import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('travelbuddy_dark_mode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('travelbuddy_dark_mode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <header className="sticky top-0 z-20 border-b border-emerald-200/70 bg-white/85 backdrop-blur-md dark:border-emerald-900 dark:bg-slate-900/85">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-300">
          <img src="/favicon.png" alt="TravelBuddy Logo" className="h-8 w-8 rounded-full shadow-sm" />
          TravelBuddy
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold ${isActive ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300'}`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/planner"
            className={({ isActive }) =>
              `text-sm font-semibold ${isActive ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300'}`
            }
          >
            Trip Planner
          </NavLink>
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
