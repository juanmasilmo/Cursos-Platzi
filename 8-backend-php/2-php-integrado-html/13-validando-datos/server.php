<?php
//VALIDAMOS LOS DATOS COMO TAL SI VIENE INT VALIDA COMO INT, SI VIENE FLOAT VALIDA COMO FLOAT, SI VIENE BOOL VALIDA COMO BOOL, SI VIENE NULL VALIDA COMO NULL, SI VIENE STRING VALIDA COMO STRING, SI VIENE ARRAY VALIDA COMO ARRAY, SI VIENE OBJECT VALIDA COMO OBJECT

$float = 1234.20; // float, es un numero decimal
$int = 1234; // int, es un numero entero
$bool = "hola"; // bool, es un booleano, puede ser true o false
$null = null; // null, es un valor nulo, no tiene valor
$string = "Hola"; // string, es una cadena de texto
$array = array(1, 2, 3); // array, es un arreglo, puede contener varios valores
$object = new stdClass(); // object, es un objeto, puede contener propiedades y metodos

$object->nombre = "Juan"; // le asignamos un valor a la propiedad nombre del objeto
$object->edad = 40; // le asignamos un valor a la propiedad edad del objeto
$object->email = "juanma@gmail.com"; // le asignamos un valor a la propiedad email del objeto
$object->telefono = "123456789"; // le asignamos un valor a la propiedad telefono del objeto
$object->peso = 90.45; // le asignamos un valor a la propiedad peso del objeto, el valor es un float
$object->hobbies = array("futbol", "natacion", "correr"); // le asignamos un valor a la propiedad hobbies del objeto, el valor es un array
$object->direccion = array("calle" => "Av. Siempre Viva", "numero" => 742); // le asignamos un valor a la propiedad direccion del objeto, el valor es un array asociativo


if (is_object($object)) { // aca validamos si es un object, si no lo es devuelve false, is_object valida el tipo de dato
    echo "Es un object";
    echo "<br>"; // salto de linea para separar los resultados
    $is_object = true; // si es un object, entonces la variable is_object se vuelve true
    if (is_string($object->nombre)) { // aca validamos si es un string, si no lo es devuelve false, is_string valida el tipo de dato
        echo "Es un string";
        $is_string = true; // si es un string, entonces la variable is_string se vuelve true
    } else {
        echo "No es un string";
        $is_string = false; // si no es un string, entonces la variable is_string se vuelve false
    }
} else {
    echo "No es un object";
    $is_object = false; // si no es un object, entonces la variable is_object se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados



if (is_float($float)) { // aca validamos si es un float, si no lo es devuelve false, is_float valida el tipo de dato
    echo "Es un float";
    $is_float = true; // si es un float, entonces la variable is_float se vuelve true
} else {
    echo "No es un float";
    $is_float = false; // si no es un float, entonces la variable is_float se vuelve false
}
echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_int($int)) { // aca validamos si es un int, si no lo es devuelve false, is_int valida el tipo de dato
    echo "Es un int";
    $is_int = true; // si es un int, entonces la variable is_int se vuelve true
} else {
    echo "No es un int";
    $is_int = false; // si no es un int, entonces la variable is_int se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_bool($bool)) { // aca validamos si es un bool, si no lo es devuelve false, is_bool valida el tipo de dato
    echo "Es un bool";
    $is_bool = true; // si es un bool, entonces la variable is_bool se vuelve true
} else {
    echo "No es un bool";
    $is_bool = false; // si no es un bool, entonces la variable is_bool se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_null($null)) { // aca validamos si es un null, si no lo es devuelve false, is_null valida el tipo de dato
    echo "Es un null";
    $is_null = true; // si es un null, entonces la variable is_null se vuelve true
} else {
    echo "No es un null";
    $is_null = false; // si no es un null, entonces la variable is_null se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_string($string)) { // aca validamos si es un string, si no lo es devuelve false, is_string valida el tipo de dato
    echo "Es un string";
    $is_string = true; // si es un string, entonces la variable is_string se vuelve true
} else {
    echo "No es un string";
    $is_string = false; // si no es un string, entonces la variable is_string se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_array($array)) { // aca validamos si es un array, si no lo es devuelve false, is_array valida el tipo de dato
    echo "Es un array";
    $is_array = true; // si es un array, entonces la variable is_array se vuelve true
} else {
    echo "No es un array";
    $is_array = false; // si no es un array, entonces la variable is_array se vuelve false
}

echo "<br>"; // salto de linea para separar los resultados
echo "<br>"; // salto de linea para separar los resultados

if (is_object($object)) { // aca validamos si es un object, si no lo es devuelve false, is_object valida el tipo de dato
    echo "Es un object";
    $is_object = true; // si es un object, entonces la variable is_object se vuelve true
} else {
    echo "No es un object";
    $is_object = false; // si no es un object, entonces la variable is_object se vuelve false
}

echo "<pre>";

var_dump($is_float);
var_dump($is_int);
var_dump($is_bool);
var_dump($is_null);
var_dump($is_string);
var_dump($is_array);

echo "</pre>";
?>