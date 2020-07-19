const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt("Введите пороль");
if(message === ADMIN_PASSWORD){
  alert("Правильний пороль");
}else if(message  === null){
  alert("Вход отменен пользователям");
}else{
    alert("Пороль не правельный");
}
