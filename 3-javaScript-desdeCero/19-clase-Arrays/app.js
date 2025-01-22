/*//como crear arrays?

//1. new Array() or Array()

const fruit= Array("apple", "banana", "orange");

console.log(fruit);

const justIOneNumber = Array(12);// crea un array de 12 posiciones
console.log(justIOneNumber);
console.log(justIOneNumber.length);

const numbrers = Array(1,2,3,4,5,6);//crea el array y agrega los numeros separados por coma
console.log(numbrers);
console.log(numbrers.length);

const literalArray = [4]; // crea el array con un numero nomas en este caso
console.log(literalArray);

const emptyLiteralArray = [];
console.log(emptyLiteralArray);

const sports = ["futbol", "tennis", "golf"]
console.log(sports);

const recipeIngredients = [
    "carne",
    "arroz",
    "frijoles",
    2,
    2,
    3,
    true,
    {
        name: "Juan",
        age: 25
    }
]
console.log(recipeIngredients);

// accesing array elements

const fruisCero = fruit[0];
console.log(fruisCero);

const largoArray = recipeIngredients.length;
console.log(largoArray);

//mutabilidad e inmutabilidad de arrays

fruit.push("sandia");
console.log(fruit);

const newFruits = fruit.concat(["kiwi", "grape"])//lo que hace aca JS es a la constante newFruits le asigna el valor del array fruit y a su vez, agrega dos elementos nuevos, pero no modifica el original
console.log(newFruits);
console.log(fruit);

console.log(Array.isArray(newFruits))// devuelve true or false si es array o no, aunque si se hace un type of dice que es objeto, ya sabemos como funciona JS con los objetos*/

const countries = ["usa", "canada", "UK"];
const newCountries = countries.push("germany", "Argentina");//aca se agrega a countries dos elementos nuevos y guarda en newCountries el valor numerico del array

console.log(newCountries);
console.log(countries);
console.log(Array.isArray(newCountries));
console.log(typeof newCountries)

const deleteCountry = countries.pop()//pop elimina el ultimo elemento del array y recupera en la const deleteCountry el elemento que se elimino
console.log(deleteCountry);
console.log(countries);
console.log(Array.isArray(deleteCountry));
console.log(typeof deleteCountry)

//tambien se puede agregar un valor nuevo al array directamente pero no se guardaria la longitud nueuva del array, aunque se puede comprobar con length
countries.push("chile");
console.log(countries);
console.log(countries.length)

//se puede eliminar el ultimo elemento del array sin necesidad de almacenarlo en otra constante y esto si no se puede verificar o corroborar de otra manera, por lo que es recomendable siempre guardar lo que se elimina en lo posible en un array nuevo
countries.pop();
console.log(countries);
