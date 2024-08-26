class Cursoss{
   

  constructor(readonly id: number, public nome?: string){
    
    if(id< 1) throw new Error ('id invalido')
  }

}

const c11= new Cursoss(123);
// c1.id=123
c11.nome='Iniciando com TypeScript';

console.log(c11.id);
console.log(c11.nome);

const c22 =new Cursoss(456, "TypeScript Avançado")
console.log(c22)
