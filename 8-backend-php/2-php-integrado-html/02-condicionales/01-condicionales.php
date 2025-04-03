<?php
$condicion = false;
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicionales</title>
</head>

<body>

    <?php
    //esto no se debe de hacer
    if ($condicion) {
        echo "<b> Si es verdadero, ves esto, pero esta mal </b>";
    } else {
        echo "<b>Si es falso, ves esto, pero esta mal</b>";
    }
    ?>

    <?php
    //esto es aceptable
    if ($condicion) { ?>
        <p>Si es verdadero, ves esto y es aceptable</p> <!-- se puede imprimir la etiqueta de manera directa -->
    <?php } else { ?>
        <p>Si es falso, ves esto y es aceptable</p>
    <?php } ?>
    
    <?php //esto si esta bien?>
    <?php if ($condicion) : ?>
        <p>Si es verdadero, ves esto y es correcto</p> <!-- se puede imprimir la etiqueta de manera directa -->
    <?php else : ?>
        <p>Si es falso, ves esto y es correcto</p>
    <?php endif; ?>


</body>

</html>