// ──────────────────────────────────────────────────────────────
//  SILVA MD – MENU
// ──────────────────────────────────────────────────────────────
const config = require('../config');
const axios = require('axios');

const IMAGES = [
'https://files.catbox.moe/9l9k6x.jpg',
// Add more images later
];

/**
 * Read More Spoiler (WhatsApp Hack)
 */
const READ_MORE = '\u200B'.repeat(4001);

/**
 * Dynamic Uptime
 */
function getUptime() {
const uptime = process.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);
return `${hours}h ${minutes}m ${seconds}s`;
}

/**
 * Full Help Message
 */
const HELP_MESSAGE = `# BELTAH-MINI-BOT
╭━━━〔 ⚡ BELTAH-MD BOT ⚡ 〕━━━┈⊷
┃⚙️ USER: ${config.BOT_NAME || 'Beltah MD'}
┃🌐 MODE: PUBLIC
┃💠 PREFIX: ${config.PREFIX}
┃🧠 VERSION: 1.0.0
┃🕐 UPTIME: ${getUptime()}
╰━━━━━━━━━━━━━━━┈⊷

👋 Welcome to Beltah MD — your digital powerhouse 💫
${READ_MORE}

# 📥 DOWNLOAD COMMANDS
╭━━━〔 🔽 DOWNLOAD 〕━━━┈⊷
┃📥 • SONG
┃📥 • VIDEO  
┃📥 • TIKTOK
┃📥 • FB
┃📥 • APK
┃📥 • IMG
╰━━━━━━━━━━━━━━━┈⊷

Download media from various platforms with ease!
${READ_MORE}

# 🔍 SEARCH COMMANDS
╭━━━〔 🔍 SEARCH 〕━━━┈⊷
┃🔎 • YTS
┃🔎 • LYRICS
╰━━━━━━━━━━━━━━━┈⊷

Search for movies, music lyrics and more!
${READ_MORE}

# 🧭 MAIN COMMANDS  
╭━━━〔 🧭 MAIN 〕━━━┈⊷
┃⚡ • ALIVE
┃⚡ • PING
┃⚡ • UPTIME
┃⚡ • SYSTEM
┃⚡ • HELP
┃⚡ • OWNER
╰━━━━━━━━━━━━━━━┈⊷

Essential bot commands and utilities!
${READ_MORE}

# 🛠️ EXTRA COMMANDS
╭━━━〔 🛠️ EXTRA 〕━━━┈⊷
┃✨ • VV
┃✨ • DELETE
╰━━━━━━━━━━━━━━━┈⊷

Additional utility commands!
${READ_MORE}

# 👥 GROUP COMMANDS
╭━━━〔 👥 GROUP 〕━━━┈⊷
┃💬 • HIDETAG
┃💬 • DELETE
┃💬 • MUTE
┃💬 • UNMUTE
╰━━━━━━━━━━���━━━━┈⊷

Manage your groups efficiently!
${READ_MORE}

# 🙋 USER COMMANDS
╭━━━〔 🙋 USER 〕━━━┈⊷
┃🔒 • BLOCK
┃🔓 • UNBLOCK
┃🧾 • AUTOBIO
╰━━━━━━━━━━━━━━━┈⊷

User management and utilities!
${READ_MORE}

# 🤖 AI COMMANDS
╭━━━〔 🤖 AI 〕━━━┈⊷
┃🧠 • AI
┃🧠 • GPT
╰━━━━━━━━━━━━━━━┈⊷

Artificial Intelligence powered features!
${READ_MORE}

# 🎙️ CONVERT COMMANDS
╭━━━〔 🎙️ CONVERT 〕━━━┈⊷
┃🔊 • TTS
╰━━━━━━━━━━━━━━━┈⊷

Text-to-speech and conversion tools!
${READ_MORE}

# 📞 CONTACT & SUPPORT
🎮 BELTAH MINI BOT 🎮

💬 DEVELOPER:
* Beltah Tech 254 🇰🇪 

📢 SUPPORT CHANNEL:
https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F

👥 SUPPORT GROUP:
https://chat.whatsapp.com/J1h8UQencpe7wTwvS7hHxj

Powered by Beltah Tech Team`.trim();

/**
 * Pick Random Item from Array
 */
const pickRandom = (arr) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;

/**
 * Send Text-Based Menu (No Slides)
 */
const sendTextMenu = async (sock, chatId, message, pushname = "there") => {
const quoted = message || null;

try {
const personalizedHelpMessage = HELP_MESSAGE.replace(/\$\{config\.BOT_NAME[^}]*\}/g, pushname);
const imageUrl = pickRandom(IMAGES);

await sock.sendMessage(chatId, {
image: { url: imageUrl },
caption: personalizedHelpMessage
}, { quoted });

} catch (error) {
console.error('Menu Error:', error);

// Fallback to text-only menu
const fallbackMenu = `
╭━━━〔 ⚡ BELTAH MD BOT ⚡ 〕━━━┈⊷
┃⚙️ USER: ${pushname}
┃🌐 MODE: PUBLIC
┃💠 PREFIX: ${config.PREFIX}
┃🧠 VERSION: 1.0.0
╰━━━━━━━━━━━━━━━┈⊷

👋 Hey ${pushname}! Use .help [category] for specific commands!
Type .download, .search, .main, .group, .ai, etc.
`.trim();

await sock.sendMessage(chatId, { 
text: fallbackMenu 
}, { quoted });
}
};

/**
 * Main Menu Command
 */
module.exports = {
command: "menu",
description: "To get the full command menu.",
react: "♻️",
category: "main",
execute: async (socket, msg, args, number) => {
try {
const from = msg.key.remoteJid;
const sender = msg.key.participant || from;
const pushname = msg.pushName || "there";

// Send the text-based menu
await sendTextMenu(socket, sender, msg, pushname);

} catch (e) {  
console.error(e);  
await socket.sendMessage(msg.key.remoteJid, {   
text: `❌ ERROR: ${e.message}`   
}, { quoted: msg });  
}
}
};