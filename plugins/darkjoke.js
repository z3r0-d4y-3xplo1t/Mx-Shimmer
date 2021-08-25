let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'DarkJoke', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjoke|darkjoke)$/i

module.exports = handler
