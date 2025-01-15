const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const domain = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com`;
const api_key = `Manul-Official-Key-999`;

//============================================

cmd({
    pattern: "nsfw",
    alias: ["xnxxdl", "xnxxdownload"],
    react: '🫣',
    category: "download",
    desc: "Search videos on xnxx and get download links",
    filename: __filename
