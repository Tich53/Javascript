const dauphins = {
    score1: 1,
    score2: 108,
    score3: 89,
}

const koalas = {
    score1: 10,
    score2: 108,
    score3: 89,
}

function average(a, b, c) {
    return (a + b + c) / 3;
}

const averageDauphins = average(dauphins.score1, dauphins.score2, dauphins.score3);
console.log(`Score moyen Daulphins: ${averageDauphins.toFixed(2)}`);

const averageKoalas = average(koalas.score1, koalas.score2, koalas.score3);
console.log(`Score moyen Koalas: ${averageKoalas.toFixed(2)}`);

if (averageDauphins > averageKoalas) {
    if (averageDauphins < 100) {
        console.log("Pas de gagnant");
    } else {
        console.log("Le gagnant est 'Dauphins'");
    }
} else if (averageDauphins < averageKoalas) {
    if (averageKoalas < 100) {
        console.log("Pas de gagnant");
    } else {
        console.log("Le gagnant est 'Koalas'");
    }
} else {
    console.log("Egalité");
}
