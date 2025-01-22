const numbers = [1, 2, 3, 4, 5];
const resSquare = numbers.map(num => num * 2);
console.log(numbers);
console.log(resSquare);

const numbersForEach = numbers.forEach(num => console.log(num * 3));
console.log(numbersForEach);

// exercise de farenheit a celcius

const tempFarenheit = [32, 68, 95, 115, 212];
const tempCelcius = tempFarenheit.map(temp => (5 / 9) * (temp - 32));
const tempCelciusRounded = tempCelcius.map(temp => temp.toFixed(2));//para que me muestre el valor del elemento iteradocon solamente 2 decimales, hay que usar el metodo toFixed y almacenaren otra constante o variable

console.log(`La temperatura en Farenheit es de: ${tempFarenheit}`);

console.log(`La temperatura en Celcius es de: ${tempCelcius}`);

console.log(`La temperatura en Celcius es de: ${tempCelciusRounded}`);

let sum = 0;
numbers.forEach(num => {
    sum += num;
});

console.log(numbers);
console.log(sum);