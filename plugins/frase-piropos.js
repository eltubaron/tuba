/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *${wm}* 〕┄⊱\n┊\nდ *"${pickRandom(global.piropo)}"*\n┊\n*╰━━━⊰ 🦈 ${vs} ⊱━━━━დ*`)
}
handler.tags = ['frases']
handler.command = ['piropo', 'elogios', 'elogio']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["Gostaria de ser papel para poder envolver esse bombom.", "Você é como Wi-Fi sem senha, todo mundo te procura.", "Quem dera ser um ônibus para percorrer as curvas do seu coração..", "Se a beleza fosse pecado, você já estaria no inferno.", "Comprei uma bola de lã para você. É assim que chama atenção de gatinho, né?.", "Precisei abrir a janela. Sua beleza me deixou sem ar.", "Só pode existir vida em outro planeta. Porque sua beleza não é daqui.", "Será que eu posso saber o que o bombom mais lindo tá fazendo fora da caixa?.", "É muita areia pro meu caminhãozinho, mas pode deixar que eu faço umas 15 viagens.", "Graças a Deus que ser linda não cansa, viu, seria uma pena te ver sempre exausta.", "Tão lindo, parece até torneira de rico.", "Minha meta hoje é ter 10% da tua beleza. Já estaria ótimo.", "Eu nunca iria brincar de esconde-esconde com você. Uma beleza dessas é difícil de encontrar.", "Acho que comecei a seguir um pet shop. Do nada uma gatinha nos meus stories.", "Eita, que lindo. Parece meu reflexo.", "Você deve ser muito forte pra carregar toda a beleza do mundo nas costas.", "Quem dera ser a fome para te dar três vezes ao dia.", "Meu café favorito é o dos seus olhos.", "Você parece o Google porque tem tudo o que eu procuro.", "O sol acabou de nascer ou é o sorriso que você me presenteia hoje?.", "Como você se chama para que eu possa pedir você de presente para o Papai Noel?.", "Roubar é errado, mas um beijo da sua boca eu roubaria.", "Gostaria de ser um gato para passar 7 vidas ao seu lado."]
