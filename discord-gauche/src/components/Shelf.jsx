export default ({ set, posts, setSelectedBackground, setSelectedPost, emphasis = false }) => (
    <div className="flex flex-col md:flex-row md:overflow-hidden md:overflow-x-auto md:min-h-[450px] ">
        {posts.map((post) => (
            <div key={`${set}-${post.id}`} className={`ml-6 ${emphasis ? "first:md:min-w-[644px]" : ""} min-w-[244px] max-w-[244px] md:overflow-hidden mb-8 transition-all`}>
                <div className="md:flex flex-col min-h-[450px]">
                    <a
                        onFocus={() => setSelectedBackground(post.id)}
                        onMouseOver={() => setSelectedBackground(post.id)}
                        onClick={() => setSelectedPost(post.id)}
                        href="#"
                        alt={post.title}
                        className="imageAnchor outline-none p-[2px] border-2 border-transparent focus:border-blanc transition-all duration-500 md:text-transparent focus:border-blanc focus:transform-[matrix(0.8,0.05,0,0.8,1,0)] focus:text-blanc hover:border-blanc hover:transform-[matrix(0.8,0.05,0,0.8,1,0)] hover:text-blanc"
                    >
                        <img
                            className="w-full min-h-[360px] max-h-[360px] object-cover"
                            src={post.image}
                            alt={post.title}
                        />
                        <b className="absolute text-2xl font-[Mohave] tracking-wide  uppercase m-2">
                            {post.title}
                        </b>
                    </a>
                </div>
            </div>
        ))}
    </div>
)