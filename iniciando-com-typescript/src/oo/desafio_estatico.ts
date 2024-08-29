class DesafioStatico{
  nota: number = 1000

   
    static execultar(){
        const  instacia = new DesafioStatico()
        console.log(instacia.nota)
    }
}

DesafioStatico.execultar()