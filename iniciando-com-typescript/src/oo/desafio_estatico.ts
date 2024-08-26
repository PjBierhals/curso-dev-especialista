class DesafioStatico{
   static readonly nota: number = 1000

    static execultar(){
        console.log(this.nota)
    }
}

DesafioStatico.execultar()