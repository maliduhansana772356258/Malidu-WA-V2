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
}, async (conn, m, mek, { from, isMe, isOwner, q, reply }) => {
    try {
        // Check if search query is provided
        if (!q || q.trim() === '') return await reply('*Please provide a search query! (e.g., Deadpool)*');
        if (!isMe && !isOwner) return await reply('*Only Bot Number Can Movie Download !!!*');
