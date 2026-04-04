import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TripProvider } from './context/TripContext'
import { ExpenseProvider } from './context/ExpenseContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TripProvider>
        <ExpenseProvider>
          <App />
        </ExpenseProvider>
      </TripProvider>
    </BrowserRouter>
  </React.StrictMode>
)
