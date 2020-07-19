let credits = 23580;
const pricePerDroid = 3000;
const numberDroids = +prompt("Сколько дроидов купить");
console.log(typeof numberDroids);
// if (numberDroids == 0) {
//     alert("Отменено пользователем");
// } else {
//     const Totalvalue = pricePerDroid * numberDroids;
//     if (Totalvalue > credits) {
//         alert("Не достаточно денег на счету");
//     } else {
//         credits = credits - Totalvalue;
//         alert("Вы купили " + numberDroids + " дроидов, на счету осталось " + credits + "  кредитов.");
//     }

// }
if(numberDroids == 0){
    alert("Отменено пользователем")
}else if(numberDroids === NaN){
    alert("Nan")

}