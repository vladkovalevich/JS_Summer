let message = confirm("Введите число");
let summa = 0;

while(message){
    message = +prompt("Введите число");
    summa = summa + message;
    console.log(summa);
}
alert("Общая сумма чисел равна "+summa);


