import { getContentEntry, searchContent, resetSearchContent } from "/content.js";


document.addEventListener("DOMContentLoaded", () => {

    window.onHoverProd = function (postId, isHover = false) {
        if (!isHover || typeof screen.orientation === 'undefined') {
            const post = getContentEntry(postId)
            document.getElementById("tooltip").style.setProperty("height", "220px")
            document.getElementById("tooltip-img").src = `/banners/${post.id}.png`
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
    document.getElementById("tooltip").style.setProperty("height", "0")
}

window.searchTyping = function (search) {
    searchContent(search.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        .toUpperCase())
}

window.resetSearch = function (search) {
    resetSearchContent()
}
