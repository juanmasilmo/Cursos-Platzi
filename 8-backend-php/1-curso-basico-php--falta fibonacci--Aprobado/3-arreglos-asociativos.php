<?php

/*$persona = [[
    'nombre' => 'Juan',
    'apellido' => 'Perez',
    'edad' => 30
], [
    'nombre' => 'Maria',
    'apellido' => 'Gomez',
    'edad' => 25
], [
    'nombre' => 'Pedro',
    'apellido' => 'Gonzalez',
    'edad' => 40
], [
    'nombre' => 'Luis',
    'apellido' => 'Rodriguez',
    'edad' => 50
]];

print_r($persona[2]);
echo "\n";*/

/*$edades = [
    'Juan' => 30,
    'Maria' => 25,
    'Pedro' => 40,
];

echo"la edad de maria es: {$edades['Maria']}";
echo "\n";*/

$cafes = [
    'cafe1' => [
        'nombre' => 'Cafe con leche',
        'precio' => 2.5
    ],
    'cafe2'=>  [
        'nombre' => 'Cafe solo',
        'precio' => 1.5
    ],
    'cafe3' => [
        'nombre' => 'Cafe cortado',
        'precio' => 2
    ]
];

echo "el tipo de cafe es: {$cafes['cafe2']['nombre']}";
echo "\n";
echo "el precio del cafe 2 es: {$cafes['cafe2']['precio']}";
echo "\n";
print_r($cafes['cafe2']);
echo "\n";