import { useState, useMemo } from 'react'
import TripForm from '../components/TripForm'
import ParticipantList from '../components/ParticipantList'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import BalanceSummary from '../components/BalanceSummary'
import MapView from '../components/MapView'
import { allPlaces } from '../data/tamilNaduData'
import { useTrips } from '../context/TripContext'
import { useExpenses } from '../context/ExpenseContext'

function TripPlannerPage() {
  const { trips, activeTripId, setActiveTripId, createTrip, addParticipant } = useTrips()
  const { activeTrip, addExpense, balances } = useExpenses()
  const [showMap, setShowMap] = useState(false)

  const selectedPlacesFull = useMemo(() => {
    if (!activeTrip) return []
    return activeTrip.selectedPlaces
      .map((selectedId) => allPlaces.find((place) => place.id === selectedId))
      .filter(Boolean)
  }, [activeTrip])

  const selectedPlaceLabels = selectedPlacesFull.map((place) => `${place.placeName} (${place.cityName})`)

  const handleDownloadReport = () => {
    if (!activeTrip) return

    const header = `=== TRAVEL BUDDY: TRIP REPORT ===\nTrip Name: ${activeTrip.name}\nDestinations: ${selectedPlaceLabels.length ? selectedPlaceLabels.join(', ') : 'None'}\nParticipants: ${activeTrip.participants.length ? activeTrip.participants.join(', ') : 'None'}\n=================================\n\n`
    
    let expensesText = `--- EXPENSES ---\n`
    if (activeTrip.expenses.length === 0) {
      expensesText += `No expenses recorded.\n`
    } else {
      let totalExpense = 0;
      activeTrip.expenses.forEach((expense, i) => {
        expensesText += `${i + 1}. ${expense.title} - ₹${expense.amount} (Paid by: ${expense.paidBy})\n`
        totalExpense += Number(expense.amount)
      })
      expensesText += `\nTotal Trip Expense: ₹${totalExpense.toFixed(2)}\n`
    }

    let balancesText = `\n--- SETTLEMENT SUMMARY ---\n`
    if (balances.length === 0) {
      balancesText += `All settled! No pending balances.\n`
    } else {
      balances.forEach(b => {
        balancesText += `${b.from} owes ${b.to} ₹${b.amount.toFixed(2)}\n`
      })
    }

    const reportContent = header + expensesText + balancesText
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${activeTrip.name.replace(/\s+/g, '_')}_Trip_Report.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Trip Planning + Expense Splitting
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">Plan Group Trips Fast</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <TripForm onCreateTrip={createTrip} />

          <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Your Trips</h3>
            <div className="mt-3 space-y-2">
              {trips.length ? (
                trips.map((trip) => (
                  <button
                    key={trip.id}
                    type="button"
                    onClick={() => setActiveTripId(trip.id)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition ${
                      trip.id === activeTripId
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {trip.name}
                  </button>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">Create your first trip to begin.</p>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-6 lg:col-span-2">
          {activeTrip ? (
            <>
              <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{activeTrip.name}</h2>
                  <button
                    onClick={handleDownloadReport}
                    className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download Report
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Selected Places</p>
                  <button 
                    onClick={() => setShowMap(!showMap)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400"
                  >
                    {showMap ? 'Hide Map' : 'View Itinerary on Map'}
                  </button>
                </div>
                
                {showMap ? (
                  <div className="mt-4">
                    <MapView places={selectedPlacesFull.map(p => ({ name: p.placeName, cityName: p.cityName, id: p.id }))} />
                  </div>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedPlaceLabels.length ? (
                      selectedPlaceLabels.map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                        >
                          {label}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 dark:text-slate-400">No places selected.</p>
                    )}
                  </div>
                )}
              </section>

              <ParticipantList trip={activeTrip} onAddParticipant={addParticipant} />
              <ExpenseForm trip={activeTrip} onAddExpense={addExpense} />
              <ExpenseList expenses={activeTrip.expenses} />
              <BalanceSummary balances={balances} expenses={activeTrip.expenses} />
            </>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Create and select a trip to add participants and split expenses.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TripPlannerPage
