import ejs from 'ejs';
import fs from 'node:fs'
import { getContent, CONTENT } from './content.mjs';

const VIEWS = "./src/views"
const DIST = "./dist"

const POSTS = getContent()

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
        } else {
            // file written successfully
        }
    });

    html = await ejs.renderFile(`${VIEWS}/legal.ejs`, { posts: CONTENT.entries });
    await fs.writeFile(`${DIST}/legal.html`, html, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

    for (let post of CONTENT.entries) {
        html = await ejs.renderFile(`${VIEWS}/prod.ejs`, { post });
        await fs.writeFile(`${DIST}/prods/${post.id}.html`, html, { flag: 'w' }, err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    }

    html = await ejs.renderFile(`${VIEWS}/sitemap.ejs`, { posts: CONTENT.entries });
    await fs.writeFile(`${DIST}/sitemap.xml`, html, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

    let contentScript = fs.readFileSync("./src/public/content.js", "utf8");
    let contentScriptLines = contentScript.split('\n')
    contentScriptLines[0] = `export const CONTENT = ${JSON.stringify(CONTENT)}`
    contentScript = contentScriptLines.join('\n')
    await fs.writeFile(`${DIST}/content.js`, contentScript, { flag: 'w' }, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

    console.log(new Date().toLocaleTimeString(), "Build ok.")
}
