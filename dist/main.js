"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importation de la classe Voiture depuis vehicule.ts
const vehicule_1 = require("./vehicule");
// Création d'une instance de Voiture
let myCar = new vehicule_1.Voiture("Toyota", "Camry", 2023);
// Appel de la méthode start pour vérification
myCar.start();
