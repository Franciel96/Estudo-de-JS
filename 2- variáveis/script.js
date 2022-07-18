var minhaVariavelTexto = 'hello world' //colocando texto dentro da variável
console.log(minhaVariavelTexto) //imprimindo o conteúdo da variável dentro do console

var minhaVariavelNumerica = '12' //colocando número dentro da variável
console.log(minhaVariavelNumerica)//imprimindo o conteúdo da variável dentro do console

var minhaVariavelArray = ['hello world', 12] //variável array com texto e número
console.log(minhaVariavelArray) //imprimindo o conteúdo da variável array dentro do console

var minhaVariavelObjeto = { //um objeto pode conter várias informações
    nome: 'hello world', //texto
    idade: '25', //números
    qualidades: ['qualidade1', 'qualidade2'], //arrays
    descricao: { //e outros objetos também
        altura: '180cm'
    }
}
console.log(minhaVariavelObjeto) //imprime o conteúdo do objeto no console

var minhaVariavelBooleana = true //variável booleana, pode receber true(1) ou false(0)
var pessoa = { //objeto teste para variável booleana
    nome: 'nome da pessoa',
    idade: '25'
}
console.log(pessoa)//exibindo o conteúdo da variável objeto pessoa
var lista = ['banana', 'laranja', 'kiwi']

pessoa = 'nome da pessoa'// aqui a variável pessoa vai ser reescrita com um texto
console.log(pessoa)//exibe o conteúdo da variável pessoa reescrita

console.log(minhaVariavelBooleana)//excibe o valor da variável booleana

minhaVariavelBooleana = false//altera o valor da variável booleana mantendo o mesmo tipo de variável
console.log(minhaVariavelBooleana)//exibe o novo conteúdo da variável booleana
