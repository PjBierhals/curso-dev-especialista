interface Flexivel {
    nome: string
    [chave: string]: string | number
}

const f1: Flexivel = {
    nome: 'Juliano',
    idade: 44,
    salario: 1234,
    
}



console.log(f1.nome)
console.log(f1.idade)
console.log(f1.salario)

export { }