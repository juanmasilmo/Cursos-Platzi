//filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const evenNumbers = numbers.filter(num => num % 2 !== 1)
console.log(numbers)
console.log(evenNumbers)

// reduce caso 1 "autosuma"
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const sum = numbers2.reduce((acumulador, valorActual) => acumulador + valorActual
    // console.log(`El acumulador es de: ${acumulador}`)
)// acc y current son variables que le pasamos a la funcion, le voy a cambiar el nombre para que se vea que funciona tambien y el 0 es la posicion donde empieza a iterar reduce
console.log(`el tipo de la variable numbers2 es: ${typeof numbers2}`)
console.log(`Los numeros del array 2 son: ${numbers2}`)

console.log(`el tipo de la variable sum es: ${typeof sum}`)
console.log(`La suma total es de: ${sum}`)

/*
estructura basica de reduce

array.reduce((acumulador, valorActual, índiceActual, arrayCompleto) => {
    // lógica aquí
}, valorInicialDelAcumulador);

*/

//reduce caso 2 repeticion de pàlabras

const words = ["juan", "auto", "exito", "ganas", "actitud", "exito", "ganas", "actitud"];
const repeatWord = words.reduce((acc,currValue) =>{
    if (acc[currValue]) {
        acc[currValue]++
        console.log(`entro al if: ${acc[currValue]}`)
    } else {
        acc[currValue] = 1
        console.log(`entro al else: ${acc[currValue]}`)
    }
    return acc
}, {})
console.log(words)
console.log(repeatWord)