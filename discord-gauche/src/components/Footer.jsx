export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-auto">
            <div className="container mx-auto">
                <p className="">&copy; {new Date().getFullYear()} La Barricade Tous droits réservés.</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                    <a href="#" className="hover:text-white">Mentions légales</a>
                    <a href="#" className="hover:text-white">Confidentialité</a>
                </div>
            </div>
        </footer>
    );
}