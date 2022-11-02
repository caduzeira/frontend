const user = new Object()
user.id = 1,
user.nome = 'Carlos Eduardo',
user.idade = 18,
user.email = 'xxxx@xxx.com.br'

console.log(user)
console.log(Object.keys(user)) // Chaves do objeto

const user2 = new Object()
user2.id = 2,
user2.nome = 'Eduardo',
user2.idade = 18,
user2.email = 'xxxx@xxxx.com.br'

console.log(user2)
console.log(Object.values(user2))//mostra os valores

const car = new Object()
car.id = 1,
car['Ford'] = 'Focus'

console.log(car)
console.log(Object.entries(car))//mostra chave e valor

user.idade = user.idade + 1

console.log(user)

Object.defineProperty(user,'cpf',{ //define se vai aparecer o dado ou não
    enumerable:true, //false não mostra
    writable:true, //false não permite mudança
    value:'000.000.000-00'
})

user.cpf = '111.111.111-11'

console.log(Object.entries(user))

const empresa = 'Ebac'

user.empresa = empresa;

console.log(user)

user.filhos = [
    'Maria','João'
]

console.log(user)