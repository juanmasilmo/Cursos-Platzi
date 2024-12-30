// tipo de dato complejo - paso por referencia

interface Frutas {
    naranja: string;
}

let frutas: Frutas = {
    naranja: "🍊"
}

let fruits = Frutas; // fruits apunta a la referencia de frutas
console.log(frutas);
console.dir(frutas);

frutas.naranja = "Manzana pues"; //si frutas cambia, como esta apuntando a la referencia, fruits cambia, adopta el valor de la referencia en cuestion

console.log(fruits); // output "Manzana pues"

fruits.naranja = "peras perro"; // si cambia fruits, cambia frutas, porque los dos apuntan a la misma direccion en memoria