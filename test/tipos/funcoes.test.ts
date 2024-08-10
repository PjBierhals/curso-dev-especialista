import { multiplicar, multiplicarPerigosa, saudacao } from "../../iniciando-com-typescript/src/tipos/funcoes";

test(' Deve retornar uma saudação baseada na hora atual', ()=>
{
    const s =saudacao('João');
    expect(s).toBe(`Olá João! Passar bem!`);
})

test ('Deve multiplicar dois numeros', ()=>{
    const resultado = multiplicar(4,2);
    expect (resultado).toBe(8);
})
test ('Deve retornar um nNan', ()=>{
    const resultado = multiplicarPerigosa('a',2);
    expect (resultado).toBeNaN();
})