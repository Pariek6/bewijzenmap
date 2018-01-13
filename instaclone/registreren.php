<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
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

    <form method="POST" action="register.php">
        <fieldset>
            <p>Voornaam:</p>
            <input type="text" name="voornaam" placeholder="Voornaam"><br>
            <p>Achternaam:</p>
            <input type="text" name="achternaam" placeholder="Achternaam"><br>
            <p>Gebruikersnaam:</p>
            <input type="text" name="username" placeholder="Gebruikersnaam"><br>
            <p>E-mail:</p>
            <input type="text" name="email" placeholder="E-mail"><br>
            <p>Wachtwoord:</p>
            <input type="password" name="password" placeholder="Wachtwoord"><br>
            <p>Wachtwoord opnieuw:</p>
            <input type="password" name="password_verify" placeholder="Wachtwoord"><br><br>
            <input type="submit" name="submit" value="Registreer"><br>
        </fieldset>
    </form>
</body>
</html>