const { cmd, commands } = require('../command');
const config = require('../config');
const {readEnv} = require('../lib/database');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson, runtime, sleep } = require('../lib/functions');
const imgUrl = 'https://i.postimg.cc/xdMvP3XZ/In-Shot-20241222-002123636.jpg'; // This image URL seems unnecessary

//-----------------------------------------------ALive-----------------------------------------------

cmd({
    pattern: "alive",
    desc: "Check bot online or not.",
    category: "general",
    react: "🎀",
    filename: __filename
}, async (conn, mek, m, { from, prefix, pushname, reply }) => {
    try {
        let hostname;
        // Determine the hosting service based on the hostname length
        if (os.hostname().length == 12) hostname = 'replit';
        else if (os.hostname().length == 36) hostname = 'heroku';
        else if (os.hostname().length == 8) hostname = 'koyeb';
        else hostname = os.hostname();

        // Create the text response with system details
        let monspace = '```';
        const snm = `👋 ${monspace} Hello ${pushname}, I'm alive now ${monspace}

_*This Malidu Hansana V1 whatsapp bot is made for your easy use. This bot is currently active 🪄*_

> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Hostname:* ${hostname}

*☘️ Follow our channel:* https://chat.whatsapp.com/EWlXtIwH1D4988mVoqLMPi

*Malidu Hansana WA BOT V1 Created by*
*𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔*`;

        // Sending the audio message
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrdinesh595/Mssadu/raw/refs/heads/main/database/alve.mp3' },
            mimetype: 'audio/mp4', // Corrected mime type
            ptt: false
        }, { quoted: mek });

        // Sending the image message
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DsJTn1Zq-Ot2HfC0AJyyxO813o6pXewVCw&s" },  // Provide a valid image URL
            caption: snm,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐌𝐑 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔',
                    newsletterJid: "120363322195409882@newsletter",
                }
            }
        }, { quoted: mek }); // Replaced 'mak' with 'mek'

    } catch (e) {
        reply('*Error !!*');
        console.log('Error details:', e); // More specific error logging
    }
});
//--------------------- Menu --------------------//

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*╭────────*
*│
*│ 1   OWNER MENU*
*│ 2   CONVERT MENU*
*│ 3   AI MENU*
*│ 4   SEARCH MENU*
*│ 5   DOWNLOAD MENU*
*│ 6   FUN MENU*
*│ 7   MAIN MENU*
*│ 8   GROUPMENU*
*│ 9   OTHER MENU*
*╰─────────

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 𝐌𝐃 𝗩1*`;


        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrdinesh595/Mssadu/raw/refs/heads/main/database/mnu.mp3' },
            mimetype: 'audio/mp4', // Corrected mime type
            ptt: false
        }, { quoted: mek });

        const vv = await conn.sendMessage(from, { image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DsJTn1Zq-Ot2HfC0AJyyxO813o6pXewVCw&s"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*☉╾── OWNER MENU ──╼☉*

╭────────●●►
│ 🙈 *restart* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '2':               
                        reply(`*☉╾──CONVERT MENU──╼☉*

╭────────●●►
│ 😚 *convert* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '3':               
                        reply(`*☉╾──AI MENU──╼☉*

╭────────●●►
│ 😏 *ai* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '4':               
                        reply(`*☉╾──SEARCH MENU──╼☉*

╭────────●●►
│ ♏ *yts* 
╰──────────────────●●►
╭────────●●►
│ ♏ *srepo* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '5':               
                        reply(`*☉╾──DOWNLOAD MENU──╼☉*

╭────────●●►
│ 👌 *apk* 
╰──────────────────●●►
╭────────●●►
│ 💎 *twitter* 
╰──────────────────●●►
╭────────●●►
│ 🎗️ *gdrive* 
╰──────────────────●●►
╭────────●●►
│ ♒ *mediafire* 
╰──────────────────●●►
╭────────●●►
│ ♉ *fb* 
╰──────────────────●●►
╭────────●●►
│ ✨ *ig* 
╰──────────────────●●►
╭────────●●►
│ 🏅 *movie* 
╰──────────────────●●►
╭────────●●►
│ 🧨 *song* 
╰──────────────────●●►
╭────────●●►
│ 🎆 *video* 
╰──────────────────●●►
╭────────●●►
│ 🎄 *play/yt* 
╰──────────────────●●►
╭────────●●►
│ 🎃 *song2* 
╰──────────────────●●►
╭────────●●►
│ 🎁 *video2* 
╰──────────────────●●►
╭────────●●►
│ 🧧 *tiktok* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *img* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '7':               
                        reply(`*☉╾──MAIN MENU──╼☉*

╭────────●●►
│ ♍ *alive* 
╰──────────────────●●►
╭────────●●►
│ ♍ *about* 
╰──────────────────●●►
╭────────●●►
│ ♍ *menu* 
╰──────────────────●●►
╭────────●●►
│ ♍ *allmenu* 
╰──────────────────●●►
╭────────●●►
│ ♍ *support* 
╰──────────────────●●►
╭────────●●►
│ ♍ *system* 
╰──────────────────●●►
╭────────●●►
│ ♍ *ping* 
╰──────────────────●●►
╭────────●●►
│ ♍ *runtime* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU──╼◈*

╭────────●●►
│ ♏ *promote* 
╰──────────────────●●►
╭────────●●►
│ ♏ *demote* 
╰──────────────────●●►
╭────────●●►
│ ♏ *kick* 
╰──────────────────●●►
╭────────●●►
│ ♏ *add* 
╰──────────────────●●►
╭────────●●►
│ ♏ *admins* 
╰──────────────────●●►
╭────────●●►
│ ♏ *tagall* 
╰──────────────────●●►
╭────────●●►
│ ♏ *getpic* 
╰──────────────────●●►
╭────────●●►
│ ♏ *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ ♏ *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ ♏ *admins* 
╰──────────────────●●►
╭────────●●►
│ ♏ *gname* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);
                       break;
                    case '6':               
                        reply(`☉╾──FUN MENU──╼☉*

╭────────●●►
│ 🐕 *dog* 
╰──────────────────●●►
╭────────●●►
│ 💌 *fact* 
╰──────────────────●●►
╭────────●●►
│ 💀 *hack* 
╰──────────────────●●►
╭────────●●►
│ 👌 *quote* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);

                        break;
                    case '9':               
                        reply(`*☉╾──OTHER MENU──╼☉*

╭────────●●►
│ 🌬️ *githubstalk* 
╰──────────────────●●►
╭────────●●►
│ 🔥 *trt* 
╰──────────────────●●►
╭────────●●►
│ 🌦️ *weather* 
╰──────────────────●●►

> *𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔 MD V1*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

//------------------ Ping ---------------------//

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*📡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*Mαʅιԃυ Hαɳʂαɳα Bσƚ ᴘᴏɴɢ*: ${ping} *_ᴍꜱ_*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});

//------------------ System ---------------------//

cmd({
    pattern: "system",
    desc: "Check bot online or no.",
    category: "general",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, prefix, pushname, reply }) => {
    try {
        let hostname;
        if (os.hostname().length == 12) hostname = 'replit';
        else if (os.hostname().length == 36) hostname = 'heroku';
        else if (os.hostname().length == 8) hostname = 'koyeb';
        else hostname = os.hostname();

        const sssf = `*Mαʅιԃυ Hαɳʂαɳα Bσƚ*
        
🎉 *Version :* ${require("../package.json").version}
🗃️ *Memory :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
⏱️ *Runtime :* ${runtime(process.uptime())}
📍 *Platform :* ${hostname}
👤 *Owner :* 𝐌𝐑 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔
`;

        await conn.sendMessage(from, {
            text: sssf,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐌𝐑 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔',
                    newsletterJid: "120363322195409882@newsletter",
                }
            }
        }, { quoted: mek });
        
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});


//------------------ status ---------------------//

cmd({
    pattern: "status",
    desc: "Check bot status",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Construct the bot status message
        const botStatus = `*Mαʅιԃυ Hαɳʂαɳα Bσƚ*
        
*╭───────────────◈◈►*
*│ 👾 Bot Status: Online*
*│ 📆 Date: ${new Date().toLocaleDateString()}*
*│ ⏰ Time: ${new Date().toLocaleTimeString()}*
*╰───────────────◈◈►*
`;

        await conn.sendMessage(from, {
            text: botStatus,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐌𝐑 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔',
                    newsletterJid: "120363322195409882@newsletter",
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
