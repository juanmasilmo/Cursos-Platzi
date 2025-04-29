<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipos Inputs</title>
</head>

<body>

    <form action="server.php" method="post" enctype="multipart/form-data">
        <!-- <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required><br><br>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br><br>

        <label for="password">Contraseña:</label>
        <input type="password" name="password" id="password" required><br><br>

        <label for="telefono">Teléfono:</label>
        <input type="tel" name="telefono" id="telefono"><br><br>

        <label for="fecha">Fecha de nacimiento:</label>
        <input type="date" name="fecha" id="fecha"><br><br>

        <label for="color">Color favorito:</label>
        <input type="color" name="color" id="color"><br><br>

        <label for="archivo">Subir archivo:</label>
        <input type="file" name="archivo" id="archivo"><br><br> -->
        
                    <!-- Arreglo en Inputs -->

        <!-- <label for ="personas">Personas</label>
        <input type="text" name="personas[]"> 
        <input type="text" name="personas[]">
        <input type="text" name="personas[]"><br><br> -->
        <!-- cuando se pone personas[] php reconoce que es un array -->

        <!-- Arreglo asociativo -->
       <!--  <label for ="persona">Persona</label>
        <input type="text" name="persona[Nombre]"> 
        <input type="text" name="persona[Email]">
        <input type="text" name="persona[Edad]"><br><br> -->

        <!-- checkboxs -->
        <!-- <label for="persona">Persona</label><br>
        <input type="checkbox" name="name1" value="Juan"> Juan<br>
        <input type="checkbox" name="name2" value="Pedro"> Pedro<br>
        <input type="checkbox" name="name3" value="Maria"> Maria<br><br> -->

        <!-- radio buttons -->

        <!-- Cuando asociamos el label for al id del input, nos permite seleccionar el radiocheck presionando en el nombre del label -->
         
        <label for="argentina">Argentina</label><br>
        <input type="radio" name="pais" value="Argentina" id="argentina"><br>
        
        <label for="colombia">Colombia</label><br>
        <input type="radio" name="pais" value="Colombia" id="colombia"><br>
        
        <label for="venezuela">Venezuela</label><br>
        <input type="radio" name="pais" value="Venezuela" id="venezuela"><br><br>

        <input type="submit" value="Enviar">

        <input type="reset" value="Limpiar"><br><br>



    </form>

</body>

</html>