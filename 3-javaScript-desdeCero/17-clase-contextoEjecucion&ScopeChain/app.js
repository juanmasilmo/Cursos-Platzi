/*const productName = "smartphone"
const productPrice = 500
const brand = "techCo"

function getProductDetails(){
    const productName = "laptop"
    const productPrice = 1000
    //const brand = "nuevo"// probar llamar a la funcion sin la const brand de la funcion y desp con para ver los resultados del scope

    return `The ${productName} costs $${productPrice} and is from the brand ${brand}.`
}

//console.log(getProductDetails())

console.log(`The ${productName} costs $${productPrice} and is from the brand ${brand}.`)

const userPoints = 150//esto al estar en un contexto global puedo usarlo en el if, else o en cualquier contexto local que no contenga otra constante con el mismo nombre

function checkAccess(){
    if (userPoints<100) {//la constante que creo en el if solamente se usa en el if
        const message = "Access Denied: Insufficients points"
        return message
    } else {//la constante que creo en el else, unicamente la puedo usar en el else
        const message = "Access Granted: Enjoy!!!"
        return message
    }
}
console.log(checkAccess())

//console.log(message)//esto no funciona porque message es una constante local de la funcion checkAccess*/

const globalVariable = "🍔"

function localOne(){
    console.log(`Global 1: ${globalVariable}`)
    //console.log(`Local 1: ${localVariable}`)//no esta definido, para mi el ejemplo aca seria con algunas de las variables del contexto de mas abajo  a ver si  respeta el scope o no

    function localTwo(){
        const carrot = "🥕"
        console.log(`Local 2: ${carrot}`)
    }
    function localThree(){
      console.log(`Local 3: ${carrot}`)//esto no funciona porque carrot es una constante de contexto local, pues esta dentro de una funcion que a su vez esta dentro de otra funcion
    }
    localTwo()
    localThree()

}
console.log(localOne())