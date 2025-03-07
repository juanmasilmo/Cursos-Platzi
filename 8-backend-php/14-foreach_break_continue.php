<?php
$tipos_cafes = [
    'Cafe Expresso' => 10,
    'Cafe Americano' => 20,
    'Cafe Irlandes' => 30,
    'Cafe con Chele' => 40,
    'Cafe Lagrima' => 50,
    'Cafe con Crema' => 60,
];

/* foreach ($tipos_cafes as $cafe => $value) {
   if($cafe <> 'Cafe Lagrima'){
       continue;
   } else {
       echo "El precio del {$cafe} es: {$value}". PHP_EOL;
   }
    
} */

foreach ($tipos_cafes as $cafe => $value) {

    echo "encontre el cafe {$cafe}" . PHP_EOL;

    if ($cafe == 'Cafe Lagrima') {
        break;
    } else {
        echo "aun no se econtro el cafe" . PHP_EOL;
    }
}
