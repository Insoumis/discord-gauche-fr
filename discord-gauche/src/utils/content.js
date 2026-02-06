import CONTENT from "../../content.json"

export function getContentEntry(id) {
    if (!id) return null
    return CONTENT.entries.filter(entry => entry.id === id)[0]
}

export function getContent() {
    let content = {}
    for (const [shelf, posts] of Object.entries(CONTENT.shelves)) {
        content[shelf] = []
        for (const post of posts) {
            content[shelf].push(getContentEntry(post))
        }
    }
    return content
}