//arrow function and lexical binding

//funcion clasica
const saludo = function (name) {
    return (`hola ${name}`);
}

// arrow function - explicit return

const saludo2 = (name) => {
    return (`hola ${name}`);
}

// arrow function - implicit return

const saludo3 = name => `hola ${name}`;// si solo tiene UN parametro se pueden omitir los parentesis
//const saludo3 = (name) => `hola ${name}`; asi se ve la funcion de flecha con return implicito en el ejemplo de arriba esta sin parentesis, pero solamente se puede hacer si solo tiene un parametro la funcion
console.log(saludo3("juanma"));

const saludo4 = (name, lastname) => `hola ${name} ${lastname}`;

console.log(saludo4("Juanma", "Silmo"));

// Lexical Binding es el enlace lexico, es decir que la funcion flecha toma el valor del this del contexto en el que se encuentra, no crea un nuevo this como lo hace una funcion clasica

// ejemplo de lexical binding

const person = {
    name: "Juanma",
    age: 39,
    saludo: function (mensaje) {
        console.log(`hola soy ${this.name} y tengo ${this.age} años y ${mensaje}`);
    },
    saludoArrow: (mensaje) => {
        console.log(`hola soy ${this.name} y tengo ${this.age} años y ${mensaje}`);
    }
}
person.saludo("Hola Mundo");
person.saludoArrow("Chau Mundo");

const evento = 'PlatziConf'
console.log(evento.indexOf('c'))