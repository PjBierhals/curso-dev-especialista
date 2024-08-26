
//Produto (id, nome, preco,desc, precoFinal)
//dados concistentes id, nome entre 2 e 250 caracteres ,preco > 0, desconto entre 0 e 0.8 
class Produto{
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desc: number = 0,
    ){
        if(id < 0){throw new Error("ID invalido") }
        if(nome.length < 2){throw new Error("Nome Invalido. Menos de 2 caracteres")}
        if(nome.length > 255){throw new Error("Nome Invalido. Mais de 255 caracteres")}
        if(preco < 0){throw new Error("o Preço deve ser maior que 0")}
        if(desc < 0 && desc > .8){ throw new Error("O desconto deve estar entre 0 e 0.8")        }
    }
    get precoFinal(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto(1,"caneta",12.50, 0.1)
const p2 = new Produto(2,"notebook",7.800)

console.log(p1, p1.precoFinal)
console.log(p2, p2.precoFinal)
export{}