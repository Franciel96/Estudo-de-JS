var lista = ['banana', 'laranja', 'kiwi'] //variável array com 3 elementos
var manga = 'manga'   //variável com um elemento

console.log(lista, 'somente a lista') // exibe a lista

lista.push(manga)//coloca o conteúdo da variável dentro da lista

console.log(lista) //exibe os conteúdos da lista após  colocar a variável 

console.log(lista[3]) // exibe o conteúdo do quarto índice que está no índice 3 [0,1,2,3]

lista[0] = 'morango' //substitui o conteúdo da primeira posição da lista

console.log(lista); // exibe a lista após a substituição do conteúdo da primeira posição

lista[4] = 'morango'

lista.shift() // remove o primeiro elemento do array
lista.pop() // remove o ultimo elemento do array
