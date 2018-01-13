<!doctype html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Verify</title>
</head>
<body>

<?php
$email = $_GET['email'];
$hashcode = $_GET['hashcode'];
$dbc = mysqli_connect('localhost','24011_alien','24011_alien', '24011_aliendatabase') or die ('Kan niet connecten naar database');
$query = "SELECT * FROM users WHERE email='$email' AND hashcode='$hashcode'";
$result = mysqli_query($dbc,$query) or die ('Error querying for user.');
if(mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_array($result);
    $userid = $row['id'];
    $query = "UPDATE users SET status=1 WHERE id='$userid'";
    $result = mysqli_query($dbc,$query) or die ('Error updating.');
    echo '<br>Bedankt, je inschrijving is compleet';
} else { echo 'Error';}


?>

</body>
</html>