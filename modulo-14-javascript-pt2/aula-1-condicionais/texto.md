## Comparadores logicos:teste logico, retorno (true/false)
- typeof (mostra tipo da variavel)

## Operadores logico
! Não (not)
&& E (and)
|| OU (OR)

## Operador Lógico do atribuiçaõ
Atribui uma variavel a partir de uma condição lógica, economiza IFs

Exemplo:
var cor = "branco"
var meuCarro = cor == "preto" ? "preto" : "branco"

## if
if(...){
}
## else if
else if(...){
}
## else
else{
}

* exemplo
var cor = "branco"
if(cor == "preto"){
    meuCarro = "preto"
}else if(cor == "branco"){
    meuCarro = "branco"
}else{
    meuCarro = "Nem tem carro"
}

## Switch
switch(cor){
    case "branco" :
        meuCarro = "branco"
        break;
    case "vermelho :
        meuCarro = "vermelho"
        break;
    default :
        console.log("não temos o carro")
}

## Calculo media de aluno

var nota1 = 5;
var nota2 = 10;
var nota3 = 9;
var nota4 = 5;
var media = (nota1 + nota2 + nota3 + nota4) /;
if(media >= 8){
    console.log("Aluno aprovado")
}else{
    console.log("Aluno recuperou")
}