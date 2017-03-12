
var calculator = document.getElementById("calculator");
var result = document.getElementById("result");
calculator.addEventListener("click", calcular);

function calcular(){
  var total = 0;
  var mobile = document.getElementById("mobile").value;
  var plan = document.getElementById("plan").value;
  var month = document.getElementById("month").value;

  var msj = "";
  	if(!mobile){
  		msj += "Ingrese precio del equipo";
  	} else if(!plan){
  		msj += "Ingrese plan";
  	}else {
	  total = mobile + (plan * month);  
	  total=parseFloat(total).toFixed(2)
	  msj += "Resultado :<br>S/. " + total
 	 }

  result.innerHTML = msj;

  
  console.log(total);

}
