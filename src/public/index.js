import { getContentEntry, searchContent, resetSearchContent } from "/content.js";


document.addEventListener("DOMContentLoaded", () => {

    window.onHoverProd = function (postId) {
        const post = getContentEntry(postId)
        document.getElementById("tooltip").style.setProperty("height", "220px")
        document.getElementById("tooltip-img").src = `/banners/${post.id}.png`
        document.getElementById("tooltip-text").textContent = post.description
    }

    window.onScrollMenu = function () {
        const windowpos = document.getElementById("menus").scrollTop
        if (windowpos >= (window.innerHeight)) {
            document.getElementById("header-logo").style.setProperty("display", "flex")
        }
        else {
            document.getElementById("header-logo").style.setProperty("display", "none")
        }
    }

    const time = new Date().toLocaleTimeString("fr-FR", { hour12: false });
    let el = document.getElementById("time")
    el.textContent = time

    setInterval(() => {
        const time = new Date().toLocaleTimeString("fr-FR", { hour12: false });
        let el = document.getElementById("time")
        el.textContent = time
    }, 1000);
});

window.linkClicked = function (link, target) {
    document.getElementById("load-page").style.setProperty("display", "flex")
    setTimeout(() => window.open(link, "_self"), 1000)
    setTimeout(() => document.getElementById("load-page").style.setProperty("display", "none"), 1100)
    return false
}


window.onLeaveProd = function () {
    document.getElementById("tooltip").style.setProperty("height", "0")
}

window.searchTyping = function (search) {
    searchContent(search.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        .toUpperCase())
}

window.resetSearch = function (search) {
    resetSearchContent()
}
