"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
// Implémentation de la classe Voiture qui implémente Véhicule
class Voiture {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
exports.Voiture = Voiture;
