//objetos

//esto es un objeto literal, es una forma de crear objetos en js, se definen con clave-valor
const studentsPlatziRank = {
    "juanma": 69,
    "juan": 85,
    "maria": 90,
    "juanma2": 70,
    "juan3": 80
};

console.log(studentsPlatziRank.juanma);

//nombreEstudiante va a almacenar el resultado que devuelva la funcion encontrarClavePorValor, donde se le pasa el ogjeto studentsPlatziRank y el valor que estamos buscando

const nombreEstudiante = encontrarClavePorValor(studentsPlatziRank, 80);
console.log(nombreEstudiante);

//creamos la funcion encontrarClavePorValor porque no hay forma de acceder al valor directamente
function encontrarClavePorValor(objeto, valorBuscado) {
    console.log(typeof objeto)
    for (const clave in objeto) {// for...in: en js cuando detecta la iteracion for...in asigna a clave, en este caso, el nombre(clave) de cada estudiante y compara con su valor(el numero), en resumen El bucle for...in está diseñado para iterar sobre las propiedades (claves) de un objeto.
        console.log(`${clave}`)
        if (objeto[clave] === valorBuscado) {// Cuando comparas objetos, se compara la referencia a los objetos, no su contenido. por eso la igualdad estricta devuelve true
            return clave;
        }
    }
    return null;//devuelve null si no encuentra valor
};