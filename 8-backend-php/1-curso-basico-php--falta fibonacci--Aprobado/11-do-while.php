<?php
/* $i = 0;
do{
    echo "se ejecuta {$i} vez la iteracion \n";
    $i++;
} while(
    $i <= 10
);
?> */

$usernames = ["juancho", "pedro", "jose", "maria", "laura"];
do {
    $username = readline("Ingrese un nuevo nombre de usuario: ");
} while (in_array($username, $usernames));
array_push($usernames, $username);
echo "Usuario registrado con exito \n";
print_r($usernames);
?>