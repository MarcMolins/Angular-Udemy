/*
    ===== Código de TypeScript =====
*/

/*
class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string; //Se puede acceder sin crear una instancia

    constructor( alterEgo:string ) {
        this.alterEgo = alterEgo
    }
}
*/
class PersonaNormal {
    constructor( public nombre: string, public direccion: string ) {}
}
/* versión corta */
class Heroe extends PersonaNormal {
    constructor(
        public alterEgo:string,
        public edad?: number,
        public nombreReal?: string
        ) {
            super(nombreReal, 'New York');
        }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman)

