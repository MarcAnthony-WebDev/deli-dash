import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <main className="h-full w-full bg-neutral-700 flex flex-col items-center">
      <div className="text-neutral-200 py-5">
        <h1 className="text-3xl">Deli Dash</h1>
      </div>
      <Dashboard />
    </main>
  )
}

export default App
