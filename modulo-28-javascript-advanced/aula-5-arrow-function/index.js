///Outra forma de criar classe
function Person(){
    
    //const pessoa = this
    this.age = 0

    setInterval(()=>{
        console.log(this.age++)
    },2000);

}

const p1 = new Person()

/**
 * Arrow Function
 * (p1,p2, ..., px)=>{}
 * p1=>{expressao}
 */