import { FaArrowLeft, FaXmark } from "react-icons/fa6";

export default ({ open, close }) => (
    <div className={`z-1 absolute flex flex-row max-h-full overflow-hidden bg-noir/70 inset-0 text-blanc transition-all duration-500 ${open ? 'opacity-100' : 'invisible opacity-0'}`} >
        <div className={`max-w-full w-[800px] p-[20px] h-full overflow-y-scroll bg-noir shadow-2xl/100 transition-all duration-500 ${open ? '' : 'ml-[-800px]'}`}>
            <br />
            <p className="border-jaune border-l-[2px] p-[10px]">
                Le site <b>discord-gauche.fr</b> est un service de communication au public en ligne qui est édité à titre non professionnel (au sens de l'article 6, III-2 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique). En accord avec les dispositions de l'article sus-cité, l'auteur de ces lignes a donc choisi de conserver l'anonymat. Ces informations ont toutefois été transmises à l'hébergeur de ce site qui saura les délivrer à qui de droit.
            </p><br />
            <h1 className="font-extrabold text-xl">Hébergeur</h1><br />
            <p className="border-jaune border-l-[2px] p-[10px]">
                Le prestataire technique qui assure l'hébergement de <b>discord-gauche.fr</b> est la société <b>OVH</b>, dont le siège social se situe à Roubaix.<br /><br />

                Société <b>OVH,</b> 2 rue Kellermann 59100 Roubaix<br />
                Téléphone : <b>+33 8 99 70 17 61</b>
            </p><br />
            <h1 className="font-extrabold text-xl">Politique de confidentialité</h1><br />
            <h2 className="font-extrabold">Statistiques et mesures d'audience</h2>
            <p className="border-jaune border-l-[2px] p-[10px]">
                Nous n'utilisons pas d'outils de mesure d'audience.<br /><br />

                Les logs de connexion du serveur sont conservés pour une durée de 14 jours conformément aux <b>dispositions européennes</b> en matière de rétention de données.
            </p><br />
            <h2 className="font-extrabold">Accès aux données</h2>
            <p className="border-jaune border-l-[2px] p-[10px]">
                Conformément à la loi Informatique et Libertés 78-17 du 6 janvier 1978 modifiée ainsi qu’au Règlement européen sur la protection des données (RGPD), vous bénéficiez d’un droit d’accès, de rectification, d’opposition et d’effacement de vos données personnelles ainsi que d’un droit à la limitation du traitement vous concernant.<br /><br />

                Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter par courrier électronique l’adresse suivante : <b>actions.insoumises@gmail.com.</b><br /><br />

                Si vous estimez, après nous avoir contactés, que les droits dont vous disposez ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
            </p><br />
            <h2 className="font-extrabold">Litiges</h2>
            <p className="border-jaune border-l-[2px] p-[10px]">
                La loi applicable au présent contrat est la loi française. Dans toute hypothèse où un choix de loi serait possible, les parties conviennent que la loi applicable est la loi française.
            </p><br />

            <a
                onClick={close}
                href="#"
                rel="noopener noreferrer"
                className="grow bg-violet hover:bg-violet/50 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
                <FaArrowLeft className="min-w-[20px] text-3xl" />
                Retour
            </a>
        </div>

        <div onClick={close} className="flex-1" />
        <a href="#" alt="close" onClick={close} className="absolute z-1 right-[20px] top-[5px] text-3xl bg-noir hover:bg-noir/50 hover:scale-110 rounded-full p-[10px] cursor-pointer transition-all duration-300 transform"><FaXmark /></a>
    </div>

)