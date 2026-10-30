import { getContentEntry, searchContent, resetSearchContent } from "/content.js";


document.addEventListener("DOMContentLoaded", () => {

    window.onHoverProd = function (postId, isHover = false) {
        if (!isHover || typeof screen.orientation !== 'undefined') {
            const post = getContentEntry(postId)
            document.getElementById("tooltip").classList.add("visible")
            document.getElementById("tooltip-text").textContent = post.description
        }
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

    window.onClickFullScreen = function () {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        }
        else {
            document.documentElement.requestFullscreen()
            screen.orientation.lock("landscape")
        }
    }

});

window.linkClicked = function (link, target) {
    document.getElementById("load-page").style.setProperty("display", "flex")
    setTimeout(() => window.open(link, "_self"), 800)
    setTimeout(() => document.getElementById("load-page").style.setProperty("display", "none"), 1100)
    return false
}


window.onLeaveProd = function () {
    document.getElementById("tooltip").classList.remove("visible")
}

window.searchTyping = function (search) {
    searchContent(search.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        .toUpperCase())
}

window.resetSearch = function (search) {
    resetSearchContent()
}
