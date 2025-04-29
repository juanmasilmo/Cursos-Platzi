<?php
$usuarios = array(
    array("nombre" => "Juan", "edad" => 25),
    array("nombre" => "Maria", "edad" => 30),
    array("nombre" => "Pedro", "edad" => 35)
);
$user = json_encode($usuarios);
// Convertir el array PHP a JSON
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>Ejemplo de PHP a JavaScript</h1>
    <script>
        let usuarios = JSON.parse('<?= json_encode($usuarios) ?>');
        // Convertir el JSON a un array de JavaScript
        let prueba = "prueba de algo"
    </script>

    <script src="index.js"></script>

</body>

</html>