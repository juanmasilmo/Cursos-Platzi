//conversion explicita

const string = '100';
console.log(string); // Output: 100
console.log(typeof string); // Output: string
const integer = parseInt(string);//convierto a number
console.log(integer); // Output: 100
console.log(typeof integer); // Output: number

const stringDecimal = "3.14"
const numberDecimal = parseFloat(stringDecimal);
console.log(numberDecimal); // Output: 3.14
console.log(typeof numberDecimal); // Output: number

const binario = "1010";
const decimal = parseInt(binario, 2);
console.log(decimal); // Output: 10
console.log(typeof decimal); // Output: number

//conversion implicita

const sum = "3" + 2;//cuando suma, convierte a string y concatena
console.log(`Aca, por el signo mas + js concatena, conviertiendo el number 2 a string y el resultado es: ${sum}`); // Output: 32
console.log(typeof sum); // Output: string

const res = "3" - 2;//cuando resta, convierte a number
console.log(`en este caso resto el string 3 - el number 2 y el resultado es: ${res}`); // Output: 1
console.log(typeof res); // Output: number

const mult = "3" * 2;//cuando multiplica, convierte a number
console.log(`En este caso la multiplicacion de un string 3 por un number 2 resuelve convirtiendo todo a number: ${mult}`); // Output: 6
console.log(typeof mult); // Output: number

const div = "3" / 2;//cuando divide, convierte a number
console.log(div); // Output: 1.5
console.log(typeof div); // Output: number

const modulo = "3" % 2;//cuando calcula el modulo, convierte a number
console.log(modulo); // Output: 1
console.log(typeof modulo); // Output: number
