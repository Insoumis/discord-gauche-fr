import { useState } from 'react';

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

                <h1 className="text-2xl font-bold">La Barricade</h1>


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

                {/* 3. Liens de navigation */}
                {/* Menu sur grand écran : Affiché en 'flex' */}
                <ul className="hidden sm:flex gap-4 items-center">
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">Accueil</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">À propos</li>
                    <li className="hover:text-blue-400 cursor-pointer transition duration-150">Contact</li>
                </ul>
            </nav>

            {/* 4. Menu déroulant pour mobile (Affichage conditionnel) */}
            {isMenuOpen && (
                // Remplacez 'hover:bg-purple-900' par 'hover:bg-[#6c0b79d9]'
                // (#6c0b79d9 est la couleur de votre bordure, qui est un violet opaque parfait pour le survol)

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