function FoodList({ foodItems }) {
  // Define sections to render iteratively
  const sections = [
    { title: '⭐ Nearby Famous Food', key: 'famousLocal', color: 'text-amber-600 dark:text-amber-400' },
    { title: 'Starters', key: 'starters', color: 'text-orange-600 dark:text-orange-400' },
    { title: 'Main Course', key: 'mainCourse', color: 'text-red-600 dark:text-red-400' },
    { title: 'Snacks', key: 'snacks', color: 'text-yellow-600 dark:text-yellow-400' },
    { title: 'Desserts', key: 'desserts', color: 'text-pink-600 dark:text-pink-400' },
  ]

  // If old data format (array), gracefully fallback
  if (Array.isArray(foodItems)) {
    return (
      <div className="rounded-3xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900 dark:bg-slate-800/50">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Nearby Food</h3>
        <div className="space-y-3">
          {foodItems.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white/80 px-4 py-3 dark:bg-slate-700/70 shadow-sm">
              <p className="font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
              <div className="mt-1 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>{item.type || 'Meal'}</span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Render sections
  return (
    <div className="rounded-3xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-900 dark:bg-slate-800/50">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-orange-200 dark:border-orange-900/50 pb-2 mb-4">
        Local Dining & Eateries
      </h3>
      <div className="space-y-6">
        {sections.map(({ title, key, color }) => {
          const items = foodItems[key]
          if (!items || items.length === 0) return null

          return (
            <div key={key} className="space-y-3">
              <h4 className={`text-md font-bold tracking-wide ${color}`}>{title}</h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {items.map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="rounded-2xl bg-white/90 px-4 py-3 dark:bg-slate-700/70 shadow-sm border border-orange-100/50 dark:border-slate-600/50">
                    <p className="font-bold text-slate-800 dark:text-slate-100 text-sm">{item.name}</p>
                    <div className="mt-1.5 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-500 dark:text-slate-400">{item.type || 'Dish'}</span>
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">₹{item.price}</span>
                      </div>
                      {item.hotel && (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-orange-500">
                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                          </svg>
                          <span className="truncate">Best at: <span className="font-medium text-slate-700 dark:text-slate-200">{item.hotel}</span></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoodList
