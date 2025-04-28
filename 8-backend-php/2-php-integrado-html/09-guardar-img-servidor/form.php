<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardar las Imagenes en la Base de Datos</title>
</head>
<body>
    <form action="server.php" method="post" enctype="multipart/form-data"><!-- enctype="multipart/form-data" es necesario para enviar archivos a través de un formulario HTML. -->
        <h1>Formulario de Envio de Imagenes</h1>

        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre"><br><br>

        <label for="image">Imagen</label>
        <input type="file" name="image" id="image"><br><br><!-- en el input se pone type file para que sea un archivo-->

        <button type="submit">Enviar Formulario</button>

    </form>
</body>
</html>