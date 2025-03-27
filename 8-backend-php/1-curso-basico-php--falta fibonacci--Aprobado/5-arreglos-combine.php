<?php

$nombre = "Juan, Maria, Pedro";
$edades = [20, 30, 25];

$nombres = explode(", ", $nombre);
$personas = [];

$personas = array_combine($nombres, $edades);

/* for ($i = 0; $i < count($nombres); $i++) {
    $personas[$nombres[$i]] = $edades[$i];
} */

var_dump($personas);
echo "\n";
print_r($personas);
echo "\n";

echo "las keys son:  \n";
print_r(array_keys($personas));
echo "\n";
