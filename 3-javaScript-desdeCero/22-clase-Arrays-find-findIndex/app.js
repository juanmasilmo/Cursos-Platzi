//array.find

const numbers = [5,10,15,20,25,30,45,65,35,45]
const numBuscado = numbers.find(number => number > 15)//find solamente trae el resultado inmediato que cumpla con la condicion

console.log(`El array original es: ${numbers}`)
console.log(`El numero mayor a 15 es: ${numBuscado}`)

//array.findIndex

const indexBuscado = numbers.findIndex(number => number > 50)
console.log(`El array original es: ${numbers}`)
console.log(`El index con el numero mayor a 50 es: ${indexBuscado}`)//findIndex solamente trae el resultado inmediato que cumpla con la condicion(el primero)