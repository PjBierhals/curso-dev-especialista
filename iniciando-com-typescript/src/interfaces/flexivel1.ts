interface flexivel {
    nome: string
    [chave: string]: string | number
}

const f1: flexivel = {
    nome: 'Juliano',
    idade: 44,
    salario: 1234,
    
}



console.log(f1.nome)
console.log(f1.idade)
console.log(f1.salario)

export { }