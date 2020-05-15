'use strict'

var a = parseInt(prompt("ingrese un numero"),0);

function factorial(e){
    var total = 1;
    for(var i = 1; i <= e; i++){
        total *= i;
    }
    return total;
}

alert("su numero factorial es "+ factorial(a));
