# Projet TypeScript : Implémentation d'une Interface et d'une Classe

## Description
Ce projet est une implémentation simple en **TypeScript** d'une interface nommée `Véhicule` et d'une classe `Voiture` qui l'implémente. L'objectif est de démontrer l'utilisation des interfaces et des classes en TypeScript, tout en respectant les bonnes pratiques de programmation.

## Structure du Projet
```
/Checkpoint_TypeScript_Fundamentals
│── vehicule.ts
│── main.ts
│── tsconfig.json
│── dist/
```

## Fonctionnalités
- Définition d'une interface `Véhicule` avec les propriétés `make`, `model`, `year` et une méthode `start()`.
- Implémentation d'une classe `Voiture` qui respecte l'interface `Véhicule`.
- Instanciation d'un objet `Voiture` et appel de la méthode `start()`.
- Compilation du TypeScript en JavaScript et exécution avec Node.js.

## Installation et Exécution

### 1️ Installation de TypeScript
```sh
npm install -g typescript
```

### 2️ Cloner le projet
```sh
git clone https://github.com/1306BENIE/Checkpoint_TypeScript_Fundamentals.git
cd Checkpoint_TypeScript_Fundamentals
```

### 3️ Compilation du code TypeScript
```sh
tsc
```

### 4️ Exécution du code compilé avec Node.js
```sh
node dist/main.js
```
**Sortie attendue :**
```
Car engine started
```

### 💡 Alternative : Exécution directe avec ts-node (sans compilation)
```sh
npm install -g ts-node
```
Puis exécuter :
```sh
ts-node main.ts
```


##  Contact
Si vous avez des questions, n'hésitez pas à me contacter via [LinkedIn](www.linkedin.com/in/sylvestre-benie) ou par email : **sylvestrebenie7829@gmail.com**

