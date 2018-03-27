var myButton = document.getElementById("myButton");


var zelfstandigNaamwoord =["Tijger", "Olifant", "Giraffe", "Hyena", "Krokodil" ];

var lidwoord =["de", "een"];

var werkwoord =["springt", "sluipt", "kijkt"];

var voorzetsel =["naast", "over", "op"];

function randomKeuze(localArray =[ ]){ //localArray is een lokale variable
		  	console.log(localArray);
			let lengte = localArray.length;
			console.log(lengte + "\n");
			let randomNummer = Math.random(); // 0 <= waarde < 1 (dus exclusief
			randomNummer = Math.floor(randomNummer * lengte);
			console.log(localArray[randomNummer]);
			return localArray[randomNummer];
			}

		function zinnen(){
				document.getElementById("woord1").innerHTML = randomKeuze(lidwoord);
				document.getElementById("woord2").innerHTML = randomKeuze(zelfstandigNaamwoord);
				document.getElementById("woord3").innerHTML = randomKeuze(werkwoord);
				document.getElementById("woord4").innerHTML = randomKeuze(voorzetsel);
				document.getElementById("woord5").innerHTML = randomKeuze(lidwoord);
				document.getElementById("woord6").innerHTML = randomKeuze(zelfstandigNaamwoord);
			}


myButton.addEventListener('click',()=>{
	zinnen();
});
