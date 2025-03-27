<?php

/*  
$i = 0;
   for ($i = 0; $i <= 10; $i++) {
        echo "Es la {$i} iteracion \n";
    } */

/* $i = 10;

    for ($i = 10; $i >= 0; $i--) {
        echo "Es la {$i} iteracion \n";
    } */

$i = 0;
$j = 0;

for ($i = 0, $j = 0; $i <= 10; $i++, $j+=2) {//antes del punto y coma se pueden inicializar las variables, tantas como se quiera
    echo "El valor de i es: {$i} en esta iteracion ";
    echo "El valor de j es: {$j} en esta iteracion\n";
}
