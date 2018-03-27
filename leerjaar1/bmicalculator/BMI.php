<?php
 $lengte  = $_GET["lengte_cm"];
 $gewicht = $_GET["gewicht"];

echo 'hallo wereld';
 $resultaat = BMICalc($gewicht, $lengte);

 function BMIcalc($gewicht, $lengte) {
   $lengte = $lengte / 100;
   $BMI = round($gewicht / ($lengte * $lengte), 1);

   return $BMI;
}


     switch (true) {
       case($resultaat >= 18.5 && $resultaat <= 24.9 ):
       echo "<h1 style='background-color: rgb(44, 176, 49);'>Uw BMI is: $resultaat, je hebt een normaal gewicht.</p>";
       break;
       case($resultaat < 18.5):
       echo "<h1 style='background-color: rgb(40, 93, 149);'>Uw BMI is: $resultaat, je hebt ondergewicht.</p>";
       break;
       case($resultaat >= 25 && $resultaat <= 26.9):
       echo "<h1 style='background-color: rgb(145, 163, 35);'>Uw BMI is: $resultaat, je hebt een beetje overgewicht.</p>";
       break;
       case($resultaat >=27 && $resultaat <= 29.9):
       echo "<h1 style='background-color: rgb(212, 144, 13);'>Uw BMI is: $resultaat, je hebt matig overgewicht.</p>";
       break;
       case($resultaat >=30 && $resultaat <= 39.9):
       echo "<h1 style='background-color: rgb(233, 91, 21);'>Uw BMI is: $resultaat, je hebt obesitas.</p>";
       break;
       case($resultaat >= 40):
       echo "<h1 style='background-color: rgb(255, 0, 0);'>Uw BMI is: $resultaat, je hebt een morbide obesitas.</p>";
       break;
}
