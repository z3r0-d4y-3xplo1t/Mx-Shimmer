let handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Command ini hanya untuk yang jadi bot', m)
  else global.conn.reply(conn.user.jid, `${usedPrefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
handler.help = ['getcode']
handler.tags = ['premium']
handler.command = /^(getcode)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

