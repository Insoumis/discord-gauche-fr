import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Barricade from './assets/Barricade.jpg'
import './index.css'
import Shelf from './components/Shelf'
import { getContent } from './utils/content'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState(getContent())

  const [selectedBackground, setselectedBackground] = useState("")

  return (
    // 1. Structure fixe : hauteur écran bloquée
    <div className="h-screen flex flex-col bg-noir text-gray-800 overflow-hidden font-[Grotesk]">
      {Object.keys(posts).map(set => posts[set].map((post) => (
        <div
          key={`banner-${post.id}`}
          className="absolute w-full h-[700px] bg-cover mask-b-from-10% mask-b-to-80% opacity-30 transition-all duration-500"
          style={{ backgroundImage: `url(${post.banner})`, opacity: selectedBackground === post.id ? "30%" : "0%" }}
        />
      )))}

      {/* 2. Zone centrale : prend l'espace restant et scroll si besoin */}
      <main className="flex flex-col py-18 overflow-hidden overflow-y-scroll text-blanc absolute top-0 bottom-0 right-0 left-0">

        {/* Liste des posts mis en avant */}
        <Shelf posts={posts.featured} set="featured" setselectedBackground={setselectedBackground} emphasis />

        {/* Liste des jeux */}
        <h1 className="ml-6 mb-2 text-2xl font-extrabold">Les Jeux</h1>
        <Shelf posts={posts.games} set="games" setselectedBackground={setselectedBackground} />
      </main>

      <Header />
      <Footer />

    </div>
  )
}

export default App