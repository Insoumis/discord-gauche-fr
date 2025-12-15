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

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default App