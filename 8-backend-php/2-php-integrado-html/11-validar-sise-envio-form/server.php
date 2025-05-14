<?php
// server.php
// Validar si el formulario fue enviado
/* if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    // Validar los datos
    if (empty($nombre)) {
        echo "El nombre es obligatorio.<br>";
    } else {
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
    }

    if (empty($email)) {
        echo "El email es obligatorio.<br>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Formato de email inválido.<br>";
    } else {
        echo "Email: " . htmlspecialchars($email) . "<br>";
    }
} else {
    echo "No se ha enviado el formulario.";
} */


//isset() y empty() para validar si el formulario fue enviado
// isset() verifica si la variable está definida y no es null, tambien valida si el input tiene un valor
// empty() verifica si la variable está vacía (0, "", null, false, array())
// isset() y empty() son funciones de PHP que se utilizan para verificar si una variable está definida y no es null, o si una variable está vacía, respectivamente.

/* if (isset($_POST) && !empty($_POST)) {

    echo "El formulario se ha enviado correctamente" . "<br>";
    var_dump($_POST['nombre']); // Muestra los datos enviados por el formulario
    var_dump($_POST['email']);
} else {
    echo "No se ha enviado el formulario.";
} */
if(isset($_POST["form"])){
    echo "El formulario se ha enviado correctamente" . "<br>";
}
var_dump($_POST["form"]); // Muestra los datos enviados por el formulario

/* if (isset($_POST["form"]) && !empty($_POST["form"])) {
    // Obtener los datos del formulario
    echo "El formulario completo se ha enviado correctamente" . "<br>";
}else{
    echo "No se ha enviado el formulario, faltaron datos.";
} */
?>