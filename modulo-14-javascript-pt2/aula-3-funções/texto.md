## Funções
- Evita repetição de codigo
- Realizar chamadas dinamicas de algoritmos

exemplo:

function calculoMedia(notas){
    var soma = 0
    for(c = 0; c < notas.length; c++){
        soma += notas[c]
    }

    media = soma / notas.length

    return media;
}

- https://jsfiddle.net/u7fvwoeh/14/

function aprovacao(media){
    let condicao = media >= 7 ? "Aprovado" : "Reprovado";

    return condicao
}

console.log(aprovacao(calculoMedia([7,8,8,9])))

exemplo2: 

function calculoMedia(notas){
    var soma = 0
    for(c = 0; c < notas.length; c++){
        soma += notas[c]
    }

    media = soma / notas.length

    return media;
}


function aprovacao(notas){

    let media = calculoMedia(notas)

    let condicao = media >= 7 ? "Aprovado" : "Reprovado";

    return condicao
}

console.log(aprovacao([7,8,5]))

- https://jsfiddle.net/u7fvwoeh/15/

