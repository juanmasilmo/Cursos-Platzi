<!-- Dibuja un árbol de Navidad usando solo asteriscos -->

<?php
$respuesta = true; // Variable de control para el bucle
// Dibuja un árbol de Navidad usando solo asteriscos
while ($respuesta){
// Definir la altura del árbol
$altura = readline("Ingrese la altura del árbol de Navidad: ");
$altura = (int)$altura; // Convertir a entero
// Dibuja el árbol de Navidad
for ($i = 0; $i < $altura; $i++) {
/*     echo "El valo de i es: {$i}" . PHP_EOL; */
    // Imprime espacios en blanco para centrar el árbol
    for ($j = $altura - $i; $j > 1; $j--) {
        echo " ";
   /*      echo "El valo de i es: {$i}" . PHP_EOL;
        echo "El valo de j es: {$j}" . PHP_EOL; */
    }
    // Imprime los asteriscos para formar la parte superior del árbol
    for ($k = 0; $k <= $i; $k++) {
        echo "* ";
        /* echo "El valo de i es: {$i}" . PHP_EOL;
        echo "El valo de j es: {$j}" . PHP_EOL;
        echo "El valo de k es: {$k}" . PHP_EOL; */
    }
    // Salto de línea después de cada fila
    echo PHP_EOL;
}
$respuesta = readline ("Desea continuar? S/N: ");
$respuesta = (string)$respuesta; // Convertir a string
if ($respuesta == "S" || $respuesta == "s") {
    $respuesta = true; // Continuar el bucle
} elseif ($respuesta == "N" || $respuesta == "n") {
    $respuesta = false; // Salir del bucle
} else {
    echo "Opción no válida. Por favor, ingrese S o N." . PHP_EOL;
    echo PHP_EOL; // Salto de línea en PHP
}
}
?>