function CostCard({ stayCost, travelCost }) {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5 dark:border-emerald-900 dark:bg-emerald-900/20">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Estimated Cost</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-300">Budget Stay</p>
          <p className="mt-1 text-xl font-bold text-emerald-700 dark:text-emerald-300">₹{stayCost.budget}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">per night</p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-300">Mid-range Stay</p>
          <p className="mt-1 text-xl font-bold text-emerald-700 dark:text-emerald-300">₹{stayCost.midRange}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">per night</p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-300">Local Transport</p>
          <p className="mt-1 text-xl font-bold text-emerald-700 dark:text-emerald-300">₹{travelCost.localTransport}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">per day</p>
        </div>
      </div>
    </div>
  )
}

export default CostCard
