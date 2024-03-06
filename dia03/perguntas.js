let nome = prompt('Digite seu nome:')
let area = prompt('Gostaria de seguir na área de Front-End ou de Back-End? Digite 1 para Front e 2 para Back')

if (area == 1) {
    let curso = prompt('Gostaria de aprender React (1) ou Vue (2)?')
}

if (area == 2) {
    let curso = prompt('Gostaria de aprender C# (1) ou Java (2)?')
}

let escolha = prompt('Você gostaira de continuar se especializando na área escolhida (1) ou se tornar desenvolvedor Fullstack (2)?')

let tecnologias = []


if (escolha == 1) {
    let continuar = prompt('Gostaria de fazer mais algum curso? 1 sim, 2 não')

    while (continuar == 1) {
        tecnologias.push(prompt('Qual tecnologia gostaria de aprender?'))

        continuar = prompt('Gostaria de fazer mais algum curso? 1 sim, 2 não')
    }
}

if (escolha == 2) {
    let continuar = prompt('Gostaria de fazer mais algum curso? 1 sim, 2 não')

    while (continuar == 1) {
        tecnologias.push(prompt('Qual tecnologia gostaria de aprender?'))

        continuar = prompt('Gostaria de fazer mais algum curso? 1 sim, 2 não')
    }
}


let dados = document.getElementById('dados')
dados.innerHTML = `<p>Olá ${nome}, então você gostaria de seguir na área de  ${area}? Meus parabéns, continue se dedicando que você chegará longe, MUITO LONGE!</p>`

let gostando = document.getElementById('gostando')
gostando.innerHTML = `<p>Essas foram as suas escolhas: ${tecnologias}</p>`
