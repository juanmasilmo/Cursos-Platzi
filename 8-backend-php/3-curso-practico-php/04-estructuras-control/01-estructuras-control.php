<!-- Estructuras de control -->

<?php
$opcion = 1; // Inicializar la opción
$value = 10;

$array = [1, 2, 3, 4, 5]; // Array de ejemplo
while ($opcion > 0 && $opcion < 6) {
// Switch
echo "======= Ahora el Switch =======" . PHP_EOL; // Salto de línea en PHP
// Salto de línea en PHP
$opcion = readline("Elige una opción (1 para el if, 2 para el dowhile, 3 para el while, 4para el for y 5 para el foreach): ");
$opcion = (int)$opcion; // Convertir a entero
switch($opcion){
case 1:
    echo "Has elegido la opción 1" . PHP_EOL;

        echo "======= Ahora el If =======" . PHP_EOL; // Salto de línea en PHP

        if ($value > 0) {
            echo "El valor es positivo {$value}" . PHP_EOL;
        } elseif ($value < 0) {
            echo "El valor es negativo {$value}" . PHP_EOL;
        } else {
            echo "El valor es cero {$value}" . PHP_EOL;
        }
        echo PHP_EOL; // Salto de línea en PHP
        break;
case 2:
    echo "Has elegido la opción 2" . PHP_EOL;

        echo "======= Ahora el Do While =======" . PHP_EOL; // Salto de línea en PHP

        echo PHP_EOL; // Salto de línea en PHP

        do {
            if ($value === 20){
                echo "El valor es igual a: {$value}" . PHP_EOL;
                break; // Salir del bucle si el valor es 20
            }else{
                $value ++;
                echo "El valor es {$value}" . PHP_EOL;
            }
            
        } while ($value <= 20);

        echo PHP_EOL; // Salto de línea en PHP
        break;
case 3:
    echo "Has elegido la opción 3" . PHP_EOL;

        echo "======= Ahora el While =======" . PHP_EOL; // Salto de línea en PHP

        echo PHP_EOL; // Salto de línea en PHP

        while ($value != 10) {
            $value--;
            echo "El valor es {$value}" . PHP_EOL;
        }

        echo PHP_EOL; // Salto de línea en PHP
        break;
case 4:
    echo "Has elegido la opción 4" . PHP_EOL;

        echo "======= Ahora el For =======" . PHP_EOL; // Salto de línea en PHP

        echo PHP_EOL; // Salto de línea en PHP

        for ($i = 0; $i <= $value; $i++, $value--) {
            echo "El valor de I es: {$i}" . PHP_EOL;
            echo "El valor de Value es: {$value}" . PHP_EOL;
        }
        echo PHP_EOL; // Salto de línea en PHP  
        break;
case 5:
    echo "Has elegido la opción 5" . PHP_EOL;

        echo "======= Ahora el Foreach =======" . PHP_EOL; // Salto de línea en PHP

        echo PHP_EOL; // Salto de línea en PHP

        foreach ($array as $key => $value) {
            echo "El valor de KEY es: {$key}, Key seria el indice" . PHP_EOL;
            echo "El valor de VALUE es: {$value}, Value seria el valor almacenado en cada espacio del array" . PHP_EOL;
            echo "El valor de la clave {$key} es: {$value}" . PHP_EOL;
        }
        echo PHP_EOL; // Salto de línea en PHP
        break;
default:
    echo "Opción no válida" . PHP_EOL;
    break;
}
}
?>