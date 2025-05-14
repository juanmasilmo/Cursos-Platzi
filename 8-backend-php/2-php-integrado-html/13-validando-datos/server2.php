<?php
//filter_var() valida el dato que viene como string

//filter_var($float, FILTER_VALIDATE_FLOAT) Qué hace: Valida si el valor proporcionado puede interpretarse como un número decimal válido (float), independientemente de su tipo de dato. Cómo funciona: Si el valor es un número decimal válido (ya sea un float o una cadena que representa un número decimal), devuelve el valor. Si no es válido, devuelve false.

$float_string = "1,234.20"; // string, es una cadena de texto que contiene un numero decimal con coma y punto, el formato es 1.234,20
$float2 = filter_var($float_string, FILTER_VALIDATE_FLOAT, FILTER_FLAG_ALLOW_THOUSAND); // sanitiza el float, lo que hace exactamente es convertir a numero decimal, por ejemplo, convierte 12.5 en 12.50 y elimina caracteres no numericos

if ($float2 == true) { // aca validamos si es un float, si no lo es devuelve false, is_float valida el tipo de dato
    echo "Es un float validando con filter_var y FILTER_VALIDATE_FLOAT, Valida si el valor proporcionado puede interpretarse como un número decimal válido (float), independientemente de su tipo de dato";
} else {
    echo "No es un float";

}
echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

$int_string = "1234"; // string, es una cadena de texto que contiene un numero entero, el formato es 1234
$int2 = filter_var($int_string, FILTER_VALIDATE_INT); // sanitiza el int, lo que hace exactamente es convertir a numero entero, por ejemplo, convierte 12.5 en 12 y elimina caracteres no numericos

if ($int2 == true) { // aca validamos si es un int, si no lo es devuelve false, is_int valida el tipo de dato
    echo "Es un int validando con filter_var y FILTER_VALIDATE_INT, Valida si el valor proporcionado puede interpretarse como un número entero válido (int), independientemente de su tipo de dato";
} else {
    echo "No es un int";

}
echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

$bool_string = "true"; // string, es una cadena de texto que contiene un booleano, el formato es true o false
$bool2 = filter_var($bool_string, FILTER_VALIDATE_BOOLEAN); // sanitiza el booleano, lo que hace exactamente es convertir a booleano, por ejemplo, convierte "true" en true y "false" en false

if ($bool2 == true) { // aca validamos si es un bool, si no lo es devuelve false, is_bool valida el tipo de dato
    echo "Es un bool validando con filter_var y FILTER_VALIDATE_BOOLEAN, Valida si el valor proporcionado puede interpretarse como un booleano válido (bool), independientemente de su tipo de dato";
} else {
    echo "No es un bool";

}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

/* $null_string = ""; // string, es una cadena de texto vacia, el formato es ""
$null2 = filter_var($null_string, FILTER_VALIDATE_NULL); // sanitiza el null, lo que hace exactamente es convertir a null, por ejemplo, convierte "" en null y "null" en null
if ($null2 == true) { // aca validamos si es un null, si no lo es devuelve false, is_null valida el tipo de dato
    echo "Es un null validando con filter_var y FILTER_VALIDATE_NULL, Valida si el valor proporcionado puede interpretarse como un null válido (null), independientemente de su tipo de dato";
} else {
    echo "No es un null";

} */

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

/* $array_string = "1,2,3"; // string, es una cadena de texto que contiene un array, el formato es 1,2,3
$array2 = filter_var($array_string, FILTER_VALIDATE_ARRAY); // sanitiza el array, lo que hace exactamente es convertir a array, por ejemplo, convierte "1,2,3" en array(1,2,3) y "1" en array(1)
if ($array2 == true) { // aca validamos si es un array, si no lo es devuelve false, is_array valida el tipo de dato
    echo "Es un array validando con filter_var y FILTER_VALIDATE_ARRAY, Valida si el valor proporcionado puede interpretarse como un array válido (array), independientemente de su tipo de dato";
} else {
    echo "No es un array";

} */

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados


?>