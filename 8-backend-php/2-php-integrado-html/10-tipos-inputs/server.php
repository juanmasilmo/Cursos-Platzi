<?php   
echo "<pre>";
/* var_dump($_POST["personas"]) . PHP_EOL; */
//var_dump($_FILES) . PHP_EOL;
//var_dump($_POST["persona"]) . PHP_EOL;

/* if (isset($_POST["name1"])) {
    echo "El checkbox name1 está seleccionado" . PHP_EOL;
    var_dump($_POST["name1"]) . PHP_EOL;
} else {
    echo "El checkbox name1 no está seleccionado" . PHP_EOL;
}
if (isset($_POST["name2"])) {
    echo "El checkbox name2 está seleccionado" . PHP_EOL;
    var_dump($_POST["name2"]) . PHP_EOL;
} else {
    echo "El checkbox name2 no está seleccionado" . PHP_EOL;
}
if (isset($_POST["name3"])) {
    echo "El checkbox name3 está seleccionado" . PHP_EOL;
    var_dump($_POST["name3"]) . PHP_EOL;
} else {
    echo "El checkbox name3 no está seleccionado" . PHP_EOL;
} */

var_dump($_POST["pais"]) . PHP_EOL;
if (isset($_POST["pais"])) {
    echo "El radio button " . $_POST["pais"] . " está seleccionado" . PHP_EOL;
} else {
    echo "Ningún radio button está seleccionado" . PHP_EOL;
}

echo "<pre>";
?>