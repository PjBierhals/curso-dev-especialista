type User = {
    nome: string,
    email: string
}

const user: User[]=[
    {nome:'Joao', email:'joao@zmail.com'},
    {nome:'Pedro', email:'pedro@zmail.com'},
    {nome:'Maria', email:'maria@zmail.com'},
    {nome:'Gustavo', email:'gustavo@zmail.com'},
    {nome:'Amanda', email:'Amanda@zmail.com'},
    {nome:'Rafaela', email:'Rafaela@zmail.com'}
]


function buscaPorEmail(emal:string):User|null{
    return user.find(u=>u.email===emal)??null
}

console.log(buscaPorEmail('maria@zmail.com'))
console.log(buscaPorEmail('maria@zmai.com'))