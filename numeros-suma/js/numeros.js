
var a = "";
var b = "";
var cont = 0;
var pares = 0;
var imp = 0;
var pos = 0;
var neg = 0;
var arr = [];
do {
    a = parseInt(prompt("ingrese un numero x teclado", 0));
    cont += a;
    arr.push(a);
    if(a % 2 == 0){
        pares ++;
    }if(a %2 != 0){
        imp ++;
    }

    if(a > 0){
        pos ++;
    }
    if(a < 0){
        neg ++;
    }


    b = prompt("desea ingresar mas valore si o no?",);

    
}while(b != "no")

alert("suma de todos los numeros pares e impares " +cont);
alert("cantidad de numeros pares ingresados " +pares);
alert("cantidad de numeros impares ingresados "+ imp);
alert("cantidad de numeros positivos ingresados "+ pos);
alert("cantidad de numeros negativos ingresados " + neg);
alert("media de todos los numeros "+ cont / arr.length);

/*
function suma(e){
    for (var i = 0;i<=e ; i++ ){

    }
}
console.log(4 % 2);
var b = 1;
*/
