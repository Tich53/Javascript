const weightBernard = 95;
const heightBernard = 1.88;
const weightMarcel = 85;
const heightMarcel = 1.76;
let imcBernard;
let imcMarcel;
let bernardHigherIMC;

imcBernard = weightBernard/(heightBernard*heightBernard);
console.log ("l'IMC de Bernard est de " +imcBernard.toFixed(2));

imcMarcel = weightMarcel/(heightMarcel*heightMarcel);
console.log ("l'IMC de Marcel est de " + imcMarcel.toFixed(2));

if (imcBernard>imcMarcel){
    bernardHigherIMC = `Bernard a un IMC (${imcBernard.toFixed(2)}) plus élevé que Marcel (${imcMarcel.toFixed(2)})`;
} else {
    bernardHigherIMC = `Marcel a un IMC (${imcMarcel.toFixed(2)}) plus élevé que Bernard (${imcBernard.toFixed(2)})`;
}
console.log (bernardHigherIMC);
console.log ("Bernard: insuffisance pondérale");
console.log ("Marcel: surpoids");