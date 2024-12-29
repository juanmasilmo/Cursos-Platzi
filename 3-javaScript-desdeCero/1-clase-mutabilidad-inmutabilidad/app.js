console.log("hola mundo 2")

//tipo dato primitivo - inmutable por que son inmutables, porque el valor original no cambia, sino que se agrega un nuevo valor a la variable
//inmutables se pasan por valor

let num = 23
console.log(num)
num = num + 10//aca no cambio 23, se le asigno un nuevo valor a num
console.log(num)

let esTrue = true
console.log(esTrue)
esTrue = false
console.log(esTrue)

//tipo dato complejo - mutable por que son mutables,
//mutables se pasan por referencia

let persona = { nombre: "juanma", edad: 39}
console.log(persona.nombre)
console.log(persona.edad)
persona.edad = 40
console.log(persona.edad)// en este caso si muto, cambio el valor del dato, por ejemplo, el dato es edad: antes era 30 y despues 40, edad sigue siendo edad, pero su valor cambio si yo quiero acceder al dato edad lo hago como siempre y me va a traer el valor actual

let frutas = ["pera", "banana", "frutilla"]
console.log(frutas)
//mutables se pasan por referencia
frutas.push("naranja")
console.log(frutas)
frutas[0]= "sandia"
console.log(frutas)

//nombre
function cambiarNombre (obj){
    obj.nombre = "juanmi"
}
console.log(persona)
cambiarNombre(persona)
//nombre sigue siendo nombre, solamente cambio su valor interno
console.log(persona)