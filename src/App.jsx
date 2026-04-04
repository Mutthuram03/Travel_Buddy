import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CityPage from './pages/CityPage'
import PlacePage from './pages/PlacePage'
import TripPlannerPage from './pages/TripPlannerPage'

function App() {
  return (
    <div className="flex min-h-screen flex-col text-slate-800 transition-colors duration-300 dark:text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityId" element={<CityPage />} />
          <Route path="/place/:cityId/:placeId" element={<PlacePage />} />
          <Route path="/planner" element={<TripPlannerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
