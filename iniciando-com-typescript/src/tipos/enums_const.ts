const VendasStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada',
} as const

let vendasStatus: string
vendasStatus='123';

console.log(VendasStatus.INICIADA)


const Erros = {
    NOME_NULO: 'nome_nulo',
    EMAIL_NAO_ENCONTRADO: 'email_ nao_encontrado',
    URL_INVALIDA: 'url_invalida',
} as const

let erro: string
erro = Erros.NOME_NULO;
erro = 'cpf_invalido'
console.log(erro);