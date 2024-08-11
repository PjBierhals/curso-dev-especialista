let nota:number | string=10;
nota = "A+"

console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

let n1: NotaOuConceito=7

n1=7

console.log(n1)

function imprimirNota(nota:NotaOuConceito){
    if(typeof nota==='number'){
        console.log(`nota ${nota}`)
    }else{
        console.log(`Conceito ${nota}`)

    }
}

n1='B'

imprimirNota(n1)