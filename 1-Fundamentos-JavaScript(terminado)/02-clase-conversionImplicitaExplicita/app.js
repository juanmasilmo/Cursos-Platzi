//Explicit type Casting

const string = "42"
const number = parseInt(string)
console.log(number)
console.log(typeof number)

const stringDecimal = "3.14"
const numberDecimal = parseFloat(stringDecimal)
console.log(numberDecimal)
console.log(typeof numberDecimal)

const binary = "10110011"
console.log(typeof binary)
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//Implicit type Casting

const strimgSum = "5" + 3 //string primero
console.log(strimgSum)
console.log(typeof strimgSum)

const sumInvert = 3 + "5" //string segundo
console.log(sumInvert)
console.log(typeof sumInvert)
//strimg primero o segundo, js convierte el number a string

const sumWithBoolean = "3" + true // primero string
console.log(sumWithBoolean)
console.log(typeof sumWithBoolean)

const sumWithBooleanInvert = true + "3" // primero boolean
console.log(sumWithBooleanInvert)
console.log(typeof sumWithBooleanInvert)
//aparentemente cuando hay un string de pòpr medio, tranforma todo a string, concatena y chau

const sumWithNumberT = 2 + true //true es igual a 1
const sumWithNumberF = 2 + false //false es igual a 0

console.log(sumWithNumberT, sumWithNumberF)
console.log(typeof sumWithNumberT, typeof sumWithNumberF)
//boolean por mas que sea de true o false es 1 y 0 o sea number, calculo que por eso transforma a number
console.log("===============================================")
const stringValue = "10"
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)

console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)

console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)