/*
    ===== Código de TypeScript =====
*/

interface IProducto{
    desc: string;
    precio: number
}

const telefono: IProducto = {
    desc: 'Nokia a1',
    precio: 150
}
const tablet: IProducto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaISV( productos: IProducto[] ): number[] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio
    })

    return [total, total * 0.15]
}

const articulos = [telefono, tablet];
const [total, isv] = calculaISV( articulos );
console.log( total );
console.log( isv );