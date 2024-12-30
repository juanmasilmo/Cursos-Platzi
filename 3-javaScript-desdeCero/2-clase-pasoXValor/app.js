// en js hay 10 tipos de datos
//primitivos y complejos
//primitivos: number, string, boolean, null, undefined, symbol se pasan por valor
//complejos: array, objeto, funcion, set, map, weakmap, weakset se pasan por referencia

//primitivos
let a = 10;
let b = a;
console.log(a, b); //10 10
console.log(a === b); //true

//si a cambia b no cambia
a = 20;
console.log(a, b); //20 10
console.log(a === b); //false

//si b cambia a no cambia
b = 30;
console.log(a, b); //20 30

let x = 1
let y = "hola"
let z = null
let w = undefined

let c = x
let d = y
let e = z
let f = w
console.log(x, y, z, w, c, d, e, f);

console.log("=========================================================")
console.log("=========================================================")
console.log("=========================================================")


//tipos de datos complejos
//paso por referencia
let frutis = ["manzana", "mi banana", "te comiste"];
let frutas2 = frutis;
console.log(frutis, frutas2);
frutis.push("Pera")
console.log(frutas2);//el paso por referencia aen datos complejos apunta a la misma direccion de la igualdad en futas2=frutis

