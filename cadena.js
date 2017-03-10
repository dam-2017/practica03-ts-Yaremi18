"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cad1 = cadena;
        this.cadena = cadena.replace(/\s/g, "").toLowerCase();
        this.tamaño = this.cadena.length;
    }
    Object.defineProperty(Cadena.prototype, "obtenerPalindromo", {
        get: function () {
            var cont = 0;
            var j = this.tamaño - 1;
            for (var i = 0; i < this.tamaño; i++) {
                if (this.cadena.charAt(i) == this.cadena.charAt(j)) {
                    cont++;
                }
                j--;
            }
            if (cont == this.tamaño) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "obtenerVocales", {
        get: function () {
            var a = 0, e = 0, i = 0, o = 0, u = 0;
            for (var i_1 = 0; i_1 < this.tamaño; i_1++) {
                var vocal = this.cadena.charAt(i_1).toLowerCase();
                switch (vocal) {
                    case 'a':
                        a++;
                        break;
                    case 'e':
                        e++;
                        break;
                    case 'i':
                        i_1++;
                        break;
                    case 'o':
                        o++;
                        break;
                    case 'u':
                        u++;
                        break;
                }
            }
            return 'Vocales:\n  "a": ' + a + '\n  "e": ' + e + '\n  "i": ' + i + '\n  "o": ' + o + '\n  "u": ' + u;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "obtenerLetras", {
        get: function () {
            var totL = 0;
            for (var i = 0; i < this.tamaño; i++) {
                if (this.cadena.charCodeAt(i) > 96 && this.cadena.charCodeAt(i) < 123) {
                    totL++;
                }
            }
            return totL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "obtenerPalabras", {
        get: function () {
            var arr = this.cad1.split(/\s/g);
            return arr.length;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
