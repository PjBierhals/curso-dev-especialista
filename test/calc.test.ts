import { somar } from "../iniciando-com-typescript/src/calc"

test('Dever  somar corretamente',()=>{
 const resultado = somar(12,20);
 expect(resultado).toBe(32);
})
