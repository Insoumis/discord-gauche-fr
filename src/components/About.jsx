import { FaXmark } from "react-icons/fa6";
import LogoBarricade from "../assets/LOGO C BARRICADE BLANC.svg"
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import YoutubeLogo from '../assets/youtube.png';
import TwitterLogo from '../assets/twitter.png';
import Tiktoklogo from '../assets/Tiktok.png';
import TwitchLogo from '../assets/twitch.svg';
import BskyLogo from '../assets/bluesky.png';
import MastoLogo from '../assets/masto.png'

export default ({ open, close }) => (
    <div className={`absolute flex flex-row max-h-full overflow-hidden bg-noir/70 inset-0 text-blanc transition-all duration-500 ${open ? 'opacity-100' : 'invisible opacity-0'}`} >
        <div className={`w-[800px] p-[20px] h-full overflow-y-scroll bg-noir shadow-2xl/100 transition-all duration-500 ${open ? '' : 'ml-[-800px]'}`}>
            <br />
            <p className="w-full flex flex-row justify-center"><img src={LogoBarricade} className="w-[300px] h-[296px] bg-violet p-[20px] rounded-3xl glowbox" /></p>
            <br /><br />
            <h1 className="font-extrabold text-xl">Qui sommes-nous ?</h1><br />
            <p className="border-jaune border-l-[2px] p-[10px]">
                La Barricade est le premier serveur Discord de Gauche FR !<br /><br />
                Depuis 2016 et motivé·e·s par la perspective de pousser l'Avenir en Commun au pouvoir comme programme politique à vocation unitaire, les milliers de membres du serveur s'organisent et produisent des outils et des contenus numériques destinés à la vulgarisation de nos idées et au militantisme en général.<br /><br />
                En indépendance des partis, certaines productions ont eu l'occasion d'influencer les dernières campagnes, vous en trouverez une partie en parcourant le site ⏭️
            </p><br />
            <a
                href="https://discord.gg/barricade"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto md:mr-0 bg-violet hover:bg-violet/50 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
                {/* Logo Discord SVG */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
                Rejoins le collectif !
            </a><br />
            <h1 className="font-extrabold text-xl">Nous suivre</h1><br />

            <div className="flex flex-wrap gap-[20px]">

                {/* Twitch */}
                <a
                    href="https://www.twitch.tv/la_barricade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitch"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={TwitchLogo} alt="Twitch Logo" className="w-6 h-6 invert" />
                </a>

                {/* Twitter */}
                <a
                    href="https://x.com/DiscordGauche"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={TwitterLogo} alt="Twitter Logo" className="w-6 h-6 invert" />
                </a>

                {/* Mastodon */}
                <a
                    href=" https://piaille.fr/@DiscordGauche"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mastodon"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={MastoLogo} alt="Mastodon Logo" className="w-6 h-6 invert" />
                </a>

                {/* Bluesky*/}
                <a
                    href="https://bsky.app/profile/discordgauche.bsky.social "
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={BskyLogo} alt="Bluesky Logo" className="w-6 h-6 invert" />
                </a>
                {/* Facebook */}
                <a
                    href="https://www.facebook.com/discordgauche"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={FacebookLogo} alt="Facebook Logo" className="w-6 h-6 invert" />
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/discord.barricade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={InstagramLogo} alt="Instagram Logo" className="w-6 h-6 invert" />
                </a>

                {/* TikTok */}
                <a
                    href="https://www.tiktok.com/@distok_populaire"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={Tiktoklogo} alt="Tiktok Logo" className="w-6 h-6 invert" />
                </a>

                {/* Youtube*/}
                <a
                    href="https://www.youtube.com/@la_barricade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                    className="text-white hover:opacity-75 transition duration-150"
                >
                    <img src={YoutubeLogo} alt="Youtube Logo" className="w-6 h-6 invert" />
                </a>
            </div>

        </div>

        <div onClick={close} className="flex-1" />
        <a href="#" alt="close" onClick={close} className="absolute z-1 right-[20px] top-[5px] text-3xl bg-noir hover:bg-noir/50 hover:scale-110 rounded-full p-[10px] cursor-pointer transition-all duration-300 transform"><FaXmark /></a>
    </div>

)