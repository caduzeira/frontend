function calculoMedia(notas){
    let soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c]
    }
    media = soma / notas.length;

    return media;
}

function aprovacao(notas){
    let media = calculoMedia(notas)

    let condicao = media > 7 ? "Aprovado" : "Reprovado"

    return 'Media: ' + media + ' - Resultado: ' + condicao;
}

document.addEventListener('submit', function(evento){
    evento.preventDefault();
    evento.stopPropagation();

    let meuFormulario = document.getElementById('formulario-01')

    let dados = new FormData(meuFormulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));
    }

    let texto = aprovacao(notas)
    
    document.getElementById('resultado').innerHTML = texto
})