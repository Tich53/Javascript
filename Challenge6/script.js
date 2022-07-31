let dauphinsScore1 = prompt("Dauphins - Score1:");
dauphinsScore1 = parseFloat(dauphinsScore1);
let dauphinsScore2 = prompt("Dauphins - Score2:");
dauphinsScore2 = parseFloat(dauphinsScore2);
let dauphinsScore3 = prompt("Dauphins - Score3:");
dauphinsScore3 = parseFloat(dauphinsScore3);

let koalasScore1 = prompt("Koalas - Score1:");
koalasScore1 = parseFloat(koalasScore1);
let koalasScore2 = prompt("Koalas - Score2:");
koalasScore2 = parseFloat(koalasScore2);
let koalasScore3 = prompt("Koalas - Score3:");
koalasScore3 = parseFloat(koalasScore3);

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDauphins = calcAverage(dauphinsScore1, dauphinsScore2, dauphinsScore3);
const averageKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(`La moyenne des Dauphins est de ${averageDauphins}`);
console.log(`La moyenne des Koalas est de ${averageKoalas}`);

function checkWinner(averageDauphins, averageKoalas) {
    if (averageDauphins >= averageKoalas * 2){
        console.log (`L’équipe Dauphins gagne (${averageDauphins} vs ${averageKoalas})`);
    } else if (averageKoalas >= averageDauphins*2){
        console.log (`L’équipe Koala gagne (${averageKoalas} vs ${averageDauphins})`);
    } else {
        console.log("pas de gagnant");
    }
}

console.log (checkWinner(averageDauphins, averageKoalas));