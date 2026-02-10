import { FaCompactDisc, FaDiscord, FaXmark } from "react-icons/fa6";
import LogoBarricade from "../assets/LOGO C BARRICADE BLANC.svg"
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import YoutubeLogo from '../assets/youtube.png';
import TwitterLogo from '../assets/twitter.png';
import Tiktoklogo from '../assets/Tiktok.png';
import TwitchLogo from '../assets/twitch.svg';
import BskyLogo from '../assets/bluesky.png';
import MastoLogo from '../assets/masto.png'

export default ({ open, close, openLegal }) => (
    <div className={`z-1 absolute flex flex-row max-h-full overflow-hidden bg-noir/70 inset-0 text-blanc transition-all duration-500 ${open ? 'opacity-100' : 'invisible opacity-0'}`} >
        <div className={`max-w-full w-[800px] p-[20px] h-full overflow-y-scroll bg-noir shadow-2xl/100 transition-all duration-500 ${open ? '' : 'ml-[-800px]'}`}>
            <br />
            <p className="w-full flex flex-row justify-center"><img src={LogoBarricade} className="w-[300px] h-[296px] bg-violet p-[20px] rounded-3xl glowbox" /></p>
            <br /><br />
            <h1 className="font-extrabold text-xl">N'attendez pas les consignes</h1><br />
            <p className="border-jaune border-l-[2px] p-[10px]">
                La Barricade est le premier serveur Discord de Gauche FR !<br /><br />
                Depuis 2016 et motivé·e·s par la perspective de pousser l'Avenir en Commun au pouvoir comme programme politique à vocation unitaire, les milliers de membres du serveur s'organisent et produisent des outils et des contenus numériques destinés à la vulgarisation de nos idées et au militantisme en général.<br /><br />
                Réalisées en indépendance des partis, certaines productions ont eu l'occasion d'influencer les dernières campagnes ⏭️
            </p><br />
            <div className="flex flex-row gap-3">
                <a
                    href="https://discord.gg/barricade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow bg-violet hover:bg-violet/50 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                    {/* Logo Discord SVG */}
                    <FaDiscord className="min-w-[20px] text-3xl" />
                    Rejoins le collectif !
                </a>
                <a
                    onClick={close}
                    href="#"
                    rel="noopener noreferrer"
                    className="grow bg-bleu hover:bg-bleu/50 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                    <FaCompactDisc className="min-w-[20px] text-3xl" />
                    Découvre les créations !
                </a>
            </div><br />
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
            </div><br />
            <a href="#" aria-label="Mentions légales" onClick={openLegal}><h1 className="font-extrabold text-xl underline">Mentions légales</h1><br /></a>

        </div>

        <div onClick={close} className="flex-1" />
        <a href="#" alt="close" onClick={close} className="absolute z-1 right-[20px] top-[5px] text-3xl bg-noir hover:bg-noir/50 hover:scale-110 rounded-full p-[10px] cursor-pointer transition-all duration-300 transform"><FaXmark /></a>
    </div>

)