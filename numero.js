"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numero = (function () {
    function Numero(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Object.defineProperty(Numero.prototype, "suma", {
        get: function () {
            return this.num1 + this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "resta", {
        get: function () {
            return this.num1 - this.num2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "factorial", {
        get: function () {
            var fact = 1;
            for (var i = 1; i <= this.num1; i++) {
                fact = fact * i;
            }
            return fact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numero.prototype, "primo", {
        get: function () {
            var j = 0;
            for (var i = 1; i <= this.num1; i++) {
                if (this.num1 % i == 0) {
                    j++;
                }
            }
            if (j == 2) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Numero;
}());
exports.Numero = Numero;
