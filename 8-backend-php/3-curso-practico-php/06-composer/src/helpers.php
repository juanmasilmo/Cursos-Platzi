<?php 
//helpers.php
require __DIR__ . '/vendor/autoload.php';

 // echo __DIR__ . ' hasta aca el dir ' . '/vendor/autoload.php';// la variable __DIR__ es la ruta absoluta del directorio actualdonde se encuentra el archivo index.php en este caso, si fuera en el archivo format.php seria la ruta absoluta del directorio donde se encuentra el archivo format.php que es src
function upper($value) {
    return \Juanmasilmo\Format::upperCase($value);
    // La función upper recibe un valor y lo convierte a mayúsculas utilizando el método upperCase de la clase Format del namespace Juanmasilmo.
    // El resultado se devuelve al lugar donde se llamó la función.
}
?>