import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import './index.css'
import Shelf from './components/Shelf'
import { getContent, getContentEntry, searchContent } from './utils/content'
import { FaFilm, FaGamepad, FaHeadphones } from 'react-icons/fa6'
import About from './components/About'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState(getContent())
  const [selectedBackground, setSelectedBackground] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)
  const [aboutOpened, setAboutOpened] = useState(!localStorage.getItem("dejavu"))
  localStorage.setItem("dejavu", true)

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      console.log(selectedPost, aboutOpened)
      if (selectedPost === null && aboutOpened === false) {
        setPosts(getContent())
      }
      setSelectedPost(null)
      setAboutOpened(false)
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedPost]);

  let searchPattern = ""

  async function searchTyping(e) {
    if (e.target.value === "") {
      setPosts(getContent())
      return
    }
    searchPattern = e.target.value
    let newContent = searchContent(e.target.value)
    if (e.target.value === searchPattern) {
      setPosts(newContent)
    }
  }

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
          {!!posts.featured.length && <Shelf posts={posts.featured} set="featured" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} emphasis />}

          {/* Liste des jeux */}
          {!!posts.games.length && <h1 className="ml-6 mb-2 text-2xl font-extrabold flex flex-row items-center"><FaGamepad /> Les Jeux</h1>}
          {!!posts.games.length && <Shelf posts={posts.games} set="games" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des vidéos */}
          {!!posts.music.length && <h1 className="ml-6 mb-2 text-2xl font-extrabold flex flex-row items-center"><FaHeadphones /> Les Sons</h1>}
          {!!posts.music.length && <Shelf posts={posts.music} set="videos" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des sons */}
          {!!posts.videos.length && <h1 className="ml-6 mb-2 text-2xl font-extrabold flex flex-row items-center"><FaFilm /> Les Montages cringe</h1>}
          {!!posts.videos.length && <Shelf posts={posts.videos} set="videos" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}
        </main>
      )}

      {!selectedPost && (<Header openAbout={() => setAboutOpened(true)} searchTyping={searchTyping} />)}
      {!selectedPost && (<Footer />)}
      <Post post={getContentEntry(selectedPost)} close={() => setSelectedPost(null)} />
      <About open={aboutOpened} close={() => setAboutOpened(false)} />
    </div>
  )
}

export default App