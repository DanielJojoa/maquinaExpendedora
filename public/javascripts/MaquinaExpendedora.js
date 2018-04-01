"use strict";
exports.__esModule = true;
var Producto_1 = require("./Producto");
var MaquinaExpendedora = /** @class */ (function () {
    function MaquinaExpendedora() {
        this.canidadTotoalVentasPr1 = 0;
        this.canidadTotoalVentasPr2 = 0;
        this.canidadTotoalVentasPr3 = 0;
        this.canidadTotoalVentasPr4 = 0;
        this.capPr1 = 30;
        this.capPr2 = 30;
        this.capPr3 = 30;
        this.capPr4 = 30;
        this.pr1 = [];
        this.pr4 = [];
        this.pr2 = [];
        this.pr3 = [];
    }
    MaquinaExpendedora.prototype.darProducto1 = function () {
        if (this.pr1.length > 0) {
            this.canidadTotoalVentasPr1 += 1;
            this.pr1.pop();
            return true;
        }
        else {
            return false;
        }
    };
    MaquinaExpendedora.prototype.darProducto2 = function () {
        if (this.pr2.length > 0) {
            this.canidadTotoalVentasPr2 += 1;
            this.pr2.pop();
            return true;
        }
        else {
            return false;
        }
    };
    MaquinaExpendedora.prototype.darProducto3 = function () {
        if (this.pr3.length > 0) {
            this.canidadTotoalVentasPr3 += 1;
            this.pr3.pop();
            return true;
        }
        else {
            return false;
        }
    };
    MaquinaExpendedora.prototype.darProducto4 = function () {
        if (this.pr4.length > 0) {
            this.canidadTotoalVentasPr4 += 1;
            this.pr4.pop();
            return true;
        }
        else {
            return false;
        }
    };
    MaquinaExpendedora.prototype.abastecerPr1 = function () {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr1.length + can) <= this.capPr1 && can > 0) {
            for (var i = 0; i < can; i++) {
                var pr = new Producto_1.Producto('pr1', 'Papas Margarita', 1300);
                this.pr1.push(pr);
            }
            return this.pr1.length.toString();
        }
        else {
            return "0";
        }
    };
    MaquinaExpendedora.prototype.abastecerPr2 = function () {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr2.length + can) <= this.capPr2 && can > 0) {
            for (var i = 0; i < can; i++) {
                var pr = new Producto_1.Producto('pr2', 'Jugo Hit', 2000);
                this.pr2.push(pr);
            }
            return this.pr2.length.toString();
        }
        else {
            return "0";
        }
    };
    MaquinaExpendedora.prototype.abastecerPr3 = function () {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr1.length + can) <= this.capPr3 && can > 0) {
            for (var i = 0; i < can; i++) {
                var pr = new Producto_1.Producto('pr1', 'Papas Chocolatina', 500);
                this.pr3.push(pr);
            }
            return this.pr3.length.toString();
        }
        else {
            return "0";
        }
    };
    MaquinaExpendedora.prototype.abastecerPr4 = function () {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr4.length + can) <= this.capPr4 && can > 0) {
            for (var i = 0; i < can; i++) {
                var pr = new Producto_1.Producto('pr4', 'Galleta Festival', 800);
                this.pr4.push(pr);
            }
            return this.pr4.length.toString();
        }
        else {
            return "0";
        }
    };
    MaquinaExpendedora.prototype.obtenerCantidadVentasPr1 = function () {
        return this.canidadTotoalVentasPr1;
    };
    MaquinaExpendedora.prototype.obtenerCantidadVentasPr2 = function () {
        return this.canidadTotoalVentasPr2;
    };
    MaquinaExpendedora.prototype.obtenerCantidadVentasPr3 = function () {
        return this.canidadTotoalVentasPr3;
    };
    MaquinaExpendedora.prototype.obtenerCantidadVentasPr4 = function () {
        return this.canidadTotoalVentasPr4;
    };
    MaquinaExpendedora.prototype.obtenerCantidadVentas = function () {
        return (this.canidadTotoalVentasPr4, this.canidadTotoalVentasPr2 +
            this.canidadTotoalVentasPr3 + this.canidadTotoalVentasPr4);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr1 = function () {
        return ((this.capPr1 * 100) / this.pr1.length);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr2 = function () {
        return ((this.capPr2 * 100) / this.pr2.length);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr3 = function () {
        return ((this.capPr3 * 100) / this.pr3.length);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr4 = function () {
        return ((this.capPr4 * 100) / this.pr4.length);
    };
    MaquinaExpendedora.prototype.obtenerCantidadPr1 = function () {
        return this.pr1.length.toString();
    };
    MaquinaExpendedora.prototype.obtenerCantidadPr2 = function () {
        return this.pr2.length.toString();
    };
    MaquinaExpendedora.prototype.obtenerCantidadPr3 = function () {
        return this.pr3.length.toString();
    };
    MaquinaExpendedora.prototype.obtenerCantidadPr4 = function () {
        return this.pr4.length.toString();
    };
    return MaquinaExpendedora;
}());
exports.MaquinaExpendedora = MaquinaExpendedora;
exports["default"] = MaquinaExpendedora;
