<?php
$tabla_del_9 = [];
for ($i = 0; $i <= 10; $i++) {
    $resultado = 9 * $i;
    $text = "9 * $i = $resultado";
    array_push($tabla_del_9, $text);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buenas Practicas SI</title>
</head>

<body>
    <h1>Buenas Practicas SI</h1>
    <?php foreach ($tabla_del_9 as $resul): ?>
        <li>
            <?= $resul ?>
        </li>
    <?php endforeach; ?>
</body>

</html>