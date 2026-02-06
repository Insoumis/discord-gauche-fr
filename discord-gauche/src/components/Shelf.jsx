export default ({ set, posts, setselectedBackground, emphasis = false }) => (
    <div className="flex flex-row overflow-hidden overflow-x-auto min-h-[400px]">
        {posts.map((post, idx) => (
            <div key={post.id} class={`ml-6 ${emphasis ? "first:w-[644px]" : ""} w-[244px] overflow-hidden mb-8 shrink-0 transition-all`}>
                <div className="md:flex flex-col h-[400px]">
                    <a
                        onFocus={() => setselectedBackground({ set, idx })}
                        onMouseOver={() => setselectedBackground({ set, idx })}
                        href="#"
                        alt={post.title}
                        className="imageAnchor outline-none p-[2px] border-2 border-transparent focus:border-blanc transition-all duration-500 text-transparent focus:border-blanc focus:transform-[matrix(0.8,0.05,0,0.8,1,0)] focus:text-blanc hover:border-blanc hover:transform-[matrix(0.8,0.05,0,0.8,1,0)] hover:text-blanc"
                    >
                        <img
                            className="w-full h-[360px] object-cover"
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