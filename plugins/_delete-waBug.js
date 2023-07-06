let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let user = `@${m.sender.split`@`[0]}`
let delet = m.key.participant;
let bang = m.key.id;
  
if (isBotAdmin && m.isGroup) {
if (m.text && m.text.toLowerCase().includes("wa.me/settings") || m.text.toLowerCase().includes("wa.me/setting")) {
conn.sendMessage(m.chat, { text: `  *[❗] 𝙐𝙈 "𝘽𝙐𝙂" 𝙁𝙊𝙄 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝙊 [❗]*\n\n ✨🧹 _𝕃𝕚𝕞𝕡𝕒𝕟𝕕𝕠 𝕠 ℂℍ𝔸𝕋_ 🧹✨ ${"\n".repeat(400)}\n🤬𝑬𝒔𝒔𝒆 𝒄𝒐𝒓𝒏𝒐 𝒔𝒆𝒓𝒂́ 𝑩𝑨𝑵𝑰𝑫𝑶: ${user}`, mentions: [m.sender] }, { quoted: fkontak })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return null
}
}}
export default handler;
