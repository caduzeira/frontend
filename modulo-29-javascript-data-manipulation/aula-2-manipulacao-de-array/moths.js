import month from './index'

//filter - filtra itens
let days31 = month.filter((months)=>{
    return months.days === 30 
})

console.log(days31)

let toPrint = ''

//forEach - um subistituto ao "for"
days31.forEach(days => {
    toPrint += ', ' + days.month
})

//serve para operações matematicas
let sumMonthDays = days31.reducer((sum,month)=>{
    return sum + month.days
})

//MAP - funções em arrays de retorno individual (cada valor)
let years = days31.map((m)=>{
    return m.days * 10
})
