import { getContentEntry, searchContent, resetSearchContent } from "/content.js";

const time = new Date().toLocaleTimeString("fr-FR", { hour12: false });
let el = document.getElementById("time")
el.textContent = time

setInterval(() => {
    const time = new Date().toLocaleTimeString("fr-FR", { hour12: false });
    let el = document.getElementById("time")
    el.textContent = time
}, 1000);

window.linkClicked = function (link, target) {
    console.log(target)
    document.getElementById("load-page").style.setProperty("display", "flex")
    setTimeout(() => window.open(link, "_self"), 300)
    setTimeout(() => document.getElementById("load-page").style.setProperty("display", "none"), 500)
    return false
}

window.onHoverProd = function (postId) {
    const post = getContentEntry(postId)
    document.getElementById("tooltip").style.setProperty("height", "220px")
    document.getElementById("tooltip-img").src = `/banners/${post.id}.png`
    document.getElementById("tooltip-text").textContent = post.description
}

window.onLeaveProd = function () {
    document.getElementById("tooltip").style.setProperty("height", "0")
}

window.searchTyping = function (search) {
    searchContent(search.toUpperCase())
}

window.resetSearch = function (search) {
    resetSearchContent()
}