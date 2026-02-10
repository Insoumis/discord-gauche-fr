import { useState, useEffect } from 'react';
import LogoBarricade from '../assets/LOGO H BARRICADE BLANC.svg'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header({ openAbout, searchTyping }) {
    // 1. État pour gérer l'ouverture/fermeture du menu mobile

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

    return (
        <header className="text-white h-[60px] flex absolute w-full z-1">
            <nav className="mx-auto flex-1 flex flex-wrap justify-between items-center">
                {/* Bloc de navigation gauche (Logo + Réseaux Sociaux) */}
                <span className="w-[10px]" />
                <label htmlFor="search-bar" className="cursor-pointer p-[10px] ml-auto text-blanc transition-all duration-500 hover:bg-blanc hover:text-noir rounded-full"><FaMagnifyingGlass className="text-2xl" /></label>
                <input onChange={searchTyping} tabIndex="1" id="search-bar" className="font-[Grotesk] transition-all duration-500 w-[0px] focus:ml-[10px] focus:p-[2px] focus:flex-1 flex items-center appearance-none text-noir border-b-2 border-blanc focus:border-solid outline-none focus:bg-blanc" />
                <b className="ml-[10px] md:block hidden select-none">{time}</b>
                <a onClick={openAbout} tabIndex="2" href="#" className="imageAnchor mr-[20px] ml-[10px] cursor-pointer focus:bg-noir focus:invert hover:bg-noir hover:invert p-[10px] transition-all duration-500 rounded-full outline-none">
                    <img src={LogoBarricade} alt="Le logo de la Barricade" className="w-[100px]" />
                </a>
            </nav>
        </header >
    );
}