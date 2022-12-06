/*
    ===== Código de TypeScript =====
*/

/* DESESTRUCTURACION DE OBJETOS */
interface IDetalles {
    autor: string;
    anio: number
}
interface IReproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: IDetalles
}

const reproductor : IReproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

console.log(`El volumen actual es: ${reproductor.volumen}`)
console.log(`El segundo actual es: ${reproductor.segundo}`)
console.log(`La canción actual es: ${reproductor.cancion}`)
console.log(`El autor ese: ${reproductor.detalles.autor}`)

console.log('---------------------------------------')

const { volumen, segundo, cancion, detalles } = reproductor
const { autor, anio } = detalles
//const { volumen, segundo, cancion, detalles:{autor} } = reproductor //otra opción

console.log(`El volumen actual es: ${volumen}`)
console.log(`El segundo actual es: ${segundo}`)
console.log(`La canción actual es: ${cancion}`)
console.log(`La autor es: ${autor}`)


/* DESESTRUCTURACION DE ARREGLOS */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 3: ${dbz[2]}`)

console.log('---------------------------------------')

const [ p1, p2, p3 ] = dbz;
console.log(`Personaje 1: ${p1}`)
console.log(`Personaje 2: ${p2}`)
console.log(`Personaje 3: ${p3}`)

console.log('---------------------------------------')
const [ , , per3 ] = dbz;
console.log(`Personaje 1: ${per3}`)