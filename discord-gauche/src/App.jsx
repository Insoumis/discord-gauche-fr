import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Barricade from './assets/Barricade.jpg'
import './index.css'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "La Barricade",
      description: "La Barricade est un serveur discord d'action citoyennes et bénévoles en faveur d'un programme de gauche prônant le progrès social.",
      image: Barricade,
      tag: "La plus grande communauté de gauche"
    },

    {
      id: 2,
      title: "Lamaction",
      description: "C'est Lamaction quoi",
      image: Barricade,
      tag: "La nouvelle action du serveur"
    }
  ])


  return (
    // 1. Structure fixe : hauteur écran bloquée
    <div className="h-screen flex flex-col bg-gray-100 text-gray-800 overflow-hidden">

      <Header />

      {/* 2. Zone centrale : prend l'espace restant et scroll si besoin */}
      <main className="flex-grow container mx-auto flex flex-col items-center py-8 overflow-y-auto">
        
        {/* Liste des posts */}
        {posts.map((post) => (
          <div key={post.id} className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mb-8 shrink-0 transition-all">
            <div className="md:flex flex-col">
              <div className="md:shrink-0">
                <img
                  className="w-full h-48 object-cover md:h-full"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                  {post.title}
                </div>
                <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                  {post.tag}
                </a>
                <p className="mt-2 text-gray-500">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}



      </main>

      <Footer />

    </div>
  )
}

export default App