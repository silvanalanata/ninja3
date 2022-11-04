class Ninja {
    vida = 100
    velocidad = 3
    fuerza = 3
    constructor(nombre){
        this.nombre = nombre     
    }

    sayname(){
        console.log("el nombre de mi ninja es "+ this.nombre)

    }
    showStates(){
        console.log("Nombre: "+ this.nombre + " vida: " + this.vida + " velocidad: " + this.velocidad + " fuerza: "+ this.fuerza)
    }

    drinkSake(){
        let vidaTotal= this.vida +10
        console.log("vida: " +  vidaTotal)

    }


}


let ninja1 = new Ninja("Hyabusa");
ninja1.sayname()
ninja1.showStates()
ninja1.drinkSake()

class Sensei extends Ninja{
    sabiduria = 10
    constructor(nombre){
        super(nombre)
        this.vida = 200
        this.velocidad = 10
        this.fuerza = 10

    }

    speakWisdom(){
        this.drinkSake()
        console.log("lo que puede hacer un programador en un mes, dos programadores lo pueden hacer dos meses")

    }
}

let sensei = new Sensei("speakWisdom")
sensei.speakWisdom()
sensei.showStates()