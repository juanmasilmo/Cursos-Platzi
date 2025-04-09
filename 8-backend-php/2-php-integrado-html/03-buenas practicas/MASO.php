<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buenas practicas SI</title>
</head>
<body>
    <h1>
        Tabla del 9 con buenas practicas, no son las mejores pero son buenas
    </h1>
<ul>
        <?php for ($x = 1; $x <= 10; $x++): ?>
            <li> 9 x <?= $x ?> = <?= 9 * $x ?> </li>
        <?php endfor; ?>
    </ul>
</body>
</html>