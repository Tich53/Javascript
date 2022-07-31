const Bernard1 = {
    prenom: "Bernard",
    poids: 78,
    taille: 1.69,
    calcBMI : function(){
        return (this.poids / Math.pow(this.taille, 2));
    }
};

const Marcel1 = {
    prenom: "Marcel",
    poids: 92,
    taille: 1.95,
    calcBMI : function(){
        return (this.poids / Math.pow(this.taille, 2));
    }
};

const Bernard2 = {
    prenom: "Bernard",
    poids: 95,
    taille: 1.88,
    calcBMI : function(){
        return (this.poids / Math.pow(this.taille, 2));
    }
};

const Marcel2 = {
    prenom: "Marcel",
    poids: 85,
    taille: 1.76,
    calcBMI : function(){
        return (this.poids / Math.pow(this.taille, 2));
    }
};



Bernard1.IMC = Bernard1.calcBMI().toFixed(2);
console.log(Bernard1);

Marcel1.IMC = Marcel1.calcBMI().toFixed(2);
console.log(Marcel1);


if (Bernard1.IMC > Marcel1.IMC){
    console.log(`L’IMC de Bernard (${Bernard1.IMC}) est plus élevé que celui de Marcel (${Marcel1.IMC})`)
} else {
    console.log(`L’IMC de Marcel (${Marcel1.IMC}) est plus élevé que celui de Bernard (${Bernard1.IMC})`)
}



Bernard2.IMC = Bernard2.calcBMI().toFixed(2);
console.log(Bernard2);

Marcel2.IMC = Marcel2.calcBMI().toFixed(2);
console.log(Marcel2);


if (Bernard2.IMC > Marcel2.IMC){
    console.log(`L’IMC de Bernard (${Bernard2.IMC}) est plus élevé que celui de Marcel (${Marcel2.IMC})`)
} else {
    console.log(`L’IMC de Marcel (${Marcel2.IMC}) est plus élevé que celui de Bernard (${Bernard2.IMC})`)
}