let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃ Mau Donasi?
┃ Atau Beli VIP?
┃ 
┃ Bisa Lewat :
┃ Dana : 0895426157070
┃ Pulsa : 0895426157070
┃ 
┃ Silahkan Hubungi Owner
┃ Untuk Menjadi VIP User
┃ 
┃ wa.me/16163190066
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
