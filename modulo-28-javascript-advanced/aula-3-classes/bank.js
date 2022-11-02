class Movimentacao{
    constructor(banco = 'Padrão', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro{
    constructor(dia,mes,ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(lancamento => this.movimentacoes.push(lancamento))
    }

    resumo(){
        let valorAtualizado = 0;
        this.movimentacoes.forEach(lancamento =>{
            valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }

}

const m01 = new Movimentacao('Bank X','salario',2000)
const m02 = new Movimentacao('Bank X','comissão',200)
const m03 = new Movimentacao('Bank X','imposto',-5000)
const registro01 = new Registro(22,10,2022)
registro01.novaMovimentacao(m01,m02,m03)
console.log(registro01.resumo())

const movimentacoesGerais = [m01,m02,m03]

movimentacoesGerais.map(elemento =>
    console.log(elemento.banco.length)
)