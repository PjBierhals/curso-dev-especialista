//nome
//preço
//desconto(0-1)
//função desconto

function numeroDesconto(n:number=0):number{
    
    if(n>=0 && n<=1){
        return n;
    }else{
        
        return n=0
        
    }
}

function precoComDesconto(preco:number,desconto:number=0):number{
    return preco-(preco*desconto);
}


type Produto={
    nome:string,
    preco:number,
    desconto:number,
    precoComDesconto:()=>number;
}

let produto1: Produto = {
    nome: 'Arroz',
    preco: 20.45,
    desconto: numeroDesconto(1.5),
    precoComDesconto: function () {
        return precoComDesconto(this.preco, this.desconto);
    }
}
console.log(produto1.nome)
console.log(produto1.preco)
console.log(produto1.desconto)
console.log(produto1.precoComDesconto())