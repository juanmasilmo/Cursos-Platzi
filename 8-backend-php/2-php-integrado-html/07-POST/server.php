<?php
$nombre = $_POST['nombre'] ?? null;//si no trae nada, le asigna null
$apellido = $_POST['apellido'] ?? null;//si GET no trae apellido, no como valor, sino como variable, le asigna null
$edad = $_POST['edad'] ?? null;

/* echo "Hola $nombre $apellido, tienes $edad años"; */

if ($nombre && $apellido && $edad) {
    echo "Hola $nombre $apellido, tienes $edad años";
} else {
    echo "Faltan datos";
}
?>