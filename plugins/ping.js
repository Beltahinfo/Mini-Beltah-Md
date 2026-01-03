module.exports = {
  command: "ping",
  desc: "Check bot response time",
  category: "utility",
  react: '♻️',
  use: ".ping",
  fromMe: false,
  filename: __filename,

  execute: async (sock, msg) => {
    const start = Date.now();
    await sock.sendMessage(msg.key.remoteJid, { text: "*BELTAH-MD Speed Test...*" });
    const latency = Date.now() - start;
    
    await sock.sendMessage(msg.key.remoteJid, { 
      text: `*BELTAH-MINI-BOT*\n*Latency:* ${latency}ms\n\n> Powered by Beltah Tech Team` 
    }, { quoted: msg });
  }
};
