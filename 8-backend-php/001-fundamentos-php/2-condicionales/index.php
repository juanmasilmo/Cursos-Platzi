<?php
$course = "Curso php profesional desde cero";
$title = "titulo de la pagina desde una variable";
$parrafo = " parrafo desde la variable : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem nam recusandae expedita facere temporibus ab, molestias impedit commodi mollitia, eveniet veniam aliquid repellat, alias saepe corrupti maxime dolorem nisi!";
$precio = 3000;
$date = "24-06-2025";
$mensaje = "El $course tiene un precio de $precio euros y comienza el $date. ¡Inscríbete ahora!";
$mensaje2 = ($precio > 2000) ? "<p>El $course es caro.</p>" : "<p>El $course es asequible.</p>";// Utilizando un operador ternario para determinar si el curso es caro o asequible para evitar mezclar codigo PHP con HTML directamente.

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $course ?></title><!-- se utiliza la variable declarada anteriormente para que sea mas dinamico -->
</head>

<body>
    <h1><?= $title ?></h1>
    <p><?= $parrafo ?></p>
    <p><?= $mensaje ?></p>
    <p>El precio del curso es: <?= $precio ?> euros</p>
    <p>Fecha de inicio del curso: <?= $date ?></p>
    <p>El curso es: <?= $course ?></p>
    </p>
    <?= $mensaje2
    ?>
</body>

</html>