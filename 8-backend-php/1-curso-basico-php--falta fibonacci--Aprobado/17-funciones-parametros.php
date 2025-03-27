<?php
/* function suma($num1 = 0, $num2 = 0){
    $resultado = $num1 + $num2;
    return $resultado;
}

$num1 = (int) readline("ingresa el primer numero: ") . PHP_EOL;
$num2 = (int) readline("ingresa el segundo numero: ") . PHP_EOL;

$resultado = suma($num1, $num2);
echo "el resultado es: {$resultado}" . PHP_EOL;

$array1 = [1,2,3,4,5];
$array2 = [6,7,8,9,10];

$resultado = [...$array1, ...$array2];//esto se llama unpacking array (desempaquetar array) une los dos arrays

print_r($resultado);
 */

/* function suma($num1, $num2)
{
    $resultado = $num1 + $num2;
    return $resultado;
}
$array = [1, 2];

$resultado = suma(...$array);
echo "el resultado es: {$resultado}" . PHP_EOL;
 */
/* print_r($resultado) . PHP_EOL;*/

/* function suma($num1, $num2)
{
    $resultado = $num1 + $num2;
    echo "el resultado es: {$resultado}" . PHP_EOL;
}
$array = [1, 2];

suma(...$array); */

function suma(...$numeros){
    $resultado = 0;
    foreach ($numeros as $numero) {
        $resultado += $numero;
    }
    return $resultado;
}


$resultado = suma(1, 2, 3, 4, 5);
echo "el resultado es: {$resultado}" . PHP_EOL;


