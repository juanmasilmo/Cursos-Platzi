//tipo dato primitivo booleano

const isActive = true;
console.log(isActive);
console.log(typeof isActive);

//conversion impicita
const resultado = 4 > 2; // no es una conversion como tal, es una comparacion que devuelve un booleano, aunque convierte implicitamente el resultado a booleano
console.log(resultado);
console.log(`El resultado es: ${typeof resultado}`);

const name = 'Juan';
console.log(!!name);
console.log(typeof name);

// conversion explicita
const value = 0;// unicamente el 0 es false, cualquier otro numero es true
const otherValue = 10;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean);

const explicitBoolean2 = Boolean(otherValue);
console.log(explicitBoolean2);