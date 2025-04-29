<?php
//$_FILES es una variable superglobal que contiene información sobre archivos subidos a través de un formulario HTML.
/* echo "<pre>";
echo "Nombre del Array Asoociativo es el nombre en el form en este caso es image " . PHP_EOL;
var_dump($_FILES); // Muestra la información del archivo subido en un formato legible.
echo "</pre>"; */

$nombre = $_FILES['image']['name']; // Obtiene el nombre del archivo subido.
$tmp_name = $_FILES['image']['tmp_name']; // Obtiene la ruta temporal del archivo subido.
$size = $_FILES['image']['size']; // Obtiene el tamaño del archivo subido.

$dir_save_img = "images/$nombre"; // Directorio donde se guardará la imagen.

move_uploaded_file($tmp_name, $dir_save_img); // el nombre es bastante explicito "move_uploaded_file" Mueve el archivo subido a la ubicación deseada, la ubicacion destino esta en la segunda variable y el origen en la primera variable que se le pasa a la funcion.
echo "<pre>";
echo "Nombre del Archivo: " . $nombre . PHP_EOL;
echo "Ruta Temporal: " . $tmp_name . PHP_EOL;
echo "Tamaño del Archivo: " . $size . PHP_EOL;
echo "Directorio de Guardado: " . $dir_save_img . PHP_EOL;
echo "El archivo se ha guardado correctamente en el servidor." . PHP_EOL;
echo "</pre>";

/* echo "<pre>";
var_dump($_FILES['image']); // Muestra el nombre del archivo subido.
echo "</pre>"; */


?>