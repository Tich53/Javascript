const degreesTab1 = [17, 21, 23];
const degreesTab2 = [12, 5, -5, 0, 4];

function forecast (array){
    for (let i = 0; i < array.length; i++){
        if (i === 0){
            console.log(`${array[i]} degrés dans ${i+1} jour,`);
        } else if (i+1 < array.length) {
            console.log(`${array[i]} degrés dans ${i+1} jours,`);
        } else {
            console.log(`${array[i]} degrés dans ${i+1} jours.`);
        }
    }
}
console.log(forecast(degreesTab1));
console.log(forecast(degreesTab2));