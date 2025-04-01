<?php

function saludar($nombre, $apellido)
{
    return "Hola {$nombre} {$apellido}";
}

function edad ($nacimiento, $anio_actual)
{
    return ($anio_actual - $nacimiento);
}

$apellido = readline("¿Cuál es tu apellido? ");
$nombre = readline("¿Cuál es tu nombre? ");
$anio_actual = readline("¿Cuál es el año actual? ");
$nacimiento = readline("¿En qué año naciste? ");


echo saludar($nombre, $apellido) . " Tu edad es: " . edad($nacimiento, $anio_actual) . PHP_EOL;

?>