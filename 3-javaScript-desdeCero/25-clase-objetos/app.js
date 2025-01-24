/*
objetos : es una estructura de datos que almacena una lista con key y value 

    objeto{
        key: value,
        key: value
    }

*/

const persona = {
    nombre: 'Juan',
    edad: 40,
    ciudad: 'Posadas',
    pais: 'Argentina',
    ocupacion: 'Desarrollador',
    habilidades: ['HTML', 'CSS', 'JavaScript'],
    contacto: {
        email: 'juan@gmail.com',
        telefono: '123456789',
    },
    saludo() {
        console.log(`Hola soy ${this.nombre}`);
    }
}
console.log(persona);
persona.saludo();

persona.saludo2 = ()=>{
    console.log(`Chau me voy a practicar  ${persona.habilidades[2]}`);
}
persona.saludo2();
console.log(typeof persona.saludo2())

delete persona.ocupacion;
delete persona.contacto.telefono