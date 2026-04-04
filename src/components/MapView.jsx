import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix Default Leaflet marker icons in Vite
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
})
L.Marker.prototype.options.icon = DefaultIcon

const coordinateCache = {}
const cityCoordinateCache = {}

// Helper to reliably generate a specific offset from a string
function stringToOffset(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  // Generate an offset roughly between -0.05 and +0.05 degrees (~5km)
  const latOffset = ((hash % 100) / 100) * 0.1 - 0.05
  // Use a different prime for lng to unlink from lat
  const lngHash = hash * 31
  const lngOffset = ((lngHash % 100) / 100) * 0.1 - 0.05
  return { latOffset, lngOffset }
}

function MapView({ places }) {
  const [markers, setMarkers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchCoordinates = async () => {
      setLoading(true)
      const newMarkers = []

      // Prepare an array of places
      for (const place of places) {
        let lat = null
        let lng = null

        const cacheKey = `${place.name} ${place.cityName}`

        if (coordinateCache[cacheKey]) {
          lat = coordinateCache[cacheKey].lat
          lng = coordinateCache[cacheKey].lng
        } else {
          // Attempt Wikipedia API
          try {
            const query = encodeURIComponent(`${place.name} ${place.cityName}`)
            const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&gsrsearch=${query}&prop=coordinates&format=json&origin=*`
            const res = await fetch(url)
            const data = await res.json()

            if (data?.query?.pages) {
              const pages = Object.values(data.query.pages)
              const pageWithCoords = pages.find(p => p.coordinates && p.coordinates.length > 0)
              if (pageWithCoords) {
                lat = pageWithCoords.coordinates[0].lat
                lng = pageWithCoords.coordinates[0].lon
                coordinateCache[cacheKey] = { lat, lng }
              }
            }
          } catch (e) {
            console.error(`Wikipedia coords failed for ${place.name}`, e)
          }
        }

        // Fallback to City coords with offset
        if (lat === null || lng === null) {
          if (!cityCoordinateCache[place.cityName]) {
            try {
              const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${place.cityName}&count=1`)
              const data = await res.json()
              if (data.results?.length > 0) {
                cityCoordinateCache[place.cityName] = {
                  lat: data.results[0].latitude,
                  lng: data.results[0].longitude
                }
              }
            } catch (e) {
              console.error(`Open-Meteo fallback failed for ${place.cityName}`, e)
            }
          }

          const cityBase = cityCoordinateCache[place.cityName]
          if (cityBase) {
            const offset = stringToOffset(place.name)
            lat = cityBase.lat + offset.latOffset
            lng = cityBase.lng + offset.lngOffset
            coordinateCache[cacheKey] = { lat, lng } // Cache the fallback too
          }
        }

        if (lat !== null && lng !== null) {
          newMarkers.push({ ...place, lat, lng })
        }
      }

      if (isMounted) {
        setMarkers(newMarkers)
        setLoading(false)
      }
    }

    if (places.length > 0) {
      fetchCoordinates()
    } else {
      setMarkers([])
      setLoading(false)
    }

    return () => { isMounted = false }
  }, [places])

  if (loading) {
    return <div className="h-[500px] w-full rounded-3xl bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">Loading Exact Map Locations...</div>
  }

  if (places.length === 0) {
    return <div className="h-[500px] w-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">No places selected yet.</div>
  }

  if (markers.length === 0) {
    return <div className="h-[500px] w-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">Map data unavailable.</div>
  }

  // Center map on the first marker, or average of all markers
  const centerLat = markers.reduce((sum, m) => sum + m.lat, 0) / markers.length
  const centerLng = markers.reduce((sum, m) => sum + m.lng, 0) / markers.length

  return (
    <div className="h-[500px] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 relative z-0">
      <MapContainer center={[centerLat, centerLng]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]}>
            <Popup>
              <div className="font-semibold text-slate-800">{m.name}</div>
              <div className="text-xs text-slate-500">{m.cityName}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView