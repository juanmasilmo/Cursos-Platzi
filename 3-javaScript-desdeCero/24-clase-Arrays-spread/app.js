//spread

const arrayOriginal = ["autos", 1, 2, 3, 4, 6, true, "verduras"];
const arrayCopy = [...arrayOriginal];
console.log(arrayOriginal);
console.log(arrayCopy);

// combinando arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

console.log(array1)
console.log(array2)
console.log(array3)

// crear array adicionando elementos

const arrayBase = [10, 11, 12]
const arrayAdded = [...arrayBase, 13, 14, 15]
console.log(arrayBase)
console.log(arrayAdded)

// pasar parametros a una funcion
function sum(a, b, c) {
    return a + b + c
}

const numbers3 = [1, 2, 3]

console.log(`Devolviendo la funcion directamente en el clg: ${sum(...numbers3)}`)
const result = sum(...numbers3)
console.log(`resultado de la suma con una constante que almacena el resultado de la funcion: ${result}`)