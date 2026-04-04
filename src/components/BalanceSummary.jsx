import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

function BalanceSummary({ balances, expenses }) {
  const expenseByPayer = expenses.reduce((acc, expense) => {
    acc[expense.paidBy] = (acc[expense.paidBy] || 0) + Number(expense.amount)
    return acc
  }, {})

  const chartData = Object.entries(expenseByPayer).map(([name, amount]) => ({
    name,
    amount: Number(amount.toFixed(2))
  }))

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Balance Summary</h3>
      <div className="mt-4 space-y-2">
        {balances.length ? (
          balances.map((balance) => (
            <p key={`${balance.from}-${balance.to}`} className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
              {balance.from} owes {balance.to} ₹{balance.amount.toFixed(2)}
            </p>
          ))
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">All settled. No pending balances.</p>
        )}
      </div>
      <div className="mt-6 h-64 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
        {chartData.length ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Bar dataKey="amount" fill="#2ea878" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500 dark:text-slate-400">
            Add expenses to view chart
          </div>
        )}
      </div>
    </section>
  )
}

export default BalanceSummary
