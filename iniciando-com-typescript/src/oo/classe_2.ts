class Cursos{
    readonly id: number
    nome:string | undefined

  constructor(id: number){
    this.id = id;
    if(id< 1) throw new Error ('id invalido')
  }

}

const c2= new Cursos(123);
// c1.id=123
c2.nome='Iniciando com TypeScript';

console.log(c2.id);
console.log(c2.nome);