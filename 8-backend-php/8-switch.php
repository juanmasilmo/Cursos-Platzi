<?php

$opcion = 3;

switch ($opcion) {
    case 1:
        echo "Opción 1";
        break;
    case 2:
        echo "Opción 2";
        break;
    case 3: //funciona porque en el case 3 no hay break
    case 4:
        echo "Opción 3 o 4";
        break;
    default:
        echo "Opción no válida";
        break;
};

echo"\n";