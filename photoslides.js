var photoslideIndex = 1;
showPhotoslides(photoslideIndex);

function plusPhotoslides(n) {
  showPhotoslides(photoslideIndex += n);
}

function showPhotoslides(n) {
  var i;
  var photoslides = document.getElementsByClassName("myPhotoslides");

  if (n > photoslides.length) {photoslideIndex = 1}    
  if (n < 1) {photoslideIndex = photoslides.length}
  for (i = 0; i < photoslides.length; i++) {
      photoslides[i].style.display = "none";  
  }
  photoslides[photoslideIndex-1].style.display = "block";  
}