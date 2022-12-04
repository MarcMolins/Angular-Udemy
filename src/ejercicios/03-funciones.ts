/*
    ===== Código de TypeScript =====
*/
function suma(a: number, b: number): number{
    return a + b
}
const resultado = suma(3, 7);
console.log(resultado)

const sumaFlecha = (a: number, b: number): number => a + b;

function multiplicar(num: number, base: number = 2, otroNum?: number){
    return num * base
}
const resultadoMultiplicacion = multiplicar(7, 8)
console.log(resultadoMultiplicacion);

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHP?: () => void
}
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    hp: 50,
    mostrarHP(){
        console.log(this.hp)
    }
}

function curar(personaje: PersonajeLOR, cantidad: number): void {
    personaje.hp += cantidad;
    console.log(personaje)
}
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
