import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} _*Use da seguinte maneira*_ ${usedPrefix + command} tubarão`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*🦈💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${text}*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimg|gimage|image|imagen)$/i
handler.exp = 20
export default handler
