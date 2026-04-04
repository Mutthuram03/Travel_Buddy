function ExpenseList({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0)

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Expenses</h3>
        <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Total: ₹{total.toFixed(2)}</p>
      </div>
      <div className="mt-4 space-y-3">
        {expenses.length ? (
          expenses.map((expense) => (
            <div key={expense.id} className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{expense.title}</p>
                <p className="font-bold text-emerald-700 dark:text-emerald-300">₹{Number(expense.amount).toFixed(2)}</p>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Paid by {expense.paidBy}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Split among: {expense.splitAmong.join(', ')}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No expenses added yet.</p>
        )}
      </div>
    </section>
  )
}

export default ExpenseList
