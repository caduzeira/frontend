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
        let tipo = ''
        this.movimentacoes.forEach(lancamento =>{
            lancamento.banco = lancamento.banco.replace(/x$/i, 'Y')
            if(!lancamento.banco.match(/y/i)){
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }

}

const m01 = new Movimentacao('Bank Y','salario',2000)
const m02 = new Movimentacao('Bank Z','comissão',200)
const m03 = new Movimentacao('Bank X','imposto',-5000)
const registro01 = new Registro(22,10,2022)
registro01.novaMovimentacao(m01,m02,m03)
console.log(registro01.resumo())