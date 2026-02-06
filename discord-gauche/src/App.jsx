import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import './index.css'
import Shelf from './components/Shelf'
import { getContent, getContentEntry } from './utils/content'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState(getContent())
  const [selectedBackground, setSelectedBackground] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setSelectedPost(null);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
  }, [selectedPost]);

  return (
    // 1. Structure fixe : hauteur écran bloquée
    <div className="h-screen flex flex-col bg-noir text-gray-800 overflow-hidden font-[Grotesk]">
      {Object.keys(posts).map(set => posts[set].map((post) => (
        <div
          key={`banner-${post.id}`}
          className="absolute w-full h-[700px] bg-center bg-cover mask-b-from-10% mask-b-to-80% opacity-30 transition-all duration-500"
          style={{ backgroundImage: `url(${post.banner})`, opacity: selectedBackground === post.id ? "30%" : "0%" }}
        />
      )))}

      {/* 2. Zone centrale : prend l'espace restant et scroll si besoin */}
      {!selectedPost && (
        <main className="flex flex-col py-18 overflow-hidden overflow-y-scroll text-blanc absolute top-0 bottom-0 right-0 left-0">

          {/* Liste des posts mis en avant */}
          <Shelf posts={posts.featured} set="featured" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} emphasis />

          {/* Liste des jeux */}
          <h1 className="ml-6 mb-2 text-2xl font-extrabold">Les Jeux</h1>
          <Shelf posts={posts.games} set="games" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />
        </main>
      )}

      {!selectedPost && (<Header />)}
      {!selectedPost && (<Footer />)}
      <Post post={getContentEntry(selectedPost)} close={() => setSelectedPost(null)} />
    </div>
  )
}

export default App