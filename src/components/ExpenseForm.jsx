import { useEffect, useState } from 'react'

function ExpenseForm({ trip, onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [paidBy, setPaidBy] = useState('')
  const [splitAmong, setSplitAmong] = useState([])

  useEffect(() => {
    if (trip.participants.length && !trip.participants.includes(paidBy)) {
      setPaidBy(trip.participants[0])
    }
  }, [trip.participants, paidBy])

  const toggleSplit = (name) => {
    setSplitAmong((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title.trim() || !amount || !paidBy || !splitAmong.length) {
      return
    }
    onAddExpense({
      tripId: trip.id,
      title: title.trim(),
      amount: Number(amount),
      paidBy,
      splitAmong
    })
    setTitle('')
    setAmount('')
    setSplitAmong([])
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Add Expense</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Expense title"
          className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring dark:border-slate-600 dark:bg-slate-800"
        />
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Amount"
          className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring dark:border-slate-600 dark:bg-slate-800"
        />
      </div>
      <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">Paid by</label>
      <select
        value={paidBy}
        onChange={(event) => setPaidBy(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring dark:border-slate-600 dark:bg-slate-800"
      >
        {trip.participants.length ? (
          trip.participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))
        ) : (
          <option value="">Add participants first</option>
        )}
      </select>
      <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">Split among</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {trip.participants.map((participant) => (
          <label
            key={participant}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600"
          >
            <input
              type="checkbox"
              checked={splitAmong.includes(participant)}
              onChange={() => toggleSplit(participant)}
            />
            {participant}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={!trip.participants.length}
        className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
