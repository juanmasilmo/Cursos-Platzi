<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metodo POST</title>
</head>

<body>
    <form action="server.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre">

        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido">

        <label for="edad">edad</label>
        <input type="text" name="edad" id="edad" placeholder="Edad">

        <button type="submit">Enviar</button>
    </form>
</body>

</html>