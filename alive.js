module.exports = {
  command: "alive",
  description: "Check if bot is running",
  category: "info",

  async execute(sock, msg) {
    try {
      const jid = msg.key.remoteJid;
      const sender = msg.key.participant || msg.key.remoteJid;
      const jidName = sender.split("@")[0];

      const date = new Date().toLocaleDateString("en-US", { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const time = new Date().toLocaleTimeString("en-US", { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      });
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const caption = `╔═══════════════════════════╗
║  ✨ BELTAH-MINI-BOT ✨  ║
║   • Bot Status: Online  ║
║   • Status: 🟢 Active   ║
╚═══════════════════════════╝

┌─ 👋 Welcome ${jidName}! ─┐
│
│  Thank you for using our bot!
│  We're here to serve you better!
│
└─────────────────────────────┘

📊 *BOT STATISTICS*
├─ 📅 Date: ${date}
├─ ⏰ Time: ${time}
├─ ⬆️ Uptime: ${hours}h ${minutes}m ${seconds}s
└─ ✅ Status: Fully Operational

🔗 *QUICK LINKS*
├─ 👨‍💻 Developer
│  → https://github.com/Beltahinfo
├─ 📢 Support Channel
│  → https://whatsapp.com/channel/0029VARHDBKKMCPKP9B2UH2F
├─ 💬 Contact Admin
│  → https://wa.me/254114141192
└─ 🎯 Start Using Bot
   → Type !help for commands

╔═══════════════════════════╗
║  Made with ❤️ by Beltah   ║
║  v1.0 | © 2026           ║
╚═══════════════════════════╝`;

      await sock.sendMessage(
        jid,
        {
          image: { url: 'https://files.catbox.moe/5uli5p.jpeg' },
          caption: caption
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error("❌ Error in alive command:", err);
      await sock.sendMessage(msg.key.remoteJid, {
        text: "*❌ Error*\n\nFailed to fetch bot status. Please try again later.",
      });
    }
  },
};