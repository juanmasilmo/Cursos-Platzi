<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NO buenas practicas</title>
</head>

<body>
    <h1>tabla del 9 con malas practicas</h1>
    <ul>
        <?php
        for ($i = 0; $i <= 10; $i++) {
            echo "<li>" . " (9 x 1) = " . (9 * ($i + 1)) . "</li>";
        }
        ?>
    </ul>
</body>

</html>