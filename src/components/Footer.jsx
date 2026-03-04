import { useState } from 'react';

// CORRECTION IMPORT : Utilisation de '../assets/'
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import YoutubeLogo from '../assets/youtube.png';
import TwitterLogo from '../assets/twitter.png';
import Tiktoklogo from '../assets/Tiktok.png';
import TwitchLogo from '../assets/twitch.svg';
import BskyLogo from '../assets/bluesky.png';
import MastoLogo from '../assets/masto.png'
import { FaDiscord } from 'react-icons/fa6';

export default ({ openAbout, openLegal }) => (
    <div className="z-1 bg-violet text-white p-4 shadow-md flex items-center fixed bottom-0 w-full">

        {/* TEMPLATE POUR LES RÉSEAUX SOCIAUX (Desktop) */}
        <div className="hidden sm:flex items-center space-x-3">

            <a
                href="#"
                rel="noopener noreferrer"
                aria-label="Qui sommes-nous ?"
                className="hover:opacity-75 transition duration-150"
                onClick={openAbout}
            >
                <img src="/PP.png" alt="Barricade Logo" className="w-12 h-12 shadow-md/100" />
            </a>
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
        </div>
        <a className="ml-auto border-r-[1px] pr-2 mr-2" href="#" aria-label="À propos" onClick={openAbout}>
            À propos
        </a>
        <a className=" border-r-[1px] pr-2 mr-2" href="#" aria-label="Mentions légales" onClick={openLegal}>
            Légal
        </a>
        <a
            href="https://discord.gg/barricade"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rouge hover:bg-rouge/50 text-white text-center font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
            {/* Logo Discord SVG */}
            <FaDiscord className="w-6 h-6" />
            Rejoins le collectif !
        </a>
    </div>
)