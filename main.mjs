import ejs from 'ejs';
import fs from 'node:fs'
import { getContent, CONTENT } from './content.mjs';

const VIEWS = "./src/views"
const DIST = "./dist"

const POSTS = getContent()
const MAIN_POSTS = [...POSTS.games, ...POSTS.websites]

export const main = async () => {
    if (!fs.existsSync(DIST)) {
        fs.mkdirSync(DIST);
        fs.mkdirSync(`${DIST}/prods`);
    }

    fs.cpSync("./src/public", DIST, { recursive: true });

    let html = await ejs.renderFile(`${VIEWS}/_index.ejs`, { posts: POSTS, content: CONTENT });
    await fs.writeFile(`${DIST}/index.html`, html, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        }
    });

    html = await ejs.renderFile(`${VIEWS}/legal.ejs`, { posts: CONTENT.entries });
    await fs.writeFile(`${DIST}/legal.html`, html, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        }
    });

    for (let post of MAIN_POSTS) {
        html = await ejs.renderFile(`${VIEWS}/prod.ejs`, { post });
        await fs.writeFile(`${DIST}/prods/${post.id}.html`, html, { flag: 'w' }, err => {
            if (err) {
                console.error(err);
            }
        });
    }

    html = await ejs.renderFile(`${VIEWS}/sitemap.ejs`, { posts: MAIN_POSTS });
    await fs.writeFile(`${DIST}/sitemap.xml`, html, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        }
    });

    let contentScript = fs.readFileSync("./src/public/content.js", "utf8");
    let contentScriptLines = contentScript.split('\n')
    contentScriptLines[0] = `export const CONTENT = ${JSON.stringify(CONTENT)}`
    contentScript = contentScriptLines.join('\n')
    await fs.writeFile(`${DIST}/content.js`, contentScript, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        }
    });

    console.log(new Date().toLocaleTimeString(), "Build ok.")
}

export const getComments = async () => {
    let curList
    let curPost
    let comments = {}
    for (let post of MAIN_POSTS) {
        if (post.mastodon !== undefined) {
            curList = await fetch(`https://piaille.fr/api/v1/statuses/${post.mastodon}/context`)
            if (curList.ok) {
                curList = await curList.json()
            }
            curList = curList.descendants ? curList.descendants.map(({
                id, url, created_at, favourites_count, content, account, media_attachments
            }) => ({
                id, url, created_at, favourites_count, content, username: account.username, acct: account.acct, avatar: account.avatar, media_attachments: media_attachments.map(({ type, preview_url, description }) => ({ type, preview_url, description }))
            })) : []
            curPost = await fetch(`https://piaille.fr/api/v1/statuses/${post.mastodon}`)
            if (curPost.ok) {
                curPost = await curPost.json()
                curPost = { url: curPost.url, replies_count: curPost.replies_count, reblogs_count: curPost.reblogs_count, favourites_count: curPost.favourites_count }
            }
            comments[post.id] = { status: curPost, list: curList }
        }
    }
    await fs.writeFile(`./comments.json`, JSON.stringify(comments), { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        }
    });
}