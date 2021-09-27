let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'M A I N - M E N U',
  'exp': 'U S E R - M E N U',
  'game': 'G A M E - M E N U',
  'xp': 'E X P & L I M I T',
  'sticker': 'S T I C K E R - M E N U',
  'videomaker': 'V I D E O - M A K E R',
  'maker': 'M A K E R - M E N U',
  'kerang': 'Q & A - M E N U',
  'quotes': 'Q U O T E S - M E N U',
  'admin': 'A D M I N - M E N U',
  'group': 'G R O U P - M E N U',
  'premium': 'P R E M I U M',
  'internet': 'I N T E R N E T',
  'anonymous': 'R A N D O M - C H A T',
  'nulis': 'N U L I S & L O G O',
  'downloader': 'D O W N L O A D E R',
  'tools': 'T O L L S - M E N U',
  'fun': 'F U N - M E N U',
  'database': 'D  A T A B A S E',
  'vote': 'V O T I N G',
  'absen': 'A B S E N',
  'quran': 'I S L A M I C',
  'info': 'I N F O - M E N U',
  'owner': 'O W N E R - M E N U',
  'audio': 'V O I C E - C H A N G E R',
  'host': 'H O S T - M E N U',
  'advanced': 'A D V A N C E D',
  'maintance': 'M A I N T A N C E',
}
const defaultMenu = {
  before: `
•─────•「 *WA-BOT* 」•─────•
⌾ *Your Information*
◌ *Name :* %name
◌ *Role :* %role
◌ *Remaining :* %limitⓁ
◌ *Level : %level [%exp / %maxexp]*
◌ *[%xp4levelup Again For Levelup]*
◌ *%totalexp Xp In Total*

⌾ *Bot Information*
◌ *Name :* %me
◌ *Runtime :* %uptime
◌ *Status :* Active 24 Hour
◌ *Device :* _MacBook Pro 13_
◌ *Core :* 16-core Neural Engine
◌ *Memory* : 16GB
◌ *Storage :* 2TB
◌ *Database :* %rtotalreg of %totalreg

⌾ *Date & Time* 
◌ *Server Time :* %time
◌ *Islam :* %dateIslamic
◌ *Date :* %date

•─────•「 *MENU* 」•─────•
⌾「 Main Menu 」
◌%phelp
◌%pmenu
◌%pafk [alasan]
◌%pjadian Ⓛ

⌾「 User Menu 」
◌%pdaftar <nama>.<umur>
◌%preg <nama>.<umur>
◌%pregister <nama>.<umur>
◌%punreg <SN|SERIAL NUMBER>
◌%punregister <SN|SERIAL NUMBER>

⌾「 Game Menu 」
◌%pasahotak
◌%pcaklontong
◌%pfamily100
◌%pmath <mode>
◌%psiapakahaku
◌%ptebakgambar
◌%ptebakkata
◌%ptebakkimia
◌%ptebaklagu Ⓛ
◌%ptebaklirik
◌%ptictactoe <custom room name>
◌%pttt <custom room name>

⌾「 Exp & Limit 」
◌%pbuy <jumlah limit>
◌%pbuyall
◌%pdaily
◌%pclaim
◌%pleaderboard <jumlah user>
◌%plb <jumlah user>
◌%plevelup
◌%plimit <@user>
◌%ppay @user <amount>
◌%ppaylimit @user <amount>

⌾「 Sticker Menu 」
◌%pattp <teks> Ⓛ
◌%pattp2 <teks> Ⓛ
◌%pctrigger <text> Ⓛ
◌%pgetexif
◌%psemoji <tipe> <emoji>
◌%pstiker <reply media>
◌%pstiker <url>
◌%pstikergif <caption|reply media>
◌%pstikergif <url>
◌%pstikerline <url> Ⓛ
◌%pstikertelegram <url> Ⓛ
◌%pstikerly <pencarian> Ⓛ
◌%pstickfilter <reply media>
◌%pstickmaker (reply)
◌%ptogif (reply)
◌%ptoimg <reply>
◌%ptoimg2 (reply)
◌%ptovideo (reply)
◌%pttp <teks>
◌%pttp2 <teks> Ⓛ
◌%pttpdark <teks> Ⓛ
◌%pwm <packname>|<author>

⌾「 Kerang-Ajaib 」
◌%papakah <teks>?
◌%papakah <pertanyaan>
◌%partinama [nama]
◌%pkapan <text>?
◌%pkapankah <text>?
◌%pkapan <pertanyaan>
◌%pkapankah <pertanyaan>

⌾「 Quotes-Menu」
◌%pbucin

⌾「 Admin Menu」
◌%padd nomor,nomor Ⓛ
◌%p+ nomor,nomor Ⓛ
◌%pdemote @user
◌%pmember @user
◌%p↓ @user
◌%pkick @user Ⓛ
◌%p- @user Ⓛ
◌%pdemote @user
◌%pmember @user
◌%p↓ @user
◌%ppromote @user
◌%padmin @user
◌%p^ @user
◌%p↑ @user

⌾「 Group Menu 」
◌%pgroup *open / close*
◌%penable <option>
◌%pdisable <option>
◌%pgetsider
◌%pinfogrup
◌%pleavegc
◌%pleavegcall
◌%pleavegroup
◌%plinkgroup
◌%phere
◌%plistonline
◌%popengumuman [teks]
◌%poannounce [teks]
◌%pohidetag [teks]
◌%ppengumuman [teks]
◌%pannounce [teks]
◌%phidetag [teks]
◌%prevoke
◌%psetpp
◌%psetbye <teks>
◌%psetwelcome <teks>
◌%psimulate <event> [@mention]
◌%ptotalpesan

⌾「 Premium 」
◌%pstop
◌%pjadibot
◌%pberhenti
◌%pgetcode
◌%plistjadibot
◌%pjoin <chat.whatsapp.com>

⌾「 Internet 」
◌%palkitab <pencarian>
◌%panime <judul>
◌%pbrainly <soal>
◌%pcharacter <nama>
◌%pcovid <negara>
◌%pdarkjokes
◌%pfetch <url>
◌%pget <url>
◌%pgimage <query>
◌%pimage <query>
◌%pgoogle <pencarian>
◌%pgooglef <pencarian>
◌%pepep <id>
◌%pkatabijak <opsi>
◌%pkbbi <teks>
◌%plirik <Apa>
◌%pmanga <judul>
◌%presep <makanan>
◌%pmasak <makanan>
◌%pmegumin
◌%pmeme
◌%pneko
◌%ppikachu
◌%ppinterest <keyword>
◌%pppcouple
◌%pppcp
◌%pspotify <query>
◌%pss <url>
◌%pssf <url>
◌%psubreddit <query>
◌%ptrendtwit
◌%ptrendingtwitter
◌%punsplash <keyword>
◌%pwaifu
◌%pwallpaperanime Ⓛ
◌%pwallpaperq <query> Ⓛ
◌%pwikipedia <apa>

⌾「 Anonymous Chat 」
◌%pstart,leave,next

⌾「 MagerNulis & Logo 」
◌%ptahta <teks> Ⓛ
◌%pmagernulis1 <teks> Ⓛ
◌%pmagernulis2 <teks> Ⓛ
◌%pmagernulis3 <teks> Ⓛ
◌%pmagernulis4 <teks> Ⓛ
◌%pmagernulis5 <teks> Ⓛ
◌%pmagernulis6 <teks> Ⓛ
◌%pnulis <teks>
◌%pquotemaker <teks>|<wm> Ⓛ
◌%pquotemaker2 <teks | wm> Ⓛ
◌%ptahta2<teks>

⌾「 Downloader 」
◌%pfb <url>
◌%pig <url>
◌%pighighlight <username>
◌%pigstalk <username>
◌%pigstory <username>
◌%pplay <pencarian>
◌%pplay2 <pencarian> 
◌%ptiktok <url>
◌%ptwitter <url> 
◌%pytmp3 <url> 
◌%pyta <url> 
◌%pytmp4 <url> 
◌%pytv <url> 
◌%pyt <url> 

⌾「 Tools Menu 」
◌%paksara <opsi> <teks> Ⓛ
◌%pbase64
◌%pcalc <expression>
◌%pcarigrup <pencarian>
◌%pcaripesan <pesan>|<jumlah>
◌%phd (caption|reply media)
◌%penhance (caption|reply media)
◌%penphoto <effect> <text>
◌%pgimage <query>
◌%pimage <query>
◌%pgithubsearch <pencarian>
◌%phadis
◌%phalah <teks>
◌%philih <teks>
◌%phuluh <teks>
◌%pheleh <teks>
◌%pholoh <teks>
◌%ptobraille
◌%pinspect <chat.whatsapp.com>
◌%pkodepos <kota> Ⓛ
◌%pmemeg<apa|apa>
◌%pmention <teks>
◌%pnulis2 <teks>
◌%pprofile [@user]
◌%pqr <teks>
◌%pqrcode <teks>
◌%preadmore <teks>|<teks>
◌%pspoiler <teks>|<teks>
◌%preadviewonce
◌%prun Ⓛ
◌%pscan [nomor]
◌%pping
◌%pspeed
◌%pstyle <text>
◌%ptextpro <effect> <text>|[text2]
◌%ptranslate <lang> <teks>
◌%ptts <lang> <teks>
◌%pupload (caption|reply media)
◌%pwait (caption|reply image)
◌%pyts <pencarian>
◌%pytsearch <pencarian>
◌%pzodiac *2002 02 25*

⌾「 Fun Menu 」
◌%pdare
◌%pjodoh <nama>|<nama doi> Ⓛ
◌%pref
◌%psimi <teks>
◌%psimsimi <teks>
◌%psimih <teks>
◌%ptruth

⌾「 Database 」
◌%paddvn <teks>
◌%paddmsg <teks>
◌%paddvideo <teks>
◌%paddgif <teks>
◌%paddaudio <teks>
◌%paddimg <teks>
◌%paddsticker <teks>
◌%pdelcmd <text>
◌%pdelvn <teks>
◌%pdelmsg <teks>
◌%pdelvideo <teks>
◌%pdelgif <teks>
◌%pdelaudio <teks>
◌%pdelimg <teks>
◌%pdelsticker <teks>
◌%pgetvn <teks>
◌%pgetmsg <teks>
◌%pgetvideo <teks>
◌%pgetgif <teks>
◌%pgetaudio <teks>
◌%pgetimg <teks>
◌%pgetsticker <teks>
◌%pinfocmd <text>
◌%plistcmd <text>
◌%plistvn
◌%plistmsg
◌%plistvideo
◌%plistgif
◌%plistaudio
◌%plistimg
◌%pliststicker
◌%punlockcmd
◌%plockcmd
◌%psetcmd <text>

⌾「 Voting Menu 」
◌%pcekvote
◌%phapusvote
◌%pmulaivote [alasan] Ⓛ
◌%pupvote
◌%pdevote

⌾「 Absen Menu 」
◌%pcekabsen
◌%phapusabsen
◌%pmulaiabsen [teks]
◌%pabsen

⌾「 Islamic menu 」
◌%palquran <114> <1>
◌%pasmaulhusna [1-99]
◌%phadis
◌%psalat <daerah>

⌾「 Owner Menu 」
◌%pwhitelist nomor,nomor
◌%paddprem [@user]
◌%pbanchat
◌%pban
◌%pblocklist
◌%pbroadcast <teks>
◌%pbc <teks>
◌%pbroadcastgroup <teks>
◌%pbcgc <teks>
◌%pclearchat
◌%pclearchat chat
◌%pclearchat group
◌%pclearchat all
◌%pdeletechat
◌%pdeletechat chat
◌%pdeletechat group
◌%pdeletechat all
◌%pmutechat
◌%pmutechat chat
◌%pmutechat group
◌%pmutechat all
◌%pdelprem [@user]
◌%penable <option>
◌%pdisable <option>
◌%ppremlist
◌%poadd @user
◌%po+ @user
◌%pokick @user
◌%po- @user
◌%popromote @user
◌%poadmin @user
◌%po^ @user
◌%psetbotbio
◌%psetbotname
◌%psetbye <teks>
◌%psetmenu <teks>
◌%psetmenubefore <teks>
◌%psetmenuheader <teks>
◌%psetmenubody <teks>
◌%psetmenufooter <teks>
◌%psetmenuafter <teks>
◌%psetwelcome <teks>
◌%psimulate <event> [@mention]
◌%punbanchat
◌%pban
◌%pupsw [text] (Reply Media)
◌%pupsw <text>
◌%psave @mention <ContactName>

⌾「 Host Menu 」
◌%pbroadcastjadibot <teks>
◌%pbcbot <teks>
◌%pdebounce
◌%pupdate
◌%pupdate2

⌾「 Information 」
◌%pbannedlist
◌%powner
◌%pcreator
◌%pdel
◌%pdelete
◌%pdonasi
◌%pgroups
◌%pgrouplist
◌%pbug <laporan>
◌%preport <laporan>
◌%pping
◌%pspeed

⌾「 Maker Menu 」
◌%pgay
◌%phornycard
◌%phornylicense
◌%pitssostupid
◌%piss
◌%pstupid
◌%plolice
◌%psimpcard
◌%ptrigger
◌%pytcomment <comment>

⌾「 videomaker 」
◌%pshaunthesheep

⌾「 Audio Menu 」
◌%ptomp3 <reply audio>
◌%ptovn <reply audio>
◌%pbass <reply audio>
◌%pblown <reply audio>
◌%pdeep <reply audio>
◌%pearrape <reply audio>
◌%pfast <reply audio>
◌%pfat <reply audio>
◌%pnightcore <reply audio>
◌%preverse <reply audio>
◌%probot <reply audio>
◌%pslow <reply audio>
◌%psmooth <reply audio>
◌%ptupai <reply audio>
`.trimStart(),
  header: '',
  body  : '',
  footer: '',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let pp = './src/avatar_contact.png'
    pp = await conn.getProfilePicture(conn.user.jid)
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.sendFile(m.chat, pp, 'profile.jpg', text.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { "mimetype": "image/jpeg", 
        "caption": `${conn.user.name} WhatsApp Bot`
        } 
      }
    }, m, { contextInfo: { mentionedJid: [m.sender]} } )
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
