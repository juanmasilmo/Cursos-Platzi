<?php
/* echo "<pre>";

echo var_dump($_POST); // Muestra los datos enviados por el formulario
echo "<br>";

echo "</pre>"; */

$name = $_POST['nombre'];
$email = $_POST['email'];
$username = $_POST['username'];
$age = $_POST['age'];

$sanitized_name = htmlentities($name); // Sanitiza el nombre, lo que hace exactamente es convertir caracteres especiales en entidades HTML, por ejemplo, convierte < en &lt; y > en &gt;, lo que evita que se interpreten como etiquetas HTML.
echo $sanitized_name . "<br>";
trim($sanitized_name); // Elimina espacios en blanco al inicio y al final
echo $sanitized_name . "<br>";
$sanitized_name = preg_replace('/[^a-zA-Z0-9_\s]/', '', $sanitized_name); // Elimina caracteres no alfanuméricos
echo $sanitized_name . "<br>";
$sanitized_name = substr($sanitized_name, 0, length: 50); // Limita caracteres
echo $sanitized_name . "<br>" . "<br>";

$sanitized_email = filter_var($email, FILTER_SANITIZE_EMAIL);//sanitiza el email
/* filter_var():
Es una función de PHP que filtra y valida datos.
Toma dos argumentos principales:
El valor a filtrar ($email en este caso).
El tipo de filtro a aplicar (FILTER_SANITIZE_EMAIL).
FILTER_SANITIZE_EMAIL:
Este filtro elimina o corrige caracteres no válidos en una dirección de correo electrónico.
Permite solo los caracteres válidos en un email, como:
Letras (a-z, A-Z).
Números (0-9).
Caracteres especiales permitidos en emails: @, ., _, -.
Cualquier carácter que no sea válido en una dirección de correo electrónico será eliminado.
 */

$sanitized_username = preg_replace('/[^a-zA-Z0-9_]/', '', $username); // Elimina caracteres no alfanuméricos
echo $sanitized_username . "<br>";
$sanitized_username = trim($sanitized_username); // Elimina espacios en blanco al inicio y al final
echo $sanitized_username . "<br>";
$sanitized_username = addslashes($sanitized_username); // Escapa caracteres especiales en una cadena para usarla en una consulta SQL
echo $sanitized_username . "<br>";
$sanitized_username = preg_replace('/\s+/', '', $sanitized_username); // Elimina espacios en blanco adicionales
echo $sanitized_username . "<br>";
$sanitized_username = substr($sanitized_username, 0, 20); // Limita a 20 caracteres
echo $sanitized_username . "<br>";
$sanitized_username = htmlentities($username); // Sanitiza el nombre de usuario, lo que hace exactamente es convertir caracteres especiales en entidades HTML, por ejemplo, convierte < en &lt; y > en &gt;, lo que evita que se interpreten como etiquetas HTML.
echo $sanitized_username . "<br>";
/* $sanitized_username = preg_replace("/\d/", "", $sanitized_username); // Elimina números
echo $sanitized_username . "<br>"; */
/* $sanitized_username = preg_replace("/\D/", "", $sanitized_username); // Elimina caracteres no numéricos
echo $sanitized_username . "<br>"; */



$sanitized_age = filter_var($age, FILTER_SANITIZE_NUMBER_INT);// Sanitiza la edad, lo que hace exactamente es convertir a número entero, por ejemplo, convierte 12.5 en 12 y elimina caracteres no numéricos.

$sanitized_age = substr($sanitized_age, 0, 3); // Limita a 3 caracteres

echo "<h1>Datos Sanitizados</h1>";
echo "<p>Nombre: " . $sanitized_name . "</p>";
echo "<p>Email: " . $sanitized_email . "</p>";
echo "<p>Usuario: " . $sanitized_username . "</p>";
echo "<p>Edad: " . $sanitized_age . "</p>";
echo "<br>";

echo "<h1>Datos Originales</h1>";
echo "<p>Nombre: " . $name . "</p>";
echo "<p>Email: " . $email . "</p>";
echo "<p>Usuario: " . $username . "</p>";
echo "<p>Edad: " . $age . "</p>";
echo "<br>";
