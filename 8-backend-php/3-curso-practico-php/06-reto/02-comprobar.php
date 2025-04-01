<?php

print_r($_REQUEST); // Muestra el contenido del array $_POST
echo "<br>";
$palabras = array("sol", "luna", "cielo");
echo "<br>";

for ($i=0; $i < count($palabras); $i++) {
    if ($_REQUEST['palabra'. $i] == $palabras[$i]) {
        echo 'La palabra '. $i ." es correcta: " . $palabras[$i] . "<br>";
    } else {
        echo 'La palabra '. $i ." es incorrecta, la palabra es: " . $palabras[$i] . "<br>";
    }
}


/* if ($_POST['palabra0'] == $palabras[0]) {
    echo "La palabra 0 es correcta: " . $palabras[0] . "<br>";
} else {
    echo "La palabra 0 es incorrecta<br>";
}

if ($_POST['palabra1'] == $palabras[1]) {
    echo "La palabra 1 es correcta: " . $palabras[1] . "<br>";
} else {
    echo "La palabra 1 es incorrecta<br>";
}

if ($_POST['palabra2'] == $palabras[2]) {
    echo "La palabra 2 es correcta: " . $palabras[2] . "<br>";
} else {
    echo "La palabra 2 es incorrecta<br>";
} */
?>