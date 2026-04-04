import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'travelbuddy_trips_v1'

const TripContext = createContext(null)

const readTrips = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed
  } catch {
    return []
  }
}

export function TripProvider({ children }) {
  const [trips, setTrips] = useState(() => readTrips())
  const [activeTripId, setActiveTripId] = useState(() => (readTrips()[0] ? readTrips()[0].id : ''))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips))
  }, [trips])

  useEffect(() => {
    if (!trips.length) {
      setActiveTripId('')
      return
    }
    const exists = trips.some((trip) => trip.id === activeTripId)
    if (!exists) {
      setActiveTripId(trips[0].id)
    }
  }, [trips, activeTripId])

  const createTrip = ({ name, selectedPlaces }) => {
    const trip = {
      id: `trip-${Date.now()}`,
      name,
      selectedPlaces,
      participants: [],
      expenses: []
    }
    setTrips((prev) => [trip, ...prev])
    setActiveTripId(trip.id)
  }

  const addParticipant = (tripId, participantName) => {
    const cleanName = participantName.trim()
    if (!cleanName) {
      return
    }
    setTrips((prev) =>
      prev.map((trip) => {
        if (trip.id !== tripId) {
          return trip
        }
        if (trip.participants.includes(cleanName)) {
          return trip
        }
        return {
          ...trip,
          participants: [...trip.participants, cleanName]
        }
      })
    )
  }

  const value = useMemo(
    () => ({
      trips,
      setTrips,
      activeTripId,
      setActiveTripId,
      createTrip,
      addParticipant
    }),
    [trips, activeTripId]
  )

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>
}

export function useTrips() {
  const context = useContext(TripContext)
  if (!context) {
    throw new Error('useTrips must be used within TripProvider')
  }
  return context
}
