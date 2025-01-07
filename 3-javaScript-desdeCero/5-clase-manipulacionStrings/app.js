//strings pueden ser primitivos u objetos

//primitivos
let nombre = 'Juan';
console.log(nombre);
console.log(typeof nombre)

let name = String("Juan2");// esta forma esta deprecated... Obsoleta, por eso se tacha la variable
console.log(name);
console.log(typeof name);

// string objetos

const stringObjeto = new String('Juan3');
console.log(typeof stringObjeto);

//acceder a caracteres

const saludo = 'hola juan. como estas bro?';
console.log(saludo[0]);// corchetes porque es un array
console.log(saludo[1]);

console.log(saludo.charAt(0));//parentesis porque es un metodo
console.log(saludo.charAt(1));

console.log(saludo.indexOf('juan'));//busca la primera coincidencia
console.log(saludo.indexOf('j'));//busca la primera coincidencia si no la encuentra devuelve -1

console.log(saludo.indexOf('bro', 10)); //busca la primera coincidencia a partir de la posicion 10

console.log(saludo.lastIndexOf('juan'));//busca la ultima coincidencia

console.log(saludo.slice(0, 4));//corta el string desde la posicion 0 hasta la 4

console.log(saludo.length);//devuelve la longitud del string

console.log(saludo.toLocaleLowerCase());//convierte el string a minusculas

console.log(saludo.toLocaleUpperCase());//convierte el string a mayusculas

console.log(saludo.split(' '));//divide el string en un array

console.log(saludo.substring(0, 4));//corta el string desde la posicion 0 hasta la 4

console.log(saludo.includes('juan'));//devuelve true si encuentra la palabra

console.log(saludo.startsWith('ho'));//devuelve true si el string empieza con la palabra

console.log(saludo.endsWith('bro?'));//devuelve true si el string termina con la palabra

console.log(saludo.replace('juan', 'pedro'));//reemplaza la palabra

console.log(saludo.repeat(3));//repite el string 3 veces

console.log(saludo.trim());//elimina los espacios en blanco al principio y al final del string

console.log(saludo.trimStart());//elimina los espacios en blanco al principio del string

console.log(saludo.trimEnd());//elimina los espacios en blanco al final del string


