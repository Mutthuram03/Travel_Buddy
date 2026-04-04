import { useState } from 'react'

function ParticipantList({ trip, onAddParticipant }) {
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim()) {
      return
    }
    onAddParticipant(trip.id, name)
    setName('')
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Participants</h3>
      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-emerald-400 focus:ring dark:border-slate-600 dark:bg-slate-800"
        />
        <button
          type="submit"
          className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
        >
          Add
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {trip.participants.length ? (
          trip.participants.map((participant) => (
            <span
              key={participant}
              className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {participant}
            </span>
          ))
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No participants added yet.</p>
        )}
      </div>
    </section>
  )
}

export default ParticipantList
