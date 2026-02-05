import { useState, useEffect } from 'react';
import LogoBarricade from '../assets/LOGO H BARRICADE BLANC.svg'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
    // 1. État pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const time = today.toLocaleTimeString("fr-FR", { hour12: false });

    // Fonction pour basculer l'état
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-white h-[60px] flex absolute w-full">
            <nav className="mx-auto flex-1 flex flex-wrap justify-between items-center">
                {/* Bloc de navigation gauche (Logo + Réseaux Sociaux) */}
                <span className="w-[10px]" />
                <label for="search-bar" className="cursor-pointer p-[10px] ml-auto text-blanc transition-all duration-500 hover:bg-blanc hover:text-noir rounded-full"><FaMagnifyingGlass className="text-2xl" /></label>
                <input id="search-bar" className="font-[Grotesk] transition-all duration-500 w-[0px] focus:ml-[10px] focus:p-[2px] focus:flex-1 flex items-center appearance-none text-noir border-b-2 border-blanc focus:border-solid outline-none focus:bg-blanc" />
                <b className="ml-[20px]">{time}</b>
                <a href="#" className="imageAnchor mx-[10px] cursor-pointer focus:bg-noir focus:invert hover:bg-noir hover:invert p-[10px] transition-all duration-500 rounded-full outline-none">
                    <img src={LogoBarricade} alt="Le logo de la Barricade" className="w-[100px]" />
                </a>
                {/* Bloc Bouton Menu Mobile (Burger) */}
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

            </nav>

            {/* Menu Mobile Déroulant */}
            {
                isMenuOpen && (
                    <div className="sm:hidden w-full bg-[#9e128ba4] mt-4 rounded-b-md shadow-lg">
                        <ul className="flex flex-col">
                            <li className="p-3 border-b border-[#6c0b79d9] hover:bg-[#6c0b79] cursor-pointer transition duration-300">Accueil</li>
                            <li className="p-3 border-b border-[#6c0b79d9] hover:bg-[#6c0b79] cursor-pointer transition duration-300">À propos</li>
                            <li className="p-3 hover:bg-[#6c0b79] cursor-pointer transition duration-300">Contact</li>
                        </ul>
                    </div>
                )
            }
        </header >
    );
}