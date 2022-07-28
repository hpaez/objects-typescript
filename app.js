"use strict";
const batimovil = {
    carbody: "Negra",
    model: "6x6",
    bulletproof: true,
    passanger: 4
};
const bumblebee = {
    carbody: "Amarillo con negro",
    model: "4x2",
    bulletproof: true,
    passanger: 4,
    shoot() {
        console.log("Disparando");
    }
};
const villains = [{
        name: "Lex Luthor",
        age: 54,
        mutant: false
    }, {
        name: "Erik Magnus Lehnsherr",
        age: 49,
        mutant: true
    }, {
        name: "James Logan",
        age: undefined,
        mutant: true
    }];
const charles = {
    power: "psiquico",
    height: 1.78
};
const apocalipsis = {
    leader: true,
    member: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
