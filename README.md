# TravelBuddy 🌍✈️

TravelBuddy is a modern, responsive React application designed to help users explore destinations, plan trips, and track group expenses seamlessly. Whether you're exploring the cultural heritage of Tamil Nadu or planning a weekend getaway with friends, TravelBuddy provides all the tools you need in one interactive dashboard.

## 🚀 Features

* **Destination Exploration:** Discover cities and places with rich details, dynamic images, and interactive map views.
* **Interactive Maps:** Built-in mapping using Leaflet to visualize places and locations.
* **Trip Planning:** Plan your trips by adding participants, destinations, and trip durations.
* **Expense Tracking & Splitting:** Keep track of shared expenses. Add costs, categorize them, and get a clear balance summary of who owes whom.
* **Data Visualization:** Visual breakdown of costs and expenses using Recharts.
* **Weather Integration:** Check out the weather for your destinations via the Weather Widget.
* **Dark/Light Mode:** Full dark mode support using Tailwind CSS for comfortable viewing at any time of day.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

* **Frontend Framework:** [React 18](https://react.dev/)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Maps:** [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
* **Charts:** [Recharts](https://recharts.org/)
* **State Management:** React Context API (`TripContext`, `ExpenseContext`)
* **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Project Structure

```text
TravelBuddy/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components (Cards, Forms, Maps, etc.)
│   ├── context/            # React Context providers for state management
│   ├── data/               # Mock data & configurations (e.g., tamilNaduData.js)
│   ├── pages/              # Main route pages (Home, City, Place, TripPlanner)
│   ├── App.jsx             # Root application component and router configuration
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind directives
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite bundler configuration
```

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate to the project directory:**
   ```bash
   cd TravelBuddy
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite in your terminal).

### Building for Production

To create a production-ready build:

```bash
npm run build
```
This will compile and optimize the app into the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🔮 Future Enhancements
* User Authentication & Profiles (Firebase/Supabase)
* Real-time collaborative trip planning
* Backend database integration for persistent storage
* Export expense reports to PDF/CSV

---
*Built with ❤️ for travelers by travelers.*
