<?php

    $Qdonated = readline("Cuanta guita te donaron? ");

    if ($Qdonated > 1000) {
        echo "Gracias por tu donacion de $Qdonated, sos un gran colaborador";
    } elseif ($Qdonated > 500) {
        echo "Gracias por tu donacion de $Qdonated, sos un colaborador";
    } elseif ($Qdonated > 100) {
        echo "Gracias por tu donacion de $Qdonated, sos un colaborador";
    } else {
        echo "Gracias por nada";
    }
    echo "\n";