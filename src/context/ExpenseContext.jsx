import { createContext, useContext, useMemo } from 'react'
import { useTrips } from './TripContext'

const ExpenseContext = createContext(null)

const getBalances = (trip) => {
  if (!trip) {
    return []
  }

  const net = {}
  trip.participants.forEach((name) => {
    net[name] = 0
  })

  trip.expenses.forEach((expense) => {
    const splitCount = expense.splitAmong.length
    if (!splitCount) {
      return
    }

    if (net[expense.paidBy] === undefined) {
      net[expense.paidBy] = 0
    }
    net[expense.paidBy] += Number(expense.amount)

    const share = Number(expense.amount) / splitCount
    expense.splitAmong.forEach((name) => {
      if (net[name] === undefined) {
        net[name] = 0
      }
      net[name] -= share
    })
  })

  const debtors = Object.entries(net)
    .filter(([, amount]) => amount < -0.01)
    .map(([name, amount]) => ({ name, amount: Math.abs(amount) }))
    .sort((a, b) => b.amount - a.amount)

  const creditors = Object.entries(net)
    .filter(([, amount]) => amount > 0.01)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount)

  const settlements = []
  let i = 0
  let j = 0

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i]
    const creditor = creditors[j]
    const transfer = Math.min(debtor.amount, creditor.amount)

    settlements.push({
      from: debtor.name,
      to: creditor.name,
      amount: Number(transfer.toFixed(2))
    })

    debtor.amount -= transfer
    creditor.amount -= transfer

    if (debtor.amount < 0.01) {
      i += 1
    }
    if (creditor.amount < 0.01) {
      j += 1
    }
  }

  return settlements
}

export function ExpenseProvider({ children }) {
  const { trips, setTrips, activeTripId } = useTrips()

  const activeTrip = useMemo(
    () => trips.find((trip) => trip.id === activeTripId) || null,
    [trips, activeTripId]
  )

  const addExpense = ({ tripId, title, amount, paidBy, splitAmong }) => {
    if (!title || !amount || !paidBy || !splitAmong.length) {
      return
    }

    const expense = {
      id: `exp-${Date.now()}`,
      title,
      amount: Number(amount),
      paidBy,
      splitAmong
    }

    setTrips((prev) =>
      prev.map((trip) => {
        if (trip.id !== tripId) {
          return trip
        }
        return {
          ...trip,
          expenses: [expense, ...trip.expenses]
        }
      })
    )
  }

  const balances = useMemo(() => getBalances(activeTrip), [activeTrip])

  const value = useMemo(
    () => ({
      activeTrip,
      addExpense,
      balances
    }),
    [activeTrip, balances]
  )

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export function useExpenses() {
  const context = useContext(ExpenseContext)
  if (!context) {
    throw new Error('useExpenses must be used within ExpenseProvider')
  }
  return context
}
