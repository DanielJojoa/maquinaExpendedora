class Producto {
    private identidicador: string;
    private nombre: string;
    private precio: number;
    private cantidadUnidadesDisponibles: number;
    private cantidadUnidadesVendidas: number;

    constructor(identidicador: string, nombre: string, precio: number) {
        this.identidicador = identidicador;
        this.nombre = nombre;
        this.precio = precio;

    }
    public obtenerPrecio(): number {
        return this.precio;
    }
}
class MaquinaExpendedora {
    private pr1: Array<Producto>;
    private pr2: Array<Producto>;
    private pr3: Array<Producto>;
    private pr4: Array<Producto>;
    private capPr1: number;
    private capPr2: number;
    private capPr3: number;
    private capPr4: number;
    private totalVentas: number;
    private canidadTotoalVentasPr1: number;
    private canidadTotoalVentasPr2: number;
    private canidadTotoalVentasPr3: number;
    private canidadTotoalVentasPr4: number;
    private porcentajePr1: number;
    private porcentajePr2: number; n
    private porcentajePr3: number;
    private porcentajePr4: number;

    constructor() {
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
    public darProducto1(): boolean {
        if (this.pr1.length > 0) {
            this.canidadTotoalVentasPr1 += 1;
            this.pr1.pop();
            return true
        }
        else {
            return false
        }
    }
    public darProducto2(): boolean {
        if (this.pr2.length > 0) {
            this.canidadTotoalVentasPr2 += 1;
            this.pr2.pop();
            return true
        }
        else {
            return false
        }
    }
    public darProducto3(): boolean {
        if (this.pr3.length > 0) {
            this.canidadTotoalVentasPr3 += 1;
            this.pr3.pop();
            return true
        }
        else {
            return false
        }
    }
    public darProducto4(): boolean {
        if (this.pr4.length > 0) {
            this.canidadTotoalVentasPr4 += 1;
            this.pr4.pop();
            return true
        }
        else {
            return false
        }
    }
    public abastecerPr1(): string {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr1.length + can) <= this.capPr1 && can > 0) {
            for (var i = 0; i < can; i++) {
                let pr = new Producto('pr1', 'Papas Margarita', 1300);
                this.pr1.push(pr);
            }
            return this.pr1.length.toString();
        }
        else {
            return "0";
        }


    }
    public abastecerPr2(): string {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr2.length + can) <= this.capPr2 && can > 0) {
            for (var i = 0; i < can; i++) {
                let pr = new Producto('pr2', 'Jugo Hit', 2000);
                this.pr2.push(pr);
            }
            return this.pr2.length.toString();
        }
        else {
            return "0";
        }
    }
    public abastecerPr3(): string {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr3.length + can) <= this.capPr3 && can > 0) {
            for (var i = 0; i < can; i++) {
                let pr = new Producto('pr1', 'Papas Chocolatina', 500);
                this.pr3.push(pr);
            }
            return this.pr3.length.toString();
        }
        else {
            return "0";
        }
    }
    public abastecerPr4(): string {
        var can = parseInt(prompt("Abastecer", "Ingrese el número de Papas a adicionar"));
        if ((this.pr4.length + can) <= this.capPr4 && can > 0) {
            for (var i = 0; i < can; i++) {
                let pr = new Producto('pr4', 'Galleta Festival', 800);
                this.pr4.push(pr);
            }
            return this.pr4.length.toString();
        }
        else {
            return "0";
        }
    }
    public obtenerCantidadVentasPr1(): number {
        return this.canidadTotoalVentasPr1;
    }
    public obtenerCantidadVentasPr2(): number {
        return this.canidadTotoalVentasPr2;
    }
    public obtenerCantidadVentasPr3(): number {
        return this.canidadTotoalVentasPr3;
    }
    public obtenerCantidadVentasPr4(): number {
        return this.canidadTotoalVentasPr4;
    }
    public obtenerCantidadVentas(): number {
        return (this.canidadTotoalVentasPr4, this.canidadTotoalVentasPr2 +
            this.canidadTotoalVentasPr3 + this.canidadTotoalVentasPr4);
    }
    public obtenerPorcentajePr1(): number {
        return ((this.pr1.length * 100) / this.capPr1);
    }
    public obtenerPorcentajePr2(): number {
        return ((this.pr2.length * 100) / this.capPr2);
    }
    public obtenerPorcentajePr3(): number {
        return ((this.pr3.length * 100) / this.capPr3);
    }
    public obtenerPorcentajePr4(): number {
        return ((this.pr4.length * 100) / this.capPr4);
    }
    public obtenerCantidadPr1(): string {
        return this.pr1.length.toString();
    }
    public obtenerCantidadPr2(): string {
        return this.pr2.length.toString();
    }
    public obtenerCantidadPr3(): string {
        return this.pr3.length.toString();
    }
    public obtenerCantidadPr4(): string {
        return this.pr4.length.toString();
    }
    public valorTotalVenasPr1():string {
        var total = (this.canidadTotoalVentasPr1*1300);
        return total.toString();
    }
    public valorTotalVenasPr2():string {
        var total = (this.canidadTotoalVentasPr2*2000);
        return total.toString();
    }
    public valorTotalVenasPr3():string {
        var total = (this.canidadTotoalVentasPr3*500);
        return total.toString();
    }
    public valorTotalVenasPr4():string {
        var total = (this.canidadTotoalVentasPr4*800);
        return total.toString();
    }


}

var maq = new MaquinaExpendedora();
var res = document.getElementById('colRes');
res.style.display ="nome";
function establecerCantidadPod(div: string, can: string) {
    document.getElementById(div).innerHTML = can;
}

function abastecerProd1() {
    let can = maq.abastecerPr1();
    if (can != "0") {
        establecerCantidadPod('cantA1',can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");        
        establecerCantidadPod( 'canAt1',maq.obtenerCantidadPr1());
    }
    
}
function abastecerProd2() {
    let can = maq.abastecerPr2();
    if (can != "0") {
        establecerCantidadPod('cantB2',can);
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod( 'cantB2',maq.obtenerCantidadPr2());
    }
}
function abastecerProd3() {
    let can = maq.abastecerPr3();
    if (can != "0") {
        establecerCantidadPod('cantC3',can)
    }
    else {
        alert("Número de Productos a ingresar no permitido");
        establecerCantidadPod('cantC3', maq.obtenerCantidadPr3());
    }
}
function abastecerProd4() {
    let can = maq.abastecerPr4();
    if (can != "0") {
        establecerCantidadPod('cantD4',can);
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
function cantidadDeVentas(){
    establecerCantidadPod('tipCons','Cantodad de Productos vendidos');
    var mensaje = 'Producto1: ' + maq.obtenerCantidadVentasPr1() + ', Producto2: ' + maq.obtenerCantidadVentasPr2();
    mensaje += ',Producto3: ' + maq.obtenerCantidadVentasPr3() + ', Producto4: ' + maq.obtenerCantidadVentasPr4();
    establecerCantidadPod('res', mensaje);

}
function disponibilidadDeProductos(){
    establecerCantidadPod('tipCons','Disponibilidad de Productos');
    var mensaje = 'Producto1: %' + maq.obtenerPorcentajePr1() + ', Producto2: %' + maq.obtenerPorcentajePr2();
    mensaje += ',Producto3: %' + maq.obtenerPorcentajePr3() + ', Producto4: %' + maq.obtenerPorcentajePr4();
    establecerCantidadPod('res', mensaje);

}
function valorTotalDeVentas() {
    establecerCantidadPod('tipCons', 'Valor total de ventas');
    let total = parseInt(maq.valorTotalVenasPr1())+parseInt(maq.valorTotalVenasPr2())+parseInt(maq.valorTotalVenasPr3())+ parseInt(maq.valorTotalVenasPr4()) ;    
    var mensaje = 'Producto1: ' + maq.valorTotalVenasPr1()  + ', Producto2: ' + maq.valorTotalVenasPr2();
    mensaje += ',Producto3: ' + maq.valorTotalVenasPr3() + ', Producto4: ' + maq.valorTotalVenasPr4();
    mensaje += '\n Total de ventas :'+total.toString()
    establecerCantidadPod('res', mensaje);

}


