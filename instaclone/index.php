<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Instaclone</title>
    <link rel="Stylesheet" href="Style.css" type="text/css">

      <meta name="viewport" content="width=device-width, initial-scale=1">
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
       <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
           <select name="sorteermenu">
               <option value="date_asc">Datum Oplopend</option>
               <option value="date_desc">Datum Aflopend</option>
               <option value="description_asc">Beschrijving Oplopend</option>
               <option value="description_desc">Beschrijving Aflopend</option>
           </select>
           <input type="submit" name="submit_sort" value="sorteren">
       </form>
       <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
           <input type="text" name="searchterm" placeholder="zoekterm"/>
           <input type="submit" name="submit_search" value="zoeken"/>
       </form>
       <article>
     <div id="fotos">

         </div>


       </article>

<div id="fotos">
    <?php
    $column = 'date';
    $order = 'desc';

    if(isset($_POST['submit_sort'])) {
        switch ($_POST['sorteermenu']) {
            case 'date_asc':
                $column = 'date';
                $order = 'asc';
                break;
            case 'date_desc':
                $column = 'date';
                $order = 'desc';
                break;
            case 'description_asc':
                $column = 'description';
                $order = 'asc';
                break;
            case 'description_desc':
                $column = 'description';
                $order = 'desc';
                break;
        }
    }

        if (isset($_POST['submit_search'])) {
            $searchterm = mysqli_real_escape_string($dbc,trim($_POST['searchterm']));
            $searchterm = '%' . $searchterm . '%';
        } else {
            $searchterm = '%';
        }
    $dbc = mysqli_connect('localhost','24011_alien','24011_alien', '24011_aliendatabase') or die ('Error 2!');
        $query = "SELECT * FROM image_upload
                  WHERE description LIKE '$searchterm' 
                  ORDER BY $column $order";
        $result = mysqli_query($dbc, $query);
        while ($row = mysqli_fetch_array($result)) {
            $target = $row['target'];
            $date = $row['date'];
            $username = $row['username'];
            $description = $row['description'];
            echo '<div class="fotos">';
            echo '<header class ="header">';
            echo $date . ' . ' . $username . ' . ' . $description . '<br>';
            echo '</header>';
            echo '<img src="' . $target . '" width="400px" /><br>';

            echo '</div>';
        }

    ?>
</div>
   </div>
  </body>
</html>
