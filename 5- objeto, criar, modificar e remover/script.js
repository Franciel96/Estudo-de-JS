var franciel = { //objeto teste
    nome: 'Franciel',
    idade: 25,
    especificacao: { //objeto do objeto teste
        altura: '169cm',
        peso: 80
    }
}

franciel.qualidades = {
    foco: 100
}
franciel.qualidades2 = ['foco'];

franciel.qualidades3 = [{
    nome: 'foco',
    valor: 100
}]

console.log(franciel)//exibe o objeto
console.log(franciel.idade)//exibe somente a chave especificada
console.log(franciel.especificacao.altura)//exibe somente a chave do objeto do objeto teste 

franciel.especificacao.altura = '170cm'; //altera o valor de uma variável específica
console.log(franciel.especificacao.altura)

console.log(franciel.qualidades)
console.log(franciel.qualidades2[0])

franciel.qualidades3[0].valor++
console.log(franciel.qualidades3[0])

delete franciel.qualidades
delete franciel.qualidades2
delete franciel.qualidades3

console.log(franciel.qualidades)
console.log(franciel.qualidades2)
console.log(franciel.qualidades3)
