<?php
$tabla_del_9 = [];
for ($i = 1; $i <= 10; $i++) {
    array_push($tabla_del_9[$i], 9 * $i);
}
echo "<pre>";
var_dump($tabla_del_9);
echo "</pre>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buenas practicas</title>
</head>

<body>

    <h1> tabla del 9 con mas o menos benas practicas</h1>

    <?php for ($x = 1; $x <= 10; $x++): ?>
        <li> 9 x <?= $x ?> = <?= 9 * $x ?> </li>
    <?php endfor; ?>



    <h1> tabla del 9 con mas o menos benas practicas</h1>

    <?php for ($x = 1; $x <= 10; $x++): ?>
        <li> 9 x <?= $x ?> = <?= 9 * $x ?> </li>
    <?php endfor; ?>


    <h1>tabla del 9 con no muy corregido Malas practicas</h1>
    <ul>
        <?php
        for ($i = 0; $i <= 10; $i++) {
            echo "<li>" . " (9 x 1) = " . (9 * ($i + 1)) . "</li>";
        }
        ?>
    </ul>


</body>

</html>