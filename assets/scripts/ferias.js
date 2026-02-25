// Set the date we're counting down to
var ferias = new Date("Jul 5, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = ferias - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  // Output the result in an element with id="demo"
  document.getElementById("ferias").innerHTML = "Faltam " + days + " dias para as férias.";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ferias").innerHTML = "Boas férias! :))";
  }
}, 1000);