/* // identificador this
// this es un identificador que hace referencia al objeto que contiene el código que se está ejecutando en ese momento.

// this en el contexto global hace referencia al objeto global, que en el caso de los navegadores es window. es este ejemplo this hace referencia al objeto global que seria house.

const house = {
    dogName: 'Firulais',
    dogAge: 3,
    bark: function bark() {
        console.log(`${this.dogName} guau guau`);//esto es un enlace implicito, significa que this hace referencia al objeto que contiene el codigo que se esta ejecutando en ese momento
    }

}
house.bark(); // Output: Firulais guau guau.
 */

function bark() {
    console.log(`${this.dogName} guau guau`);
}

const house1 = {
    dogName: 'Firulais',
    dogAge: 3,
}
//house1.bark();//aca da error porque no se le asigno la funcion bark al objeto house1 por lo tanto this no hace referencia a house1

//esto es un enlace explicito
bark.call(house1); // Output: Firulais guau guau. en este caso se le asigna la funcion bark al objeto house1 y se llama con call aca si this hace referencia a house1 por el enlace explicito y metodo call
function bark1(sound){
    console.log(`${this.dogName} says ${sound} este perro tiene ${this.dogAge} años de edad`);
}


const house2 = {
    dogName: 'Fido',
    dogAge: 5,
}
const house3 = {
    dogName: 'Rex',
    dogAge: 3,
}

bark1.call(house2, "guau guau"); //en este caso se le asigna la funcion bark al objeto house2 y se llama con call aca si this hace referencia a house2 por el enlace explicito y metodo call

bark1.apply(house3, ["woof"]); //en este caso se le asigna la funcion bark al objeto house2 y se llama con apply aca si this hace referencia a house2 por el enlace explicito y metodo apply la diferencia entre el metodo call y apply es que call recibe los argumentos separados por coma y apply recibe los argumentos en un array

