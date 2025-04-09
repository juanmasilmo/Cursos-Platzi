<?php
    $nombre = "Juan";
    $apellido = "Pérez";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impresion de html desde php</title>
</head>

<body>
    <?php
    echo "<b>prueba de impresion de etiquetas con php</b>"
    ?>

    <?= //para imprimir html desde php
    "<h1>Hola mundo</h1>",
    "<b>probando negritas</b>"
    ?>
    <h2>Hola <?= $nombre ?> <?= $apellido ?></h2>
</body>

</html>