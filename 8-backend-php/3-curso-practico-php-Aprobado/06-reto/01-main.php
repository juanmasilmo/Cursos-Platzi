<?php
$palabras = array("sol", "luna", "cielo");

$form = "<form action='02-comprobar.php'>";

for ($i = 0; $i < count($palabras); $i++) {
    $form .= "la palabra " . str_shuffle($palabras[$i]) . " " . // .= concatena lo que tiene el form con lo que le pasamos
    "<input type='text' name='palabra$i' placeholder='Introduce una palabra' />";
    $form .= "<br>"; // Ahora se concatena correctamente el salto de línea
}

$button = "<button type='submit'>Enviar</button>";
$form_cierre = "</form>";

echo $form . $button . $form_cierre;
?>