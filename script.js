'use strict';
const weightBernard = 95;
const heightBernard = 1.88;
const weightMarcel = 85;
const heightMarcel = 1.76;
let imcBernard;
let imcMarcel;
let bernardHigherIMC;

imcBernard = weightBernard / (heightBernard * heightBernard);
console.log("l'IMC de Bernard est de " + imcBernard.toFixed(2));

imcMarcel = weightMarcel / (heightMarcel * heightMarcel);
console.log("l'IMC de Marcel est de " + imcMarcel.toFixed(2));

if (imcBernard > imcMarcel) {
    bernardHigherIMC = `Bernard a un IMC (${imcBernard.toFixed(2)}) plus élevé que Marcel (${imcMarcel.toFixed(2)})`;
} else {
    bernardHigherIMC = `Marcel a un IMC (${imcMarcel.toFixed(2)}) plus élevé que Bernard (${imcBernard.toFixed(2)})`;
}
console.log(bernardHigherIMC);

// Exercice 3

let weight = prompt("Quel est ton poids ?");
weight = parseFloat(weight);
let height = prompt("Quel est ta taille ?");
height = parseFloat(height);
const imc = weight / (height * height);
console.log(height);
console.log(weight);
console.log(`Ton IMC est de ${imc.toFixed(2)}`);

if (imc < 20) {
    console.log("Tu es en insuffisance pondérale");
} else if (imc <= 25) {
    console.log("Tu as un poids normal");
} else if (imc <= 30) {
    console.log("Tu es en surpoids");
} else if (imc <= 40) {
    console.log("Tu es en obésité");
} else {
    console.log("Tu es en obésité importante");
}




