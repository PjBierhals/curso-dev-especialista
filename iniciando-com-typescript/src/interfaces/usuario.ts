interface Usuario{
    id?: number
    nome: string
    email: string
    senha?: String
}


const usuarioLogado: Usuario = {
    id: 123,
    nome: 'João',
    email:'joao@email.com',
    senha:'12345'
}

console.log('Usuário')
console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)
console.log(usuarioLogado.senha)

const usuarioOpcional: Partial<Usuario> = {
    id:4321,
    nome:'Jaime',
    senha:'1234567y'
}

console.log('')
console.log('Usuário Partial')
console.log(usuarioOpcional.id)
console.log(usuarioOpcional.nome)
console.log(usuarioOpcional.email)
console.log(usuarioOpcional.senha)

const usuarioCompleto: Required<Usuario> = {
    id:4321,
    nome:'Ana',
    email: 'ana@email.com',
    senha:'1234567y'
}

console.log(' ')
console.log('Usuário Required')
console.log(usuarioCompleto.id)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.email)
console.log(usuarioCompleto.senha)
export{}