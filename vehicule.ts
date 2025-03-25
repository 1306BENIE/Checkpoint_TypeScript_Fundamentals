// Définition de l'interface Véhicule
interface Véhicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Voiture qui implémente Véhicule
class Voiture implements Véhicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  start(): void {
      console.log("Car engine started");
  }
}

// Export de la classe Voiture
export { Voiture };
