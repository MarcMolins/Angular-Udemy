/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//una Interface es un tipo de dato que controla que un objeto luzca como nosotros queramos
interface IPersonaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}
const personaje: IPersonaje = {
    nombre: 'Marc',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
personaje.puebloNatal = 'Pueblo Paleta';
console.table(personaje)