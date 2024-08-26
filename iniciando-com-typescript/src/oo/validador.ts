export default class Validador{
   static maiorQueZero(n: number, msgErro: string){
        if(n <=0 ){throw new Error(msgErro)}
    }
    static entre(n: number,min: number, max: number, msgErroMin: string, msgErroMax: string){
        if(n < min ){throw new Error(msgErroMin)}
        if(n > max){throw new Error(msgErroMax)}
    }
    
    static entreV(n: number, msgErro: string){
        if(n < 0 || n > .8){throw new Error(msgErro)}
        
    }
}