/*
objetos
estructura de datos
key / value
*/
const persona = {
    nombre: "juanma",
    edad: 40,
    direccion: {
        calle: "calle 1",
        numero: 123,
        ciudad: "perdida"
    },
    saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años de edad`)
    }
}
console.log(persona)
persona.saludar()