import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Barricade from './assets/Barricade.jpg'
import './index.css'
import Shelf from './components/Shelf'

function App() {
  // Juste tes données de base
  const [posts, setPosts] = useState({
    featured: [
      {
        id: "laec-fr",
        title: "LAEC.FR",
        description: "Le site du programme l'Avenir en Commun !",
        image: "https://melenshack.fr/images/F2zQySCm.png",
        banner: "https://melenshack.fr/images/F2zQySCm.png",
        tag: ""
      },
      {
        id: "fiscal-kombat",
        title: "Fiscal Kombat",
        description: "Secouez les milliardaires",
        image: "https://melenshack.fr/images/uRh1u601.jpg",
        banner: "https://melenshack.fr/images/NpD9ZhWK.gif",
        tag: ""
      },
      {
        id: "la-manufacture",
        title: "La Manufacture",
        description: "L'association qui construit des outils militants",
        image: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:lvkzx6af56yc6p5kn4t2rwy3/bafkreibp2i4byltxm6tkfmtgdaskql5ddxbmt6al2mbff7klkbzblts5ue@jpeg",
        banner: "https://cdn.helloasso.com/img/photos/final-9041ac8f9d9d4884b2995676c28e7477.png",
        tag: ""
      }
    ],
    games: [
      {
        id: "foule-populaire",
        title: "Foule Populaire",
        description: "Le Jeu de la campagne du Nouveau Front Populaire",
        image: "https://foulepopulaire.fr/_ipx/_/img/perso_alpha.png",
        banner: "https://foulepopulaire.fr/_ipx/_/img/KA_desktop.png",
        tag: ""
      },
      {
        id: "fiscal-kombat",
        title: "Fiscal Kombat",
        description: "Secouez les milliardaires",
        image: "https://melenshack.fr/images/uRh1u601.jpg",
        banner: "https://melenshack.fr/images/NpD9ZhWK.gif",
        tag: ""
      },
      {
        id: "laec-est-toi",
        title: "LAEC est TOI",
        description: "Découvre le programme via une série de puzzles inspirants",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa1485848684_10.jpg&f=1&nofb=1&ipt=cc3079cdfa75a0da41f5500a46754e421cf2f84c25db8d1b7ad93c9456ee8446",
        banner: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.itch.zone%2FaW1hZ2UvODM2MTM4Lzg0MjA1NzAucG5n%2Foriginal%2Fbo2LRj.png&f=1&nofb=1&ipt=6cda9965878d678bf9826423d589c11875e418057151741564661dd61081bda0",
        tag: ""
      },
    ]
  })

  const [selectedBackground, setselectedBackground] = useState({ set: "", idx: 0 })

  return (
    // 1. Structure fixe : hauteur écran bloquée
    <div className="h-screen flex flex-col bg-noir text-gray-800 overflow-hidden font-[Grotesk]">
      {Object.keys(posts).map(set => posts[set].map((post, idx) => (
        <div
          className="absolute w-full h-[700px] bg-cover mask-b-from-10% mask-b-to-80% opacity-30 transition-all duration-500"
          style={{ backgroundImage: `url(${post.banner})`, opacity: selectedBackground.set === set && selectedBackground.idx === idx ? "30%" : "0%" }}
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