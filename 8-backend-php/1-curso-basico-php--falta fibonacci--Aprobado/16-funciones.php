<?php

/*function get_pokemon($num){
    //$num_aleatorio = rand(1,5);
    $num_aleatorio = $num;

    switch($num_aleatorio){
        case 1:
            return "pikachu";
            break;
        case 2:
            return "bulbasaur";
            break;
        case 3:
            return "charmander";
            break;
        default:
            return "no existe";
            break;

    }
}

echo PHP_EOL;

$pokemon = get_pokemon(2);
echo "el pokemon es: {$pokemon}" . PHP_EOL;
*/

function ranking($num)
{

    if ($num >= 100000) {
        echo "eres un nivel legendario" . PHP_EOL;
    } elseif ($num >= 10000) {
        echo "eres un nivel master" . PHP_EOL;
    } else {
        echo "ponele garras, estas muy cerca" . PHP_EOL;
    }
}

$cont = "si";

while ($cont != 0) {
    $num = (int) readline("ingresa tu puntos: ") . PHP_EOL;
    ranking($num);
    $cont = (int)readline("quieres continuar? (si = 1/no = 0) ") . PHP_EOL;
}
