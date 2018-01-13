<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload</title>
    <link rel="stylesheet" type="text/css" href="Style.css">
</head>
<body>
<div id="container">

    <h1>PicShare</h1>

    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="login.php">Login</a></li>
            <li><a href="registreren.php">Register</a></li>
            <li><a href="upload.php">Upload</a></li>
        </ul>
    </nav>
    <img id="insta" src="http://vignette1.wikia.nocookie.net/logopedia/images/3/3c/Instagram_2016_icon.png/revision/latest?cb=20160512082737">
    <fieldset id="upload">
            <form enctype="multipart/form-data" method="POST" action="">
              <input type="hidden" name="MAX-FILE_SIZE" value="32768"/>
              <input type="file" name="image"/><br>
            <label for="description">Omschrijving (max. 140 tekens)</label>
            <textarea name="description" id="description"></textarea>
            <input type="submit" value="Uploaden maar!" name="submit"/>
        </form>
        <?php
        if(isset($_POST['submit'])) {

            $dbc = mysqli_connect('localhost','24011_alien','24011_alien', '24011_aliendatabase') or die ('Error connecting!');
            $description = mysqli_real_escape_string($dbc,trim($_POST['description']));
            $target = 'images/' . time() . $_FILES['image']['name'];
            $temp = $_FILES['image']['tmp_name'];

            if(move_uploaded_file($temp,$target)) {
                echo '<br>Gelukt!<br>';
                $query = "INSERT INTO image_upload VALUES (0,NOW(),'$description','$target','patrick')";
                $result = mysqli_query($dbc,$query) or die('Error querying.');
            }
            else {
                echo "<p class='errorupload'>Error! Niet geupload! (Waarschijnlijk is de foto te groot!)</p>";
            }
        }
        ?>
    </fieldset>


</body>
</html>