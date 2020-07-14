let credits = 23580 ;
const pricePerDroid = 3000;
const numberDroids = prompt("Сколько дроидов купить");
if(numberDroids == false){
    alert("Отменено пользователем");
}
const priceDroids = pricePerDroid * numberDroids;


if(credits > priceDroids){
    credits = credits - priceDroids;
    alert("Вы купили " +numberDroids+ " дроидов, на счету осталось "+credits+"  кредитов.");
}