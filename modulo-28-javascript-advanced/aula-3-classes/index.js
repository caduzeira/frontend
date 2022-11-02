class Animal{

    constructor(especie){
        this.especie = especie;
    }

    falar(){
        console.log(' ' + this.especie)
    }

    
    comer(){
        console.log(this.especie + ' ')
    }
    
    dormir(){
        console.log(this.especie + ' ')
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' au au')
    }

    comer(){
        console.log(this.especie + ' come o dia todo')
    }

    dormir(){
        console.log(this.especie + ' dorme o dia todo')
    }
}

const cachorro = new Cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()