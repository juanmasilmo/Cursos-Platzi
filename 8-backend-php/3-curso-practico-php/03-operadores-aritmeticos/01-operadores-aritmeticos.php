<!-- Operadores aritmeticos -->

<?php
$num1 = 10;
$num2 = 2;
$result = 0;

$result = $num1 + $num2; // Suma
var_dump($result); // salida esperada 12

$result = $num1 - $num2; // Resta
var_dump($result); // salida esperada 8

$result = $num1 * $num2; // Multiplicación
var_dump($result); // salida esperada 20

$result = $num1 / $num2; // División
var_dump($result); // salida esperada 5

$result = $num1 % $num2; // Módulo (resto de la división)
var_dump($result); // salida esperada 0

$result = $num1 ** $num2; // Potencia
var_dump($result); // salida esperada 100

$result = $num1++; // Incremento
var_dump($result); // salida esperada 10, pero el valor de $num1 ahora es 11
$result = $num1; // Verificamos el valor de $num1 después del incremento
var_dump($result); // salida esperada 11

$result = $num1--; // Decremento
var_dump($result); // salida esperada 11, pero el valor de $num1 ahora es 10

$result = $num1; // Verificamos el valor de $num1 después del decremento
var_dump($result); // salida esperada 10

$result = ++$num1; // Incremento antes de la operación
var_dump($result); // salida esperada 11

$result = --$num1; // Decremento antes de la operación
var_dump($result); // salida esperada 10

$result = $num1 += 5; // Asignación con suma
var_dump($result); // salida esperada 15, $num1 ahora es 15

$result = $num1 -= 5; // Asignación con resta
var_dump($result); // salida esperada 10, $num1 ahora es 10

$result = $num1 *= 2; // Asignación con multiplicación
var_dump($result); // salida esperada 20, $num1 ahora es 20

$result = $num1 /= 2; // Asignación con división
var_dump($result); // salida esperada 10, $num1 ahora es 10

$result = $num1 %= 3; // Asignación con módulo
var_dump($result); // salida esperada 1, $num1 ahora es 1  

$result = $num1 **= 3; // Asignación con potencia
var_dump($result); // salida esperada 1, $num1 ahora es 1 (1 elevado a cualquier potencia es 1)

$result = $num1 **= 2; // Asignación con potencia
var_dump($result); // salida esperada 1, $num1 ahora es 1 (1 elevado a cualquier potencia es 1)



?>