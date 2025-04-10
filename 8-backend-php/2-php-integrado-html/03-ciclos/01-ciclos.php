<?php
$j = 0; // Initialize $j for the while loop
$users = array(
    'Juan',
    'Pedro',
    'Maria',
    'Jose',
    'Ana'
);// Define the array of users
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciclos</title>
</head>

<body>

    <ul>
        <?php for ($i = 0; $i < 5; $i++): ?>
            <li>Elemento <?php echo $i; ?></li>
        <?php endfor; ?>
    </ul>

    <ul>
        <?php while ($j < 5): ?>
            <li> Item <?php echo $j; ?></li>
            <?php $j++; ?>
        <?php endwhile; ?>
    </ul>

    <ul>
        <?php foreach ($users as $user): ?>
            <li> Usuario <?php echo $user; ?></li>
        <?php endforeach; ?>
    </ul>

</body>

</html>