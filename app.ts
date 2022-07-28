
// Objetos
type Car = {
    carbody: string,
    model: string,
    bulletproof: boolean,
    passanger: number
    shoot?: () => void
};

const batimovil: Car = {
    carbody: "Negra",
    model: "6x6",
    bulletproof: true,
    passanger: 4
};

const bumblebee: Car = {
    carbody: "Amarillo con negro",
    model: "4x2",
    bulletproof: true,
    passanger: 4,
    shoot() { // El metodo disparar es opcional
        console.log("Disparando");
    }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villain = {
    name: string,
    age: number | undefined,
    mutant: boolean
};

const villains: villain[] = [{
    name:"Lex Luthor",
    age: 54,
    mutant:false
}, {
    name: "Erik Magnus Lehnsherr",
    age: 49,
    mutant: true
}, {
    name: "James Logan",
    age: undefined,
    mutant: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type hero = {
    power: string,
    height: number
};

type squad = {
    leader: boolean,
    member: string[];
};

const charles: hero = {
    power: "psiquico",
    height: 1.78
};

const apocalipsis: squad = {
    leader: true,
    member: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: hero | squad;

mystique = charles;
mystique = apocalipsis;
