/*
    ===== Código de TypeScript =====
*/

class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string; //Se puede acceder sin crear una instancia
}

const ironman = new Heroe();
console.log(ironman)