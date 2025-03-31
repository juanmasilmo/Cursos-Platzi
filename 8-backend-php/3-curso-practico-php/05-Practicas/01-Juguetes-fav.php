<!-- Juguetes  -->
<?php
/*En una escuela están almacenando los juguetes favoritos de los estudiantes de acuerdo a su edad en un lugar específico de la bodega de esta forma:

Quienes sean menores de 5 años tendrán sus espacios en la parte inferior de la bodega.
Quienes tengan entre 5 y 7 años tendrán sus espacios en la parte media de la bodega.
Quienes tengan más de 7 años tendrán sus espacios en la parte alta de la bodega.
Quienes no tengan registro de su edad aún tendrán un espacio de almacenamiento en la bodega de al lado.
Según una lista que contiene las edades de cada estudiante debes validar su edad y mostrar a través de un mensaje en dónde tendrán que almacenar sus juguetes.*/

$edad = 0; // Inicializar la edad
$continuar = true; // Variable de control para el bucle

while ($continuar) {
    if ($edad >= 0) {
        $edad = readline("Ingrese la edad del estudiante: ");
        $edad = (int) $edad; // Convertir a entero
        echo PHP_EOL; // Salto de línea en PHP

        switch (true) {

            case ($edad < 5):
                echo "El estudiante tiene {$edad} años, su espacio de almacenamiento es en la parte inferior de la bodega." . PHP_EOL;
                break;
            case ($edad >= 5 && $edad <= 7):
                echo "El estudiante tiene {$edad} años, su espacio de almacenamiento es en la parte media de la bodega." . PHP_EOL;
                break;
            case ($edad > 7):
                echo "El estudiante tiene {$edad} años, su espacio de almacenamiento es en la parte alta de la bodega." . PHP_EOL;
                break;
            case ($edad === 0):
                echo "El estudiante tiene {$edad} años, su espacio de almacenamiento es en la bodega de al lado" . PHP_EOL;
                break;
            default:
                echo "El estudiante no tiene edad registrada, su espacio de almacenamiento es en la bodega de al lado." . PHP_EOL;
                break;
        }
    } else {
        echo "La edad no puede ser negativa." . PHP_EOL;
    }
    $respuesta2 = true; // Variable de control para el bucle
    while ($respuesta2) {
        echo PHP_EOL; // Salto de línea en PHP
        $respuesta = readline("Desea continuar? S/N: ");
        echo PHP_EOL; // Salto de línea en PHP
        if ($respuesta == "S" || $respuesta == "s") {
            $continuar = true; // Continuar el bucle
            $respuesta2 = false; // Salir del bucle
        } elseif ($respuesta == "N" || $respuesta == "n") {
            $continuar = false; // Salir del bucle
            $respuesta2 = false; // Salir del bucle
        } else {
            echo "Opción no válida. Por favor, ingrese S o N." . PHP_EOL;
            echo PHP_EOL; // Salto de línea en PHP
        }
    }
    $edad = readline("Ingrese la edad del estudiante: ");
    $edad = (int) $edad; // Convertir a entero
    echo PHP_EOL; // Salto de línea en PHP
}
echo "Edad es {$edad}" . PHP_EOL;
?>