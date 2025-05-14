<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de formularios</title>
</head>
<body>
    
    <h1>Validacion de formularios</h1>
    <form action="server.php" method="post">
        
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre"><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>

        <label for="username">Usuario:</label><br>
        <input type="text" id="username" name="username"><br><br>

        <label for="age">Edad:</label><br>
        <input type="number" id="age" name="age"><br><br>

        <!-- <input type="submit" value="Enviar"> -->
        
        <button name="form" type="submit">Enviar Formulario</button>
    </form>
</body>
</html>