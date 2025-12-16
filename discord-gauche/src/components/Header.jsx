import { useState } from 'react';

export default function Header() {
    // 1. État pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Ligne principale (Logo + Bouton Hamburger) */}
                <h1 className="text-2xl font-bold">La Barricade</h1>

                {/* 2. Bouton Hamburger (Visible seulement sur mobile) */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden p-2 rounded-md hover:bg-gray-700 transition duration-150"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {/* Les 3 barres superposées */}
                    <div className="w-6 h-0.5 bg-white my-1 transition-transform duration-300 ease-in-out" />
                    <div className="w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ease-in-out" />
                    <div className="w-6 h-0.5 bg-white my-1 transition-transform duration-300 ease-in-out" />

                    {/* Astuce : Pour un "X" plus stylé, on pourrait utiliser des classes 
                       * conditionnelles pour transformer les barres. (Exemple non implémenté ici pour simplicité)
                    */}
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
                <div className="sm:hidden w-full bg-gray-700 mt-4 rounded-b-md shadow-lg">
                    <ul className="flex flex-col">
                        <li className="p-3 border-b border-gray-600 hover:bg-gray-600 cursor-pointer">Accueil</li>
                        <li className="p-3 border-b border-gray-600 hover:bg-gray-600 cursor-pointer">À propos</li>
                        <li className="p-3 hover:bg-gray-600 cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </header>
    );
}