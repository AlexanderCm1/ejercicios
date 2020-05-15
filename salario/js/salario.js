'use strict'
var nombre = prompt("ingrese su nombre",);
var edad = parseInt(prompt("ingrese su edad",));
var salario = parseFloat(prompt("ingrese su salario",));


if(edad <= 18){
    alert("usted no tiene edad para trabajar")
}else if(edad >= 19 && edad <= 50){
    alert((salario*100) / 5);
}else if(edad >= 51 && edad <= 60 ){
    alert(salario / 0.10);
}else if(edad > 60){
    alert((salario*100) / 15);
}