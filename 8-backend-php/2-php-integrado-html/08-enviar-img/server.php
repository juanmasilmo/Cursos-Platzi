<?php
//$_FILES es una variable superglobal que contiene información sobre archivos subidos a través de un formulario HTML.
echo "<pre>";
echo "Nombre del Array Asoociativo es el nombre en el form en este caso es image " . PHP_EOL;
var_dump($_FILES); // Muestra la información del archivo subido en un formato legible.
echo "</pre>";

$nombre = $_FILES['image']['name']; // Obtiene el nombre del archivo subido.
$tmp_name = $_FILES['image']['tmp_name']; // Obtiene la ruta temporal del archivo subido.
$size = $_FILES['image']['size']; // Obtiene el tamaño del archivo subido.

echo "<pre>";
var_dump($size); // Muestra el nombre del archivo subido.
echo "</pre>";

echo "<pre>";
var_dump($_FILES['image']); // Muestra el nombre del archivo subido.
echo "</pre>";


?>