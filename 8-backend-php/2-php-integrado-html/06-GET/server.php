<?php
$nombre = $_GET['nombre'] ?? null;//si no trae nada, le asigna null
$apellido = $_GET['apellido'] ?? null;//si GET no trae apellido, no como valor, sino como variable, le asigna null
$edad = $_GET['edad'] ?? null;

/* echo "Hola $nombre $apellido, tienes $edad años"; */

if ($nombre && $apellido && $edad) {
    echo "Hola $nombre $apellido, tienes $edad años";
} else {
    echo "Faltan datos";
}
?>