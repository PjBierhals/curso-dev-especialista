interface Usuario{
    id: number
    nome: string
    email: string
}


const usuarioLogado: Usuario = {
    id: 123,
    nome: 'João',
    email:' joao@email.com'
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)

export{}