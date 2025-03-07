<?php

$tipos_cafes = [
    'Cafe Expresso' => 10,
    'Cafe Americano' => 20,
    'Cafe Irlandes' => 30,
    'Cafe con Chele' => 40,
    'Cafe Lagrima' => 50,
    'Cafe con Crema' => 60,
];
foreach ($tipos_cafes as $cafe => $value) {
    echo "El precio del {$cafe} es: {$value}". PHP_EOL;//PHP_EOL es un salto de linea sin importar el sistema operativo
}