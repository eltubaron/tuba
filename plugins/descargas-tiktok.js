
import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()} _*VOCÊ DEVE ADICIONAR UM LINK DO TIKTOK PARA BAIXAR O VÍDEO*_ \n*EXEMPLO:*\n ${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙋𝙍𝙊𝘾𝙐𝙍𝙀 𝙌𝙐𝙀 𝙀𝙎𝙏𝙀 𝙑𝘼𝙇𝙄𝘿𝙊\n\n𝙏𝙃𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙇𝙄𝙉𝙆 𝙄𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏, 𝙈𝘼𝙆𝙀 𝙎𝙐𝙍𝙀 𝙄𝙏 𝙄𝙎 𝙑𝘼𝙇𝙄𝘿`, fkontak,  m)  
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()} *ERRO AO TENTAR BAIXAR O VÍDEO, TENTE NOVAMENTE, POR FAVOR*`, fkontak,  m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} 🥳 *ESTOU BAIXANDO O VÍDEO, AGUARDE..* 🦈 `, fkontak,  m)    
conn.sendFile(m.chat, url, 'tiktok.mp4', `
⛱️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 : 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀\n*${nickname}*\n${description ? `\n⛱️ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 : 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉\n*${description}*` : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()} _*ERRO AO TENTAR BAIXAR O VÍDEO, TENTE NOVAMENTE, POR FAVOR*_`, fkontak,  m)  
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|tt)(dl|nowm)?$/i
handler.limit = 2
export default handler
