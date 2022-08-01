const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip;
const tipsArray = [];
const total = [];


function calcTip(amount) {
    if (amount >= 50 && amount <= 300) {
        tip = amount * 0.15;
    } else {
        tip = amount * 0.2;
    }
    tipsArray.push(tip);
    total.push(amount + tip)
}
for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}

function calcAverage(array) {
    const initialValue = 0;
    const sumWithInitial = array.reduce((previousValue, currentValue) => previousValue + currentValue,
    initialValue);
    return sumWithInitial / array.length;
}

console.log(`Note = ${bills}`);
console.log(`Tips = ${tipsArray}`);
console.log(`Total = ${total}`);
console.log(`Moyenne du total des notes = ${calcAverage(total)}`);