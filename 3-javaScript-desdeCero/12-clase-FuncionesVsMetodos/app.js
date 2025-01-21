// capacidades de las funciones en relacion a los objetos

//1. pasar funciones como argumentos => callbacks

function a() {

}
function b(a) {

}
b(a);

//2. retornar funciones como resultado de otra funcion => closures

function a() {
    return function b() {

    }
}

//3. asignar funciones a variables => funciones anonimas
const saludo = function () {
    console.log('hola mundo');
};
saludo();

//propiedades y metodos
function a() { }
const b = function () { }
a.call(b);

//4.anidar funciones => nested functions
function a() {
    function b() {
        function c(name) {
            console.log(`hola ${name}`);
        }
        c("juanma");
    }
    b();
}
a();

//5. funciones como valores de objetos

const rocket ={
    name: "falcon 9",
    launch: function () {
        console.log("Rocket launched");
    }
}
rocket.launch();//esto se conoce como metodo