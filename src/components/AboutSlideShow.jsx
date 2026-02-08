import { useEffect, useState } from "react";
import CONTENT from "../../content.json"

export default function ({ open, posts }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = CONTENT.entries.map(entry => entry.id)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className={`absolute flex flex-row max-h-full overflow-hidden inset-0 transition-all duration-500 ${open ? 'opacity-100' : 'invisible opacity-0'}`} >
            {CONTENT.entries.map((post) => (
                <div
                    key={`banner-${post.id}`}
                    className="blur-md absolute w-full h-full bg-center bg-cover opacity-30"
                    style={{
                        transition: "opacity 2s, transform 10s",
                        backgroundImage: `url(${post.banner})`,
                        opacity: slides[currentSlide] === post.id ? "100%" : "0%",
                        transform: slides[currentSlide] === post.id ? "scale(1)" : "scale(1.1)"
                    }}
                />
            ))}
        </div>

    )
}