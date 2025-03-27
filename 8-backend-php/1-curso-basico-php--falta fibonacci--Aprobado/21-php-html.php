<?php
$zorros = ["https://randomfox.ca/images/1.jpg", "https://randomfox.ca/images/2.jpg", "https://randomfox.ca/images/3.jpg"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<h1>PHP en HTML</h1>

<?php foreach ($zorros as $zorro) { ?>
    <img src="<?= $zorro; ?>" alt="">
<?php } ?>

</html>