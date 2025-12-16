import { useState } from 'react'
import Header from './components/Header' // Correction : pas d'accolades
import Footer from './components/Footer' // Correction : pas d'accolades

// On garde tes logos si tu veux les utiliser dans le contenu
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">


      <Header />


      <main className="flex-grow container bg-black-100 mx-auto flex flex-col items-center justify-center">
        <nav>

        </nav>
      </main>


      <Footer />

    </div>
  )
}

export default App