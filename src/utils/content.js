import CONTENT from "../../content.json"

export function getContentEntry(id, entries = CONTENT.entries) {
    if (!id) return null
    let result = entries.filter(entry => entry.id === id)
    return result.length > 0 ? result[0] : null
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

function validateEntry(entry, pattern) {
    return entry.title.toUpperCase().includes(pattern) || entry.tags.includes(pattern) || entry.description.toUpperCase().includes(pattern) || entry.year.includes(pattern)
}

export function searchContent(pattern) {

    const upperPattern = pattern.toUpperCase();
    let filteredContentEntries = CONTENT.entries.filter(entry => validateEntry(entry, upperPattern))
    if (filteredContentEntries.length === 0) {
        filteredContentEntries = CONTENT.entries
    }

    let candidate
    let content = {}
    for (const [shelf, posts] of Object.entries(CONTENT.shelves)) {
        content[shelf] = []
        for (const post of posts) {
            candidate = getContentEntry(post, filteredContentEntries)
            if (candidate) {
                content[shelf].push(candidate)
            }
        }
    }
    return content
}