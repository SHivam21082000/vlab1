
function calculate(){
  var x = document.getElementById("resistor-one").value;
  var y = document.getElementById("resistor-two").value;  
  var r1 = parseInt(x);
  var r2 = parseInt(y);
  var z = 15*r1/(r1+r2); 
  document.getElementById("demo").innerHTML = z;
  document.getElementById("demo1").innerHTML = -z;
}

function reset(){
  document.getElementById("resistor-one").value = '';
  document.getElementById("resistor-two").value = '';
  document.getElementById("demo").innerHTML = '';
  document.getElementById("demo1").innerHTML = '';
  document.getElementById("freq").value = '';
  document.getElementById("input-voltage").value = '';
}