import { useState } from 'react'
import Header from './components/Header' // Correction : pas d'accolades
import Footer from './components/Footer' // Correction : pas d'accolades

// On garde tes logos si tu veux les utiliser dans le contenu
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Barricade from './assets/Barricade.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">


      <Header />


      <main className="flex-grow container bg-black-100 mx-auto flex flex-col items-center justify-center">
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex flex-col">
          <div class="md:shrink-0">
            <img
              class=" w-full object-cover md:h-full"
              src={Barricade}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">La Barricade</div>
            <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
              La plus grande communauté de gauche sur internet
            </a>
            <p class="mt-2 text-gray-500">
              La Barricade est un serveur discord d'action citoyennes et bénévoles en faveur d'un programme de gauche prônant le progrès social.
              Ce serveur, initialement pûrement insoumis, s'est engagé pendant les campagnes Présidentielles de Jean Luc Mélenchon en 2017 et 2022 ainsi qu'en faveur de la NUPES et du NFP en 2022 et 2024.
              
            </p>
          </div>
        </div>
      </div>
          
        
      </main>


      <Footer />

    </div>
  )
}

export default App