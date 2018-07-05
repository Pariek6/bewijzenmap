var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("arrow-left").style.display = "none";

  } else {
    document.getElementById("arrow-left").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("arrow-right").innerHTML = "";
  } else {
    document.getElementById("arrow-right").innerHTML = "";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("inschrijf_formulier").submit();
    return false;
    alert("Bedankt voor het invullen van het Formulier!")
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, c, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  var gleerling = document.getElementById("geslacht_leerling");
  var radios = document.getElementsByName("geslacht_leerling_radio")
  // c = document.getElementsByClassName("custom-control-inline")
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {
      // add an "invalid" class to the field:
        y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
}


    // if (i == 0) {
    //   valid = true;
    // }
    // else if(i == 4 && y[4].checked == false) {
    //   valid = false;
    //   y[i].className += " invalid";
    //
    // }}
    // If a field is empty...




  // If the valid status is true, mark the step as finished and valid:
  if (valid) {

    document.getElementsByClassName("step")[currentTab].className += " finish";
    window.scrollTo(0, 0);
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
