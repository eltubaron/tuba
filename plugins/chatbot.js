// by https://github.com/elrebelde21/The-LoliBot-MD
 
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^e$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^Vou deletar esse bot$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`𝐍𝐚̃𝐨 𝐟𝐚𝐜̧𝐚 𝐢𝐬𝐬𝐨 𝐦𝐞𝐮 𝐬𝐞𝐧𝐡𝐨𝐫... 𝐬𝐨́ 𝐞𝐬𝐭𝐨𝐮 𝐚𝐪𝐮𝐢 𝐩𝐚𝐫𝐚 𝐭𝐞 𝐚𝐣𝐮𝐝𝐚𝐫😭`, `𝐄𝐮 𝐬𝐮𝐩𝐥𝐢𝐜𝐨 𝐦𝐞𝐬𝐭𝐫𝐞... 𝐧𝐚̃𝐨 𝐟𝐚𝐜̧𝐚 𝐢𝐬𝐬𝐨😭😭 𝐦𝐞 𝐩𝐞𝐫𝐝𝐨𝐞 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫!!! `])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

//@@@@@@@@@@@@@ Z O A N D O @@@@@@@@@@@@@\\\\


if (/^Wess|wesley|wess$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`_Esse ADM tem um cu rosinha_ 😏🥵 `, `️‍🌈 *O mais gay do grupo* ️‍🌈 `, `*TODO WESLEY É TCHOLA*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

// TESTANDO \\\






/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/



if (/^reglas|normas|aviso|comunicado|Reglas$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^como faz figurinhas?|como faz figurinha|como faz figurinhas$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔🦈 *${wm}*🦈 〕┄⊱
┆ ——————«•»——————
┆ ☆::PRA FAZER FIGURINHA::☆*
┆——————«•»——————
┆ 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬
┆ 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
┆ 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 
┆ 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 
┆ 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 
┆ 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
┆ 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
┆ 
┆ 「 🅖🅐🅣🅐🅑🅞🅣-🅜🅓 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

