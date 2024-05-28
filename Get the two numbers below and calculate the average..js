function clickMe(){
var number1=parseFloat(document.getElementById("num1").value);
var number2=parseFloat(document.getElementById("num2").value);
let average=(number1+number2)/2
document.getElementById("Result").innerHTML = "The Average of two no is =" + average;

}




