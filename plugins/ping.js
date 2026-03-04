module.exports = {
  command: "ping",
  desc: "Check bot response time and server status",
  category: "utility",
  react: '⚡',
  use: ".ping",
  fromMe: false,
  filename: __filename,

  execute: async (sock, msg) => {
    const start = Date.now();
    
    // Send initial message
    await sock.sendMessage(msg.key.remoteJid, { 
      text: "⏳ *Testing connection...*" 
    });
    
    const latency = Date.now() - start;
    
    // Determine speed status
    let speedStatus = "🟢 Excellent";
    if (latency > 100) speedStatus = "🟡 Good";
    if (latency > 300) speedStatus = "🔴 Slow";
    
    // Create beautiful formatted response
    const response = `
╔════════════════════════════════╗
║     ⚡ BELTAH-MD BOT STATUS    ║
╚════════════════════════════════╝

🎯 *Ping Speed:* ${latency}ms
📊 *Status:* ${speedStatus}
🤖 *Bot:* BELTAH-MINI-BOT
⏱️ *Response Time:* ${latency < 100 ? 'Ultra Fast' : latency < 300 ? 'Fast' : 'Normal'}
🌐 *Server:* Online

────────────────────────────────
✨ Powered by Beltah Tech Team
Version: 1.0.0
    `.trim();
    
    await sock.sendMessage(msg.key.remoteJid, { 
      text: response 
    }, { quoted: msg });
  }
};