import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import './index.css'
import Shelf from './components/Shelf'
import { getContent, getContentEntry, searchContent } from './utils/content'
import { FaChevronDown, FaChevronUp, FaFilm, FaGamepad, FaHeadphones, FaInternetExplorer, FaPalette, FaStar } from 'react-icons/fa6'
import About from './components/About'
import AboutSlideShow from './components/AboutSlideShow'
import Legal from './components/Legal'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState(getContent())
  const [selectedBackground, setSelectedBackground] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)
  const [aboutOpened, setAboutOpened] = useState(!localStorage.getItem("dejavu"))
  const [legalOpened, setLegalOpened] = useState(false)
  localStorage.setItem("dejavu", true)

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      if (selectedPost === null && aboutOpened === false && legalOpened === false) {
        setPosts(getContent())
      }
      if (legalOpened) {
        setLegalOpened(false)
      }
      else {
        setSelectedPost(null)
        setAboutOpened(false)
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedPost, aboutOpened, legalOpened]);

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
    <div className="absolute inset-0 flex flex-col bg-noir text-gray-800 font-[Grotesk]">
      {!selectedPost && !aboutOpened && !legalOpened && (
        <div className="flex-1 flex flex-col py-18 pb-80 overflow-hidden overflow-y-scroll text-blanc z-1 scroll-smooth">
          <h1 id="top" className="scroll-mt-[60px]"></h1>

          {/* Liste des posts mis en avant */}
          {!!posts.featured.length && <h1 id="featured" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaStar /> Les Incontournables<hr className="flex-1 mx-3" /><a aria-label="Suivant" href="#games"><FaChevronDown /></a>
          </h1>}
          {!!posts.featured.length && <Shelf posts={posts.featured} set="featured" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} emphasis />}

          {/* Liste des jeux */}
          {!!posts.games.length && <h1 id="games" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaGamepad /> Les Jeux<hr className="flex-1 mx-3" /><a aria-label="Suivant" href="#websites"><FaChevronDown /></a>
          </h1>}
          {!!posts.games.length && <Shelf posts={posts.games} set="games" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des sites */}
          {!!posts.websites.length && <h1 id="websites" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaInternetExplorer /> Les Sites/Outils Web<hr className="flex-1 mx-3" /><a aria-label="Suivant" href="#music"><FaChevronDown /></a>
          </h1>}
          {!!posts.websites.length && <Shelf posts={posts.websites} set="websites" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des sons */}
          {!!posts.music.length && <h1 id="music" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaHeadphones /> Les Sons<hr className="flex-1 mx-3" /><a aria-label="Suivant" href="#images"><FaChevronDown /></a>
          </h1>}
          {!!posts.music.length && <Shelf posts={posts.music} set="music" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des visuels */}
          {!!posts.images.length && <h1 id="images" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaPalette /> Les Visuels<hr className="flex-1 mx-3" /><a aria-label="Suivant" href="#videos"><FaChevronDown /></a>
          </h1>}
          {!!posts.images.length && <Shelf posts={posts.images} set="images" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

          {/* Liste des vidéos */}
          {!!posts.videos.length && <h1 id="videos" className="scroll-mt-[75px] mx-6 mb-2 text-2xl font-extrabold flex flex-row items-center top-0 rounded-full">
            <FaFilm /> Les Montages<hr className="flex-1 mx-3" /><a aria-label="Retour en haut" href="#top"><FaChevronUp /></a>
          </h1>}
          {!!posts.videos.length && <Shelf posts={posts.videos} set="videos" setSelectedBackground={setSelectedBackground} setSelectedPost={setSelectedPost} />}

        </div>
      )}

      {!selectedPost && !aboutOpened && (<Footer openAbout={() => setAboutOpened(true)} openLegal={() => setLegalOpened(true)} />)}
      {!selectedPost && !aboutOpened && (<Header openAbout={() => setAboutOpened(true)} searchTyping={searchTyping} />)}

      {Object.keys(posts).map(set => posts[set].map((post) => (
        <div
          key={`banner-${post.id}`}
          className="absolute w-full h-[700px] bg-center bg-cover mask-b-from-10% mask-b-to-80% opacity-30 transition-all duration-1000"
          style={{ backgroundImage: `url(${post.banner})`, opacity: selectedBackground === post.id ? "30%" : "0%" }}
        />
      )))}

      <Post post={getContentEntry(selectedPost)} close={() => setSelectedPost(null)} />
      <AboutSlideShow open={aboutOpened || legalOpened} posts={posts} />
      <About open={aboutOpened} close={() => setAboutOpened(false)} openLegal={() => setLegalOpened(true)} />
      <Legal open={legalOpened} close={() => setLegalOpened(false)} />
    </div>
  )
}

export default App