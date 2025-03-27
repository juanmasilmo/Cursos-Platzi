<?php

$escuela = [[
    "nombre" => "juancho",
    "direccion" => "calle 123",
    "telefono" => "123456",
    "edad" => "40",
    "comidas" => [
        "desayuno" => "cereal",
        "almuerzo" => "arroz",
        "cena" => "pasta"
    ],
],
[
    "nombre" => "maria",
    "direccion" => "calle 456",
    "telefono" => "654321",
    "edad" => "35",
    "comidas" => [
        "desayuno" => "pan",
        "almuerzo" => "pescado",
        "cena" => "ensalada"
    ],
],
[
    "nombre" => "josefina",
    "direccion" => "calle 789",
    "telefono" => "987654",
    "edad" => "42",
    "comidas" => [
        "desayuno" => "huevos",
        "almuerzo" => "pollo",
        "cena" => "sopa"
    ],
],
[
    "nombre" => "luis",
    "direccion" => "calle 101",
    "telefono" => "101010",
    "edad" => "36",
    "comidas" => [
        "desayuno" => "hotcakes",
        "almuerzo" => "carne",
        "cena" => "tacos"
    ],
]];

echo"las comidas de juancho son: " . $escuela[0]['comidas']['desayuno'] . ", " . $escuela[0]['comidas']['almuerzo'] . ", " . $escuela[0]['comidas']['cena'] . "\n";
print_r($escuela[2]);