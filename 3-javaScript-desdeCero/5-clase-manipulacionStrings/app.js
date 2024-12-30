//tipo de dato primitivo string

let nombre = "juanma"
const apellido = 'gomez'
const saludo = `hola ${nombre} ${apellido}`
console.log(saludo)

//1-concatenacion: opcion +, se puede concatenar con +, pero no es la mejor opcion
const direccion = "calle falsa 123"
const ciudad = "Springfield"
console.log("vivo en " + direccion + " en la ciudad de " + ciudad)

//2-interpolacion o Template Lterals: opcion ``, se puede concatenar con ${}, es la mejor opcion
console.log(`vivo en ${direccion} en la ciudad de ${ciudad}`)

//3-concatenacion: join
const frutas = ["manzana", "pera", "banana"]
console.log(frutas.join(", "))// aca lo que hace es unir los elementos del array con una coma y un espacio que es lo que esta en la funcion de join

//4-concatenacion: concat()
const hobbie1 = "correr"
const hobbie2 = "nadar"
const hobbie3 = "leer"
const hobbies = "mis hobbies son: ".concat(hobbie1, ", ", hobbie2, ", ", hobbie3, ".")// aca lo que hace es unir los elementos con una coma y un espacio que es lo que esta en la funcion de concat
console.log(hobbies)

//CARACTERES DE ESCAPE
// 1-escape alternativo

const activity = "I'm learning \"JavaScript\""
console.log(activity)

// 2-escape de backslash
const texto = "hola \"juanma\""
console.log(texto)

// 2-escape de Template Lterals
const texto2 = `hola "juanma"`
console.log(texto2)

console.log("=======================================")

//escribir string largos

/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas perspiciatis hic enim, voluptas quasi autem explicabo, temporibus doloremque ducimus corporis nobis accusantium aut sit, ipsam debitis sunt odio amet consectetur? */

const lorem = `Lorem ipsum, dolor sit amet\nconsectetur adipisicing elit. Quas perspiciatis hic\nenim, voluptas quasi autem explicabo, temporibus\ndoloremque ducimus corporis nobis accusantium aut\nsit, ipsam debitis sunt odio amet consectetur?\n
fin del texto`//\n es un salto de linea
console.log(lorem)
