function calculoMedia(notas){
    let media = 0;
    for(c = 0; c < notas.length; c++){
        media += notas[c]
    }
    valor = media / notas.length

    return valor;
}

function aprovacao(notas){
    let resultado = calculoMedia(notas)

    if(resultado >= 7){
        return "Media: " + valor + ' - ' + "Resultado: " + "Aprovado"
    }
    else{
        return "Media: " + valor + ' - ' + "Resultado: " + "Reprovado"
    }
}

document.getElementById('formulario-01').addEventListener('submit',function(evento){
    evento.preventDefault();
    evento.stopPropagation();
    
    if(this.getAttribute('class').match(/erro/)){
        return false
    }

    let formato = new FormData(this)

    

    let notas = [];

    for(let key of formato.keys()){

        let numero = formato.get(key).match(/\d*/) ? Number(formato.get(key)) : 0

        if(!isNaN(numero)){
            if(numero >= 7){
                let resultado = document.getElementById('resultado')
                resultado.style.background = '#22e305'
            }else{
                let resultado = document.getElementById('resultado')
                resultado.style.background = 'red'
            }
            notas.push(numero);
        }
    }

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto
});

let campos = document.querySelectorAll('input.obrigatorio');
let camposNumerico = document.querySelectorAll('input.numeros')

for(let emFoco of campos){
    validaCampo(emFoco)
}

for(let emFoco of camposNumerico){
    validaCampoNumerico(emFoco)
}


function validaCampo(elemento){
    
    elemento.addEventListener('focusout',function(evento){
        evento.preventDefault();
        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'
            this.parentNode.classList.add('erro')
            this.classList.add('erro')
            return false;
        }else{
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
            return false;
        }
    })
}

function validaCampoNumerico(elemento){
    
    elemento.addEventListener('focusout',function(evento){
        evento.preventDefault();
        if(this.value != "" && this.value.match(/[0-9]/) && this.value <= 10 && this.value >= 0){
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
            return false;
        }else{
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
            return false;
        }
    })
}

