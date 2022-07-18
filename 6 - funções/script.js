var franciel = { //objeto teste
    nome: 'Franciel',
    idade: 25,
    especificacao: { //objeto do objeto teste
        altura: '169cm',
        peso: 80
    }
}


var showMeFranciel = function() {
    franciel.idade = 26
    console.log(franciel)
}

showMeFranciel()

var calculateVTA = function(price) {
    console.log(price / 100 * 20)

}

calculateVTA(125)