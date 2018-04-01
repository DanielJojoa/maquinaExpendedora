export class Producto {
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
export default Producto;