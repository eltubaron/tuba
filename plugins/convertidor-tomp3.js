import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()} _*RESPONDA UM VÍDEO OU NOTA DE VOZ PARA CONVERTER EM ÁUDIO|MP3*_`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()} _*NÃO CONSEGUI CONVERTER SEU VÍDEO, TENTE NOVAMENTE*_`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()} 𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙎𝙐 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝘼 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙔𝙊𝙐𝙍 𝙉𝙊𝙏𝙀 𝙁𝙍𝙊𝙈 𝙑𝙊𝙄𝘾𝙀 𝙏𝙊 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘼 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙔𝙊𝙐𝙍 𝙑𝙄𝘿𝙀𝙊 𝙏𝙊 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
