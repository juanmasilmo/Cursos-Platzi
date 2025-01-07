// dato primitivo number tipo entero y decimal

const entero = 100;
const decimal = 100.5;
const negativo = -100;
//const exponente = 2e3; // 2 * 10^3 = 2000

console.log(typeof entero);
console.log(typeof decimal);
console.log(typeof negativo);
//console.log(typeof exponente);

//notacion cientifica

const exponente = 2e3; // 2 * 10^3 = 2000
console.log(exponente);

// infinitos
const infinito = Infinity;
console.log(infinito);
const nan = NaN;
console.log(nan);


//operaciones

// suma, resta, multiplicacion, division

const numero1 = 30;
const numero2 = 20;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

// modulo, exponente

console.log(numero1 % numero2);
console.log(numero1 ** numero2); //exponente


//presicion
const res = 0.1 + 0.2;
console.log(res);
console.log(`el resultado con 2 decimales es: ${res.toFixed(2)}`);
console.log(res === 0.3); //false
//true si son iguales, false si no lo son
console.log(res.toFixed(1) === 0.3); //false

// operaciones avanzadas
// maximo, minimo, redondear, raiz cuadrada, potencia,
// logaritmo, absoluto, cuadrado, cuadrado raiz
// logaritmo natural, logaritmo base 10
const maximo = Math.max(10, 20, 30, 40, 50);
console.log(maximo);
// minimo
const minimo = Math.min(10, 20, 30, 40, 50);
console.log(minimo);
// redondear
const redondear = Math.round(7.6);
console.log(redondear);
// raiz cuadrada
const raiz = Math.sqrt(64);
console.log(raiz);
// potencia
const potencia = Math.pow(2, 3);
console.log(potencia);
// logaritmo
const logaritmo = Math.log(100);
console.log(logaritmo);
// logaritmo base 10
const logaritmo10 = Math.log10(100);
console.log(logaritmo10);
// absoluto
const absoluto = Math.abs(-10);
console.log(absoluto);
// cuadrado
const cuadrado = Math.pow(10, 2);
console.log(cuadrado);
// cuadrado raiz
const cuadradoRaiz = Math.sqrt(100);