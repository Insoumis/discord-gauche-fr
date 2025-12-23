import { useState } from 'react';

// CORRECTION IMPORT : Utilisation de '../assets/'
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import YoutubeLogo from '../assets/youtube.png';
import TwitterLogo from '../assets/twitter.png';
import DiscordLogo from '../assets/discord.png';
import Tiktoklogo from '../assets/Tiktok.png';
import TwitchLogo from '../assets/twitch.svg';

export default function Header() {
    // 1. État pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#8f188fff] text-white p-4 shadow-md">
            <nav className="container mx-auto flex flex-wrap justify-between items-center">

                {/* Bloc de navigation gauche (Titre + Réseaux Sociaux) */}
                <div className="flex items-center space-x-6">
                    <h1 className="text-2xl font-bold">La Barricade</h1>

                    {/* TEMPLATE POUR LES RÉSEAUX SOCIAUX (Desktop) */}
                    <div className="hidden sm:flex items-center space-x-3">

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/discordgauche"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={FacebookLogo} alt="Facebook Logo" className="w-6 h-6" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/discord.barricade/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={InstagramLogo} alt="Instagram Logo" className="w-6 h-6" />
                        </a>

                           {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@distok_populaire"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={Tiktoklogo} alt="Tiktok Logo" className="w-6 h-6" />
                        </a>

                           {/* Youtube*/}
                        <a
                            href="https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCeoMxgbBbm9JdEez21bd1mw%2Fvideos%3Fcbrd%3D1&gl=FR&m=0&pc=yt&cm=2&hl=fr&src=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={YoutubeLogo} alt="Youtube Logo" className="w-6 h-6" />
                        </a>

                           {/* Twitch */}
                        <a
                            href="https://www.twitch.tv/la_barricade"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={TwitchLogo} alt="Twitch Logo" className="w-6 h-6" />
                        </a>

                                {/* Twitter */}
                        <a
                            href="https://x.com/DiscordGauche"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={TwitterLogo} alt="Twitter Logo" className="w-6 h-6" />
                        </a>

                                {/* Mastodon */}
                        <a
                            href=" https://piaille.fr/@DiscordGauche"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={FacebookLogo} alt="Mastodon Logo" className="w-6 h-6" />
                        </a>

                                {/* Bluesky*/}
                        <a
                            href="https://bsky.app/profile/discordgauche.bsky.social "
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-white hover:opacity-75 transition duration-150"
                        >
                            <img src={FacebookLogo} alt="Bluesky Logo" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Bloc 2 : Bouton Menu Mobile (Burger) */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden p-2 rounded-md hover:bg-gray-700 transition duration-150"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className="w-6 h-0.5 bg-white my-1 transition-transform duration-300 ease-in-out" />
                    <div className="w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ease-in-out" />
                    <div className="w-6 h-0.5 bg-white my-1 transition-transform duration-300 ease-in-out" />
                </button>


                {/* Bloc 3 : Menu de Navigation Desktop */}
                <ul className="hidden sm:flex gap-4 items-center">
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">Accueil</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">À propos</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">Contact</li>
                </ul>
            </nav>

            {/* Menu Mobile Déroulant */}
            {isMenuOpen && (
                <div className="sm:hidden w-full bg-[#9e128ba4] mt-4 rounded-b-md shadow-lg">
                    <ul className="flex flex-col">
                        <li className="p-3 border-b border-[#6c0b79d9] hover:bg-[#6c0b79] cursor-pointer transition duration-300">Accueil</li>
                        <li className="p-3 border-b border-[#6c0b79d9] hover:bg-[#6c0b79] cursor-pointer transition duration-300">À propos</li>
                        <li className="p-3 hover:bg-[#6c0b79] cursor-pointer transition duration-300">Contact</li>
                    </ul>
                </div>
            )}
        </header>
    );
}