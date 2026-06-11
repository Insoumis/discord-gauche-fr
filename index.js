const handler = require('serve-handler');
const http = require('http');
const fs = require("fs")
const { main } = require("./main.mjs")

fs.watch("./src", { recursive: true }, main)

const server = http.createServer((request, response) => {
    return handler(request, response, {
        "public": "./dist"
    });
});

server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
});