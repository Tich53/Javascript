const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(total);

function calcTip(amount) {
    if (amount >= 50 && amount <= 300) {
        return amount * 0.15;
    } return amount * 0.2;
}

console.log(`Les notes sont de ${bills} €`);
console.log(`Les pourboires sont respectivement de ${tips} €`);
console.log(`Les totaux sont respectivement de ${total} €`);