"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var numero_1 = require("./numero");
console.log("****CLASE CADENA****");
var cad = new Array();
cad.push(new cadena_1.Cadena('Anita lava la tina'));
cad.push(new cadena_1.Cadena('hola mundo'));
for (var _i = 0, cad_1 = cad; _i < cad_1.length; _i++) {
    var cads = cad_1[_i];
    if (cads.obtenerPalindromo == true) {
        console.log(cads.cad1 + ": ¡es palindromo!");
    }
    else {
        console.log(cads.cad1 + ": ¡no es palindromo!");
    }
    console.log(cads.obtenerVocales);
    console.log("Numero total de letras: " + cads.obtenerLetras);
    console.log("Numero total de palabras: " + cads.obtenerPalabras + "\n");
}
console.log("\n****CLASE NUMERO****");
var num = new Array();
num.push(new numero_1.Numero(5, 9));
num.push(new numero_1.Numero(10, 5));
for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
    var nums = num_1[_a];
    console.log("Suma: " + nums.suma);
    console.log("Resta: " + nums.resta);
    console.log("PARA ESTOS CASOS SE TOMÓ EL PRIMER PARAMETRO");
    console.log("Factorial de " + nums.num1 + ": " + nums.factorial);
    if (nums.primo == true) {
        console.log("El numero " + nums.num1 + " es primo\n");
    }
    else {
        console.log("El numero " + nums.num1 + " no es primo\n");
    }
}
