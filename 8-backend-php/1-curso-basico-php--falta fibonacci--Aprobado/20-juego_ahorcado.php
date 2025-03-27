<?php

function clear()
{
    if (PHP_OS == "WINNT") {
        system("cls");
    } else {
        system("clear");
    }
}

$possible_words = ["auto", "ferrocarril", "odontologo", "lago", "celular", "otorrinolaringologo", "camuki", "aprender", "mejorar", "crecer"];

define("MAX_ATTEMPS", 6);

echo ("¡JUEGO DEL AHORACADO!" . PHP_EOL);
echo ("=======================" . PHP_EOL);

//inicializamos el juego y variables
$choosen_word = $possible_words[rand(0, 9)];
$choosen_word = strtolower($choosen_word);
$word_length = strlen($choosen_word);
$discovered_letter = str_pad("", $word_length, "_");
$attemps = 0;

do {

    echo "la palabra es de {$word_length} letras!" . PHP_EOL;
    echo "{$discovered_letter} " . PHP_EOL;

    //interactuamos con el player
    $player_letter = readline("Escribi una letra: " . PHP_EOL);
    $player_letter = strtolower($player_letter);


    //str_contains verifica si una letra ($player_letter) esta dentro de una palabra($choosen_word)
    if (str_contains($choosen_word, $player_letter)) {

        //verifica las coincidencias
        $offset = 0;



        /*         Parámetros de strpos
                haystack
                El string en donde buscar.

                needle
                Si la needle no es una cadena, es convertida a integer y se interpreta como el valor ordinal de un carácter.

                offset
                Si se específica, la búsqueda iniciará en éste número de caracteres contados desde el inicio del string. Si offset es negativo, desde el final del string. */

        //letter_position se crea directamente en el while y se le asigna el resultado de strpos, strpos Encuentra la posición de la primera ocurrencia de un substring en un string. strpos encuentra la posición numérica de la primera ocurrencia del needle (aguja) en el string haystack (pajar).

        //se va a ejecutar el  while mientras el resultado de strpos sea distinto de false

        while (($letter_position = strpos($choosen_word, $player_letter, $offset)) !== false) {
            $discovered_letter[$letter_position] = $player_letter; // aca lo que hacemos es que en discovered_letter en la posicion letter_position, que es donde se guardo el resultado de strpos, ponemos la letra del user player_letter que fua la que puso cuando se la pedimos
            $offset = $letter_position + 1; // Actualiza el valor de $offset para la siguiente iteración del bucle. Al sumarle 1 a $letter_position, la próxima búsqueda de strpos() comenzará desde la siguiente posición, evitando encontrar la misma letra repetidamente.
            echo "Letra encontrada!!! " . $player_letter . PHP_EOL;
            clear();
        }
    } else {
        $attemps++;
        echo "No hay coincidencias! :( , quedan: " . (MAX_ATTEMPS - $attemps) . " intentos" . PHP_EOL;
        sleep(2);
        clear();
    }
} while ($attemps < MAX_ATTEMPS && $discovered_letter != $choosen_word);
sleep(1);
clear();

