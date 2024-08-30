interface Entidade {
    id: string
}

interface EntidadeComDatas extends Entidade {
    criadoEm?: Date
    atualizadoEm: Date
    deletadoEm?: Date
}

interface Usuario extends EntidadeComDatas {
    nome: string
    email: string
    senha?: string
}

const u1: Usuario = {
    id: '123',
    nome: "João",
    email: 'joao@gmail.com',
    criadoEm: new Date(),
    atualizadoEm: new Date(),

}

console.log(u1)

//exemplo produto
interface Vendavel {
    preco: number
    desconto: number
}

interface Produto extends EntidadeComDatas, Vendavel {
    nome: string
}

const p1: Produto = {
    id: 'cde-456',
    nome: 'Tablet',
    preco: 1000,
    desconto: 0.05,
    atualizadoEm: new Date(),


}

console.log(p1)

export { }