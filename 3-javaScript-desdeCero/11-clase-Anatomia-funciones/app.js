function precioDto(precio, dto){
    let tot = precio - (precio * dto / 100);

    return tot;
}

let precio = 100;
let dto = 10;

console.log(`El precio con descuento es: ${precioDto(precio, dto)}`); // Output: 90
console.log(typeof precioDto); // Output: function