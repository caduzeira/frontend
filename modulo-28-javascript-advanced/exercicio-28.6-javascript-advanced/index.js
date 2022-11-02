//Calculo de media com class
class CalculaMedia{

    constructor(notas){
        this.notas = notas
    }

    calculo(){
        let soma = 0;
        for(let c = 0; c < this.notas.length; c++){
            soma += this.notas[c]
        }

        let media = soma / this.notas.length;

        console.log(media)

        return media
    }

}

class Resultado{
    constructor(media){
        this.media = media
    }

    resultado(){

        console.log('----------------CLASS------------------------')

        console.log('Media' + ' - ' + this.media)

        if(this.media >= 7){
            console.log('Resultado' + ' - ' + 'Aprovado')
        }else{
            console.log('Resultado' + ' - ' + 'Reprovado')
        }

    }
}

const newCalculo = new CalculaMedia([9,8,7,9])
const newResultado = new Resultado(newCalculo.calculo())

newCalculo.calculo()
newResultado.resultado()

//Com Arrow Function

const calcularMedia = (notas) => {
    let soma = 0;

    for(let c = 0; c < notas.length;c++){
        soma += notas[c]
    }

    let media = soma / notas.length
    
    console.log('----------------ARROW_FUNCTION------------------------')

    console.log('Media' + ' - ' + media)

    switch(media >= 7){
        case true:
            console.log('Resultado' + ' - ' + 'Aprovado')
        break;
        
        case false:
            console.log('Resultado' + ' - ' + 'Reprovado')
        break;
    }
}

calcularMedia([5,2,4,2])