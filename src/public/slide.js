import { CONTENT } from "/content.js";

const slides = CONTENT.entries.map(entry => entry.id)
let currentSlide = 0
document.getElementById(`banner-${slides[currentSlide]}`).style.setProperty("opacity", "100%")
document.getElementById(`banner-${slides[currentSlide]}`).style.setProperty("transform", "scale(1.1)")
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    resetBanners()
    document.getElementById(`banner-${slides[currentSlide]}`).style.setProperty("opacity", "100%")
    document.getElementById(`banner-${slides[currentSlide]}`).style.setProperty("transform", "scale(1.1)")
}, 5000);

const resetBanners = () => {
    for (let slide of slides) {
        document.getElementById(`banner-${slide}`).style.setProperty("opacity", "0")
        document.getElementById(`banner-${slides[currentSlide]}`).style.setProperty("transform", "scale(1)")
    }
}