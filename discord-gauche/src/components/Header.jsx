export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo ou Titre */}
                <h1 className="text-2xl font-bold">Mon Projet</h1>

                {/* Liens de navigation (exemples) */}
                <ul className="flex gap-4">
                    <li className="hover:text-blue-400 cursor-pointer">Accueil</li>
                    <li className="hover:text-blue-400 cursor-pointer">À propos</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                </ul>
            </nav>
        </header>
    );
}