const animals = ["dog", "cat", "penguin", "camel", "duck"]
const cutAnimal = animals.slice(1)

console.log(animals.slice(1, 4))//crea un array con el fragmento seleccionado
console.log(cutAnimal)
console.log(animals)
console.log(animals.slice(2,-1))
console.log(animals.slice(-4,-1))
console.log(animals.slice(-4))// con dos valores negativos, -1 debe siempre ser el ultimo, pues slice cuenta de atras para adelante en casos negativos donde -1 es el ultimo valos y -2 seria el siguiente valor de atras para adelante