<?php
$palabras = array("sol", "luna", "cielo");
$palabras_desordenadas = array();

for ($i=0; $i < count($palabras); $i++) {
    $palabra_desordenada[$i] = str_shuffle($palabras[$i]);
}


print_r($palabras_desordenadas);
echo "
    <form action='02-comprobar.php'>
        <input type='text' name='palabra0' placeholder='Introduce una palabra' />
        <input type='text' name='palabra1' placeholder='Introduce una palabra' />
        <input type='text' name='palabra2' placeholder='Introduce una palabra' />
        <button type='submit'>Enviar</button>
    </form>";

echo "<ul>";
foreach ($palabras_desordenadas as $palabra) {
    echo "<li>$palabra</li>";
}
echo "</ul>";
    ?>