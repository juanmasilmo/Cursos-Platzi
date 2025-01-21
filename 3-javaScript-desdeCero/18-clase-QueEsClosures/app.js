/*
Closure: funcion que tiene acceso a variables de un ambito externo, incluso despues de que esa funcion haya terminado de ejecutarse

ambito lexico: cada vez que se declara una funcion, crea su propio ambito lexico, y puede acceder a las variables dentro de ese ambito y a las variables en ambitos superiores
*/


//practicar mas, buscar ejemplos, intentar entender la estructura
function outerFunction(){
 let outerVar = "I am from outer function";
    function InterFunction(){
        console.log(outerVar);
    }
    return InterFunction;
}

const closureEx = outerFunction();
closureEx();

function createCount(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}
const countA = createCount();
countA()
countA()
countA()
countA()

const countB = createCount();
countB()
countB()

function outer(){
    let message = "holi"
    function inner(name){
        console.log(`${message} ${name}`);
    }
    return inner;
}

const closureA = outer()
const closureB = outer()

closureA("juanmi")
closureA("KBZON!")

closureB(closureA("json"))