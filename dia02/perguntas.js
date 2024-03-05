let nome = prompt('Digite seu nome:')
let idade = prompt('Digite sua idade: ')
let curso = prompt('Digite qual curso você está estudando:')
let pergunta = prompt(`Você está gostando de estudar ${curso}? Responda com 1 para sim e com 2 para não`)

let dados = document.getElementById('dados')
dados.innerHTML = `<p>Olá ${nome}, então você tem ${idade} anos e está aprendendo ${curso}? Meus parabéns, continue se dedicando que você chegará longe, MUITO LONGE!</p>`

let gostando = document.getElementById('gostando')
if (pergunta == '1') {
    gostando.innerHTML = `<p>Muito bom! Continue estudando e você terá muito sucesso!</p>`
} else {
    gostando.innerHTML = `<p>Ahh, que pena... Já tentou aprender outras linguagens?</p>`
}