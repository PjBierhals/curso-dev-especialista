// classe abstrata

abstract class Celular{
    ligar(){
        console.log('Em ligação')
    }
    //metodo abstrato
    abstract acessarRedeMovel():void
}

// classe concreta

class IPhone23Pro extends Celular{
    acessarRedeMovel(): void {
        console.log('Usando rede 7.5g')
    }
}

class GalaxyS5Ultra extends Celular{
    acessarRedeMovel(): void {
        console.log('Usando rede 12G')
    }
}

let c1 = new GalaxyS5Ultra()
c1.ligar()

c1 = new IPhone23Pro()
c1.ligar()
c1. acessarRedeMovel()

export{}