<?php
$precios_cafes = [10, 15, 50, 90, 15, 2, 1, 70];

//la funcion usort Ordena un array según sus valores usando una función de comparación definida por el usuario 
/* usort($precios_cafes, function ($a, $b) {
    return $a <=> $b;
});

var_dump($precios_cafes); */


function ordenar($a, $b)
{
    return $a <=> $b;
};

usort($precios_cafes, "ordenar");// en php el nombre de la funcion se pasa como cadena(string), al menos en este ejemplo

var_dump($precios_cafes);
