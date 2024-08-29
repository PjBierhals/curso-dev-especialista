interface flexivel {
    nome: string
    [chave: string]: any
}

const f1: flexivel = {
    nome: 'Juliano',
    idade: 44,
    salario: 1234,
    dependents: [
        {
            nome: 'Davi',
            idade: 8
        },
        {
            nome: 'Juliana',
            idade: 24
        }
    ]


}



console.log(f1.nome)
f1.dependents.map((x: any )=>console.log(`Nome: ${x.nome}\nIdade: ${x.idade}\n*****`))

export { }