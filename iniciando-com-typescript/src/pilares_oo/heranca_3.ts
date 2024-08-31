interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}


interface CasoDeUso{
    executar(entrada: any):any
}

class RegistrarUsuario implements CasoDeUso{
    executar(entrada: Usuario) {
        console.log('Execultando Registro')
        console.log(entrada)
    }

}

const u1: Usuario = {
    id: 123,
    nome: "João",
    email: 'joao@gmail.com',
    senha: '654123'
}


const casoDeUso: CasoDeUso = new RegistrarUsuario()
casoDeUso.executar(u1)
export { }