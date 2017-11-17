<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Gastenboek</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
  <div class="container">



    <div class="form">


    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
      <input type = 'text' name="naam" placeholder="Naam"><br><br>
      <input type = 'text' name="message"  placeholder="Bericht"><br><br>
      <input type=  'submit' name="submit" value="Verzend">
    </form>
</div>
    <?php


    $dbc   = new PDO('mysql:host=localhost;dbname=24011_aliendatabase', '24011_alien', '24011_alien') or die ('Error connecting to database');
    $dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $dbc->prepare("SELECT * FROM gastenboek ORDER BY id DESC");

    $stmt->execute() or die ('Error querying after PDO');
    while ($row = $stmt->fetch()) {
      $naam = $row ['naam'];
      $message = $row ['message'];
      echo '<div class="bericht">';
      echo $naam . '<br>';
      echo $message ;
      echo '</div>';
    };

    if(isset($_POST['submit'])) {

        $naam = $_POST['naam'];
        $message = $_POST['message'];


        $list = array("kut", "tering", "tyfus", "godverdommetjes");

        if (!empty($naam) && !empty($message)) {

            $word_array = preg_split('/\s|(?<=\w)(?=[.,:;!?)])|(?<=[.,"!()?\x{201C}])/u', $message);
            foreach($word_array as $word){
                if(in_array(strtolower($word), $list)){
                    $message = preg_replace('/\b'.$word.'\b/i', "Moooooooohh", $message);
                }
            }

            //Query samenstellen
            $stmt = $dbc->prepare("INSERT INTO gastenboek VALUES (0, :naam, :message)");

            //Parameters binden aan een variable
            $stmt->bindParam(':naam', $naam);
            $stmt->bindParam(':message', $message);


            //PDO query uitvoeren
            $stmt->execute() or die(print_r($stmt->errorInfo(), true));

            header("Location: index.php");

        } else {
            echo 'Vul wat in mwoan';
        }
    };
//
//
//    $stmt = $dbc->prepare("INSERT INTO gastenboek VALUES (0, :naam, :message)") or die ('error inserting');
//
//    $stmt->bindParam(':naam', $naam);
//    $stmt->bindParam(':message', $message);
//
//
//
//    $stmt->execute() or die ('Error inserting info');







      ?>


</div>

  </body>
</html>
