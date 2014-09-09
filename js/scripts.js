/* Comentario abnwnm mNKD 
abnwnm mNKD,abnwnm mNKD,
abnwnm mNKD, abnwnm mNKD,
mnasmjnf nmeiuhr de Bloque*/

// Comentario de Línea

// Prueba de funcionamiento en JS
//document.write("Si funciona mi JavaScript");

// Generar alerta a usuario
//alert("Ventana de alerta para usuario");

//Solicitar información a nuestro usuario
/*
var nombre = prompt("Por favor, introduzca su nombre");
document.write("<h1>Bienvenid@: " + nombre + "</h1><br />");

var edad = prompt("Por favor, introduzca su edad");
document.write("Su edad es: " + edad + "años");*/

// Operaciones matemáticas 
/*
var numUno = 5;
var numDos = 2;
var numTres = 2;

var suma = numUno + numDos;

var resultado = suma / numTres;

console.log(suma);

console.log(resultado);*/

// Operaciones matemáticas personalizadas
/*
var numUno = parseInt(prompt("Introduzca Primer valor"));
var numDos = parseInt(prompt("Introduzca Segundo valor"));
var numTres = parseInt(prompt("Introduzca Tercer valor"));

var resultado = (numUno + numDos) / numTres;

console.log("La operación es la siguiente: " + numUno + " + " + numDos + " / " + numTres);
console.log(resultado);*/

// Variable Booleanas
/*var numUno = parseInt(prompt("Introduzca un Número"));
var numDos = parseInt(prompt("Introduzca un Número"));

var resultado = numUno == numDos;
console.log(resultado);*/

// Variable Arrays - Cadenas - Arreglos
/*var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var semana = [1, 2, 3, 4, 5, 6, 7];
var valores = [1, 2, 3, 4, 5, 6, 7];

console.log(meses);

console.log(meses[3]);

console.log(meses[5] + meses[3]);

console.log(semana);

console.log(semana[5] + " " + semana[3]);

console.log(valores[6] + valores[8]);*/

// Variable Global
var variableGlobal = "Esto es una Variable Global";

// Funciones 
miFuncion = function() {
	variableGlobal = "variableGlobal dentro de una funcion";
	var variableLocal = "Esta es Local";
	document.write(variableGlobal + "<br />" + variableLocal); 
}

otraFuncion = function() {
	document.write(variableGlobal + "<br />" + variableLocal); 
}

miFuncion();
otraFuncion();

