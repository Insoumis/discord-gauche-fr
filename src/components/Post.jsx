import { FaCircleInfo, FaArrowPointer, FaDownload, FaXmark, FaPlay } from "react-icons/fa6";

export default ({ post, close }) => (
    <div className={`absolute flex flex-col bg-noir inset-0 text-blanc transition-all duration-500 ${!post ? 'invisible opacity-0' : 'opacity-100'}`} >
        {post && (
            <div
                className="absolute w-full l-0 t-0 r-0 h-[200px] md:h-[300px] bg-center bg-cover z-0"
                style={{ backgroundImage: `url(${post.banner})` }}
            />
        )}
        {post && (
            <div className="mt-[170px] md:mt-[50px] ml-[20px] r-[0px] flex flex-row z-1">
                <div className="min-w-[120px] min-h-[180px] md:w-[240px] md:h-[360px] bg-cover bg-center border" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="flex flex-col justify-end ml-[20px]">
                    <h1 className="text-4xl font-[Mohave] font-extrabold glow uppercase">{post.title}</h1>
                    {post.year}
                </div>
            </div>
        )}
        {post && (
            <div className="flex-1 p-[20px]">
                <div className="p-[20px] bg-blanc/30 flex flex-row items-center gap-[20px] text-lg">
                    <FaCircleInfo className="" />
                    {post.description}
                </div>
                <div className="flex flex-row flex-wrap mt-[20px] gap-[20px]">
                    {post.access.map(btn =>
                        <a
                            key={btn.link}
                            href={btn.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="first:text-2xl bg-violet hover:bg-violet/50 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                        >
                            {btn.icon === "pointer" && <FaArrowPointer />}
                            {btn.icon === "download" && <FaDownload />}
                            {btn.icon === "play" && <FaPlay />}
                            {btn.title}
                        </a>)
                    }

                </div>
            </div>
        )}

        <a href="#" alt="close" onClick={close} className="absolute z-1 right-[20px] top-[5px] text-3xl bg-noir hover:bg-noir/50 hover:scale-110 rounded-full p-[10px] cursor-pointer transition-all duration-300 transform"><FaXmark /></a>
    </div>

)