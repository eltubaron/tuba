import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝚂𝙷𝙰𝚁𝙺 •𝘽𝚯𝙏', body: '𝗯𝗶𝘁.𝗹𝘆/𝗮𝗻𝗴𝗲𝗹𝘀-𝟲𝟵', sourceUrl: `https://www.bit.ly/angels-69`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
