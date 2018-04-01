import {Producto} from './Producto'
export class MaquinaExpendedora {
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
        if ((this.pr1.length + can) <= this.capPr3 && can > 0) {
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
        return ((this.capPr1 * 100) / this.pr1.length);
    }
    public obtenerPorcentajePr2(): number {
        return ((this.capPr2 * 100) / this.pr2.length);
    }
    public obtenerPorcentajePr3(): number {
        return ((this.capPr3 * 100) / this.pr3.length);
    }
    public obtenerPorcentajePr4(): number {
        return ((this.capPr4 * 100) / this.pr4.length);
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


}
export default MaquinaExpendedora;
