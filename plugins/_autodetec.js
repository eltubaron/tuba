import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
	if (!m.messageStubType || !m.isGroup) return
	let usuario = `@${m.sender.split`@`[0]}`
	let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `${usuario} [ 𝙈𝙐𝘿𝙊𝙐 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙋𝘼𝙍𝘼 ]:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `${usuario} [ 𝙈𝙐𝘿𝙊𝙐 𝘼 𝙁𝙊𝙏𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 ]`, mentions: [m.sender] }, { quoted: fkontak }) 
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `${usuario} *NOVA DESCRIÇÃO DO GRUPO É*:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `🔒 𝘼𝙂𝙊𝙍𝘼 *${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝘼𝘿𝙈𝙄𝙉𝙎' : '𝙏𝙊𝘿𝙊𝙎'}* 𝙋𝙊𝘿𝙀𝙈 𝙀𝘿𝙄𝙏𝘼𝙍 𝘼𝙎 _*INFORMAÇÕES*_ 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `𝙊 𝙂𝙍𝙐𝙋𝙊 *${m.messageStubParameters[0] == 'on' ? '𝙀𝙎𝙏𝘼́ 𝙁𝙀𝘾𝙃𝘼𝘿𝙊 🔒🦈' : '𝙀𝙎𝙏𝘼́ 𝘼𝘽𝙀𝙍𝙏𝙊 🔓🦈'}*\n ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙊𝘿𝙀𝙈 𝙀𝙉𝙑𝙄𝘼𝙍 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙉𝙎' : '_*JÁ*_ 𝙋𝙊𝘿𝙀𝙈 𝙀𝙉𝙑𝙄𝘼𝙍 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙉𝙎'} 𝙉𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]}  𝙈𝘼𝙈𝙊𝙐 𝙊 𝘼𝘿𝙈 𝙀 𝘼𝙂𝙊𝙍𝘼 _*É*_ 𝘼𝘿𝙈 𝙉𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 👅💦🍆\n\n 🫵 _*AÇÃO*_ 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍:  ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝘿𝙀𝙄𝙓𝙊𝙐 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙉𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n🦈🫵 _*AÇÃO*_ 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `${usuario} 𝘾𝘼𝙈𝘽𝙄𝙊 𝙇𝘼𝙎 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙀𝙎 𝘼 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `${usuario} *𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝙊́* 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇.`, mentions: [m.sender] }, { quoted: fkontak })
	} else {
		console.log({
			messageStubType: m.messageStubType,
	    messageStubParameters: m.messageStubParameters,
	    type: WAMessageStubType[m.messageStubType], 
		});
	}
}
