// null

const a = null;
console.log(a);
console.log(typeof a);//imprime que es un objeto

// undefined
let b;
console.log(b);
console.log(`el  tipo de valor de undefined es: ${typeof b}`);
//imprime undefined porque no se le asigno un valor

// symbol
const simbolo = Symbol('mi simbolo');
const symbol1= Symbol('1');
const symbol2= Symbol('1');
console.log(symbol1 === symbol2); //imprime false porque son simbolos unicos
console.log(simbolo);
console.log(`el tipo de valor de symbol es: ${typeof simbolo}`); //imprime un simbolo unico

const ID = Symbol('id');
let cliente = {};
cliente[ID] = "1234";
console.log(cliente);
console.log(ID);

//bigint
const num = 1234567890123456789n;//n al final para indicar que es un bigint
console.log(num);
