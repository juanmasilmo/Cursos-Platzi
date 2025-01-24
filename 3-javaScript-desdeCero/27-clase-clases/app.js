//clases

class Persona {
    constructor(name, age, work){
        this.name = name;
        this.age = age;
        this.work = work;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`)
    }
}
//instancias
const persona1 = new Persona('Juan', 40, 'Desarrollador');
const persona2 = new Persona('Josefina', 30, 'Docente');

//llamando a los metodos
persona1.saludar();
persona2.saludar();



