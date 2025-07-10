<?php 
//helpers.php
require __DIR__ . '/vendor/autoload.php';


 // echo __DIR__ . ' hasta aca el dir ' . '/vendor/autoload.php';// la variable __DIR__ es la ruta absoluta del directorio actualdonde se encuentra el archivo index.php en este caso, si fuera en el archivo format.php seria la ruta absoluta del directorio donde se encuentra el archivo format.php que es src

   use juanmasilmo\Format;

   echo Format::upperCase('hola mundo');