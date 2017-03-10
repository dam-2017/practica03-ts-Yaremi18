import { Cadena } from './cadena';
import { Numero } from './numero';

console.log("****CLASE CADENA****");
let cad = new Array<Cadena>();

cad.push(new Cadena('Anita lava la tina'));
cad.push(new Cadena('hola mundo'));

for(let cads of cad){
    if(cads.obtenerPalindromo == true){
        console.log(cads.cad1 + ": ¡es palindromo!");
    }else{
        console.log(cads.cad1 + ": ¡no es palindromo!");
    }
    console.log(cads.obtenerVocales);
    console.log("Numero total de letras: "+cads.obtenerLetras);
    console.log("Numero total de palabras: "+cads.obtenerPalabras+"\n");
}

console.log("\n****CLASE NUMERO****");
let num = new Array<Numero>();

num.push(new Numero(5,9));
num.push(new Numero(10,5));

for(let nums of num){
    console.log("Suma: "+nums.suma);
    console.log("Resta: "+nums.resta);
    console.log("PARA ESTOS CASOS SE TOMÓ EL PRIMER PARAMETRO");
    console.log("Factorial de "+nums.num1+": "+nums.factorial);
    if(nums.primo == true){
        console.log("El numero "+nums.num1 + " es primo\n")
    }else{
        console.log("El numero "+nums.num1 + " no es primo\n")
    }
}