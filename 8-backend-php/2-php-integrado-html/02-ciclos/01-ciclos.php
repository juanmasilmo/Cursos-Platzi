<?php 
$div = "<div style ='background-color:blue'></div>";
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
        <?php for( $i = 0; $i < 5 ; $i++): ?>
            <?php $div ?>
            <li>Elemento <?php echo $i; ?></li>
        <?php endfor; ?>
    </ul>



</body>
</html>