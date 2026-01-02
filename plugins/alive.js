module.exports = {
  command: "alive",
  description: "Check if bot is running",
  category: "info",

  async execute(sock, msg) {
    try {
      const jid = msg.key.remoteJid;
      const sender = msg.key.participant || msg.key.remoteJid;
      const jidName = sender.split("@")[0];

      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      const speed = Math.floor(Math.random() * 90 + 10);

      const caption = `*HELLO☺️*
      *KEEP SMILLING😇*
      *WELCOME THIS IS BELTAH-MINI-BOT 🤲*
      *THANKS YOU FOR USING US ☺️*
      
      *👑 OWNER INFO 👑*
https://github.com/Beltahinfo

*👑 SUPPORT CHANNEL 👑*
https://whatsapp.com/channel/0029VARHDBKKMCPKP9B2UH2F

*👑 SUPPORT ADMIN 👑*
https://wa.me/254114141192
`;

      // Envoyer simplement le message avec l'image
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
        text: "❌ Error checking bot status",
      });
    }
  },
};
