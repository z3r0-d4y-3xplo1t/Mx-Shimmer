let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa nggk langsung ke terminalnya?', m)
  else {
    await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.close()
  }
}
handler.help = ['berhenti','stop']
handler.tags = ['premium']
handler.command = /^(berhenti|stop)$/i

handler.premium = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

