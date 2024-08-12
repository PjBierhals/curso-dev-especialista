//type conta corrente(numero, saldo, movimentar)
type ContaCorrente = {
    numeroConta: number;
    saldo: number;
    movimentar: (valor: number) => number;
};

//type cliente(nome,email,contas[])
type Cliente = {
    nome: string;
    email: string;
    contas: ContaCorrente[] | null;
};

// Lista de clientes
let listaClientes: Cliente[] = [
    {
        nome: 'Joao',
        email: 'joao@zmail.com',
        contas: [{ numeroConta: 1, saldo: 2000, movimentar: movimentar }]
    },
    {
        nome: 'Pedro',
        email: 'pedro@zmail.com',
        contas: [
            { numeroConta: 2, saldo: 4000, movimentar: movimentar },
            { numeroConta: 3, saldo: 5000, movimentar: movimentar }
        ]
    },
    {
        nome: 'Maria',
        email: 'maria@zmail.com',
        contas: [
            { numeroConta: 4, saldo: 1800, movimentar: movimentar },
            { numeroConta: 5, saldo: 14000, movimentar: movimentar }]
    },
    {
        nome: 'Gustavo',
        email: 'gustavo@zmail.com',
        contas: [
            { numeroConta: 6, saldo: 2000, movimentar: movimentar },
            { numeroConta: 7, saldo: 8500, movimentar: movimentar }]
    },
    {
        nome: 'Amanda',
        email: 'Amanda@zmail.com',
        contas: [
            { numeroConta: 8, saldo: 2000, movimentar: movimentar },
            { numeroConta: 9, saldo: 7000, movimentar: movimentar }
        ]
    },
    {
        nome: 'Rafaela',
        email: 'Rafaela@zmail.com',
        contas: [{ numeroConta: 10, saldo: 25000, movimentar: movimentar }
        ]
    }
];

// Função Movimentar
function movimentar(this: ContaCorrente, valor: number): number {
    return this.saldo += valor;
}



// Função para buscar uma conta pelo número
function buscarConta(numeroConta: number): ContaCorrente | null {
    for (let cliente of listaClientes) {
        if (cliente.contas) {
            let conta = cliente.contas.find(c => c.numeroConta === numeroConta);
            if (conta) {
                return conta;
            }
        }
    }
    return null;
}

// Função para buscar uma conta pelo número usando map e find
function buscarContaMap(numeroConta: number): ContaCorrente | null {
    // Cria um array com todas as contas, mesmo que algumas possam ser undefined
    const contas = listaClientes
        .map(cliente => cliente.contas?.find(conta => conta.numeroConta === numeroConta))
        .filter(conta => conta !== undefined) as ContaCorrente[]; // Remove valores undefined e garante que o tipo é ContaCorrente[]

    // Retorna a primeira conta encontrada ou null se nenhuma for encontrada
    return contas[0] || null;
}


// Função para buscar saldo de uma conta pelo número usando map e find
function buscarContaMapSaldo(numeroConta: number): number | null {

    const contas = listaClientes
        .map(cliente => cliente.contas?.find(conta => conta.numeroConta === numeroConta))
        .filter(conta => conta !== undefined) as ContaCorrente[];
    return contas[0].saldo || null;
}

// Função para buscar as contas de um cliente específico, sem incluir a função `movimentar`
function buscarContasCliente(nome: string, email: string): Omit<ContaCorrente, 'movimentar'>[] | null {
    // Encontra o cliente com o nome e e-mail fornecidos
    const cliente = listaClientes.find(c => c.nome === nome && c.email === email);

    // Se o cliente for encontrado, retorna suas contas sem a função `movimentar`
    if (cliente) {
        return cliente.contas?.map(({ movimentar, ...conta }) => conta) || null;
    }

    // Se o cliente não for encontrado, retorna null
    return null;
}

// Função para somar os saldos das contas de um cliente específico
function somarSaldos(nome: string, email: string): number | null {
    const contas = buscarContasCliente(nome, email);

    // Se as contas forem encontradas, soma os saldos
    if (contas) {
        return contas.reduce((total, conta) => total + conta.saldo, 0);
    }

    // Se não houver contas, retorna null
    return null;
}

// Função para movimentar uma conta
function movimentarConta(numeroConta: number, valor: number): ContaCorrente | null {
    let contaAlvo = buscarContaMap(numeroConta);
    if (contaAlvo) {
        contaAlvo.movimentar(valor);
        return contaAlvo;
    }
    return null;
}

// Função buscar todas as contas e clientes


// Exemplo de uso das funções
let contaAtualizada = movimentarConta(4, -500); // Movimenta a conta com número 1, adicionando 500

if (contaAtualizada) {
    console.log("Conta movimentada com sucesso.");
    console.log("Saldo atualizado:", contaAtualizada.saldo);
} else {
    console.log("Conta não encontrada.");
}
console.log(buscarContaMapSaldo(1))

console.log(buscarContasCliente('Maria', 'maria@zmail.com'))
console.log(somarSaldos('Maria', 'maria@zmail.com'))