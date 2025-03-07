<?php
$edades = [18, 25, 30, 45, 50, 60, 70, 80, 90, 100];

//count cuenta los elementos de un array
echo count($edades);
echo "\n";

//push agrega un elemento al final del array
array_push($edades, 110);
print_r($edades);
echo "\n";

//is_array verifica si es un array
var_dump(is_array($edades));
echo "\n";

//array_pop elimina el último elemento del array
array_pop($edades);
print_r($edades);

//array explode convierte un string en un array
$nombre = "Juan, Pedro, Pablo, Luis";
$nombres = explode(", ", $nombre);
print_r($nombres);
echo "\n";

//array implode convierte un array en un string
//$nombre = implode(", ", $nombres);
//var_dump($nombre);
//echo "\n";

//array_shift elimina el primer elemento del array
//array_shift($nombres);
//print_r($nombres);
//echo "\n";

//array_unshift agrega un elemento al inicio del array
array_unshift($nombres, "Juan");
print_r($nombres);
echo "\n";

//array_key exist verifica si existe una clave en el array
$arreglo_keys = array_keys($nombres);
print_r($arreglo_keys);
echo "\n";
