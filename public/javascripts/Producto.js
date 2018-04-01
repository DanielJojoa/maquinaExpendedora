"use strict";
exports.__esModule = true;
var Producto = /** @class */ (function () {
    function Producto(identidicador, nombre, precio) {
        this.identidicador = identidicador;
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.obtenerPrecio = function () {
        return this.precio;
    };
    return Producto;
}());
exports.Producto = Producto;
exports["default"] = Producto;
