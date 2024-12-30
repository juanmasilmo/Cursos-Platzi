// tipo de dato complejo - paso por referencia

let frutas = {
    naranja: "🍊"
}
fruits = frutas
console.log(frutas)
console.dir(frutas)

frutas.naranja = "Manzana pues" //si frutas cambia, como esta apuntando a la referencia, fruits cambia, adopta el valor de la referencia en cuestion

console.log(fruits)// output "Manzana pues"

fruits.naranja = "peras perro" // si cambia fruits, cambia frutas, porque los dos apuntan a la misma direccion en memoria
console.log(frutas) //output "peras perro"

let ropa = {
    blusa: "👚"
}
console.log(ropa)
ropa.pantalon = "👖"
console.log(ropa)
console.log(ropa.blusa)
console.log(ropa.pantalon)