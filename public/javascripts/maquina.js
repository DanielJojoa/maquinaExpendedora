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
                var pr = new Producto('pr1', 'Papas Margarita', 1300);
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
                var pr = new Producto('pr2', 'Jugo Hit', 2000);
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
        if ((this.pr3.length + can) <= this.capPr3 && can > 0) {
            for (var i = 0; i < can; i++) {
                var pr = new Producto('pr1', 'Papas Chocolatina', 500);
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
                var pr = new Producto('pr4', 'Galleta Festival', 800);
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
        return ((this.pr1.length * 100) / this.capPr1);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr2 = function () {
        return ((this.pr2.length * 100) / this.capPr2);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr3 = function () {
        return ((this.pr3.length * 100) / this.capPr3);
    };
    MaquinaExpendedora.prototype.obtenerPorcentajePr4 = function () {
        return ((this.pr4.length * 100) / this.capPr4);
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
    MaquinaExpendedora.prototype.valorTotalVenasPr1 = function () {
        var total = (this.canidadTotoalVentasPr1 * 1300);
        return total.toString();
    };
    MaquinaExpendedora.prototype.valorTotalVenasPr2 = function () {
        var total = (this.canidadTotoalVentasPr2 * 2000);
        return total.toString();
    };
    MaquinaExpendedora.prototype.valorTotalVenasPr3 = function () {
        var total = (this.canidadTotoalVentasPr3 * 500);
        return total.toString();
    };
    MaquinaExpendedora.prototype.valorTotalVenasPr4 = function () {
        var total = (this.canidadTotoalVentasPr4 * 800);
        return total.toString();
    };
    return MaquinaExpendedora;
}());
var maq = new MaquinaExpendedora();
var res = document.getElementById('colRes');
res.style.display = "nome";
function establecerCantidadPod(div, can) {
    document.getElementById(div).innerHTML = can;
}
function abastecerProd1() {
    var can = maq.abastecerPr1();
    if (can != "0") {
        establecerCantidadPod('cantA1', can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod('canAt1', maq.obtenerCantidadPr1());
    }
}
function abastecerProd2() {
    var can = maq.abastecerPr2();
    if (can != "0") {
        establecerCantidadPod('cantB2', can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod('cantB2', maq.obtenerCantidadPr2());
    }
}
function abastecerProd3() {
    var can = maq.abastecerPr3();
    if (can != "0") {
        establecerCantidadPod('cantC3', can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod('cantC3', maq.obtenerCantidadPr3());
    }
}
function abastecerProd4() {
    var can = maq.abastecerPr4();
    if (can != "0") {
        establecerCantidadPod('cantD4', can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod('cantD4', maq.obtenerCantidadPr4());
    }
}
function venderProducto1() {
    if (maq.darProducto1()) {
        establecerCantidadPod('cantA1', maq.obtenerCantidadPr1());
    }
    else {
        alert('Existencias del producto insuficientes');
    }
}
function venderProducto2() {
    if (maq.darProducto2()) {
        establecerCantidadPod('cantB2', maq.obtenerCantidadPr2());
    }
    else {
        alert('Existencias del producto insuficientes');
    }
}
function venderProducto3() {
    if (maq.darProducto3()) {
        establecerCantidadPod('cantC3', maq.obtenerCantidadPr3());
    }
    else {
        alert('Existencias del producto insuficientes');
    }
}
function venderProducto4() {
    if (maq.darProducto4()) {
        establecerCantidadPod('cantD4', maq.obtenerCantidadPr4());
    }
    else {
        alert('Existencias del producto insuficientes');
    }
}
function cantidadDeVentas() {
    establecerCantidadPod('tipCons', 'Cantodad de Productos vendidos');
    var mensaje = 'Producto1: ' + maq.obtenerCantidadVentasPr1() + ', Producto2: ' + maq.obtenerCantidadVentasPr2();
    mensaje += ',Producto3: ' + maq.obtenerCantidadVentasPr3() + ', Producto4: ' + maq.obtenerCantidadVentasPr4();
    establecerCantidadPod('res', mensaje);
}
function disponibilidadDeProductos() {
    establecerCantidadPod('tipCons', 'Disponibilidad de Productos');
    var mensaje = 'Producto1: %' + maq.obtenerPorcentajePr1() + ', Producto2: %' + maq.obtenerPorcentajePr2();
    mensaje += ',Producto3: %' + maq.obtenerPorcentajePr3() + ', Producto4: %' + maq.obtenerPorcentajePr4();
    establecerCantidadPod('res', mensaje);
}
function valorTotalDeVentas() {
    establecerCantidadPod('tipCons', 'Valor total de ventas');
    var total = parseInt(maq.valorTotalVenasPr1()) + parseInt(maq.valorTotalVenasPr2()) + parseInt(maq.valorTotalVenasPr3()) + parseInt(maq.valorTotalVenasPr4());
    var mensaje = 'Producto1: ' + maq.valorTotalVenasPr1() + ', Producto2: ' + maq.valorTotalVenasPr2();
    mensaje += ',Producto3: ' + maq.valorTotalVenasPr3() + ', Producto4: ' + maq.valorTotalVenasPr4();
    mensaje += '\n Total de ventas :' + total.toString();
    establecerCantidadPod('res', mensaje);
}
