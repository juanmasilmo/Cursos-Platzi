<?php
$nlargo = 0;
$qformas = 0;

$nlargo= readline("Ingrese el largo de la serie de fibonacci: ");
$nlargo = intval($nlargo);

var_dump($nlargo);

if ($nlargo == 0){
    $qformas = 0;
    echo " la cantidad de formas de ir es {$qformas}" . PHP_EOL;
}elseif($nlargo == 1){
    $qformas = 1;
    echo " la cantidad de formas de ir es {$qformas}" . PHP_EOL;
}elseif ($nlargo > 1){
    for ($i = 2 ; $i < $nlargo; $i++) {
   {
      $qformas = ($i-1) + ($i-2);
      echo"voy en el numero {$i}" . PHP_EOL;
      echo " la suma de {$i}-1 + {$i}-2 es:  {$qformas}" . PHP_EOL;
    }
}
}