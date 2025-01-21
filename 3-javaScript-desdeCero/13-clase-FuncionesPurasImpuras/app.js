//funciones puras e impuras
//puras tienen 2 caracteristicas fundamentales
// 1. misma entrada siempre da el mismo resultado
// 2. No tienen efectos secundarios significa que no modifican nada fuera de la funcion

//side effects algunos ejemplos son: 

// 1. Modificar un variables globales
// 2. Modificar parametros de entrada
// 3. Solicitudes http
// 4. Imprimir en consola o en la pantalla
// 5. Manipulacion del DOM
// 6. obtener fecha actual

//funcion pura

function suma(a, b) {
    return a + b;
}

//funcion impura

function suma(a, b) {
    return a + b;
    console.log("hola mundo");
}
let total = 0;

function sumaSideEffect(c, d) {
    total = c + d;
    return total;
}
console.log(total);



