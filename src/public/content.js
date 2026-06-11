import CONTENT from "../../content.json" // DO NOT EDIT FIRST LINE

export function getContentEntry(id, entries = CONTENT.entries) {
    if (!id) return null
    let result = entries.filter(entry => entry.id === id)
    return result.length > 0 ? result[0] : null
}

let searchIndex = {}
for (let entry of CONTENT.entries) {
    searchIndex[entry.id] = [entry.title, entry.description, ...entry.tags, entry.year].join(" ")
}

export function searchContent(pattern) {
    let matches = []
    let curShelf = null
    let prevShelf = null
    let curShelfMatchingPosts = 0

    if (pattern.length > 0) {
        document.getElementById("search-bar").classList.add("has-content")
        document.getElementById("search-cross").classList.add("has-content")
    }
    else {
        document.getElementById("search-bar").classList.remove("has-content")
        document.getElementById("search-cross").classList.remove("has-content")
    }

    for (let [id, val] of Object.entries(searchIndex)) {
        if (val.toUpperCase().includes(pattern)) {
            matches.push(id)
        }
    }
    for (let post of document.getElementsByClassName("shelf-post")) {
        if (prevShelf === null) { prevShelf = post.parentElement.id }
        curShelf = post.parentElement.id
        if (curShelf !== prevShelf) {
            if (curShelfMatchingPosts === 0) {
                document.getElementById(prevShelf).style.setProperty("display", "none")
            }
            else {
                document.getElementById(prevShelf).style.setProperty("display", "flex")
            }
            prevShelf = curShelf
            curShelfMatchingPosts = 0
        }
        if (matches.length === 0) {
            post.removeAttribute("hidden")
            curShelfMatchingPosts += 1
        }
        else if (matches.indexOf(post.getElementsByClassName("post-link")[0].id) >= 0) {
            post.removeAttribute("hidden")
            curShelfMatchingPosts += 1
        }
        else { post.setAttribute("hidden", "true") }
    };
}


export function resetSearchContent() {
    document.getElementById("search-bar").value = ""
    searchContent("")
}