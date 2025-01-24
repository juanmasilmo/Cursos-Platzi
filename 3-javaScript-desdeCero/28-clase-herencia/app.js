//herencia

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal {
    constructor(name, type, raza) {
        super(name, type);
        this.raza = raza;
    }
    emitirSonido() {
        console.log(`El perro ${this.name} emite un ladrido, es de la raza ${this.raza}`);
    }
    correr() {
        console.log(`El perro ${this.name} corre muy feliz`);
    }
}
const perro1 = new Perro("Bobby", "Canino", "Golden Retriever");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.saltar = function () { 
    console.log(`El perro ${this.name} salta muy alto`);
}
//agregar un metodo a una clase existente
perro1.saltar();

Perro.prototype.agachado = function(){
    console.log(`El perro ${this.name} se agacha`);
}
//agregar un metodo a la clase Perro
perro1.agachado();
