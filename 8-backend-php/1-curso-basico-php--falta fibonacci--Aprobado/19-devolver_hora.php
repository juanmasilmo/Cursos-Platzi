<?php

function la_hora()
{
    return date("h:i A");
}

echo "Hola, decime la hora" . PHP_EOL;
echo "of course: " . la_hora() . PHP_EOL;
