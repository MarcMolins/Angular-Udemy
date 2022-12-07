/*
    ===== Código de TypeScript =====
*/

import { calculaISV, IProducto } from "./06-desestructuracion-funciones";

/*
export interface IProducto{
    desc: string;
    precio: number
}
*/
const carritoCompras: IProducto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    },
    {
        desc: 'Telefono 3',
        precio: 300
    },
    {
        desc: 'Telefono 4',
        precio: 400
    },
    {
        desc: 'Telefono 5',
        precio: 500
    }
]

const [ total, isv ] = calculaISV( carritoCompras );
console.log(total, isv)