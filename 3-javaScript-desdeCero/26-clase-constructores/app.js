/*
    const persona = {
        name: "John",
        age: 30,
    }
*/

function Persona(name, age, work) {
    this.name = name;
    this.age = age
    this.work = work
}

const persona1 = new Persona("juanma", 40, "developer")

/*persona1.prototype.contact = {
    phone: "123456789",
    email: "juanma@gmail.com"
}*/

Persona.prototype.contact = {
    phone: " ",
    email: " "
}//todas las instancias van a compartir esta propiedad, por lo que si cambio el phone por ejemplo, va a cambiar en todas las instancias, asi que es conveniente crear las propiedades nuevas en el constructor nomas si son datos particulares, si son datos que si van a compartir las instancias no hace falta

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`)
}


persona1.nacionalidad = "Argentino";

console.log(persona1)
persona1.saludar();

console.log(Persona)

const persona2 = new Persona("josefina", 45, "diseñadora grafica")
persona2.contact.email = "loba@gmail.com"
persona2.contact.phone = "32132132"
console.log(persona2)
persona2.saludar();