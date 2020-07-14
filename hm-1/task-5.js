let message = prompt("Страна").toLowerCase();
console.log(message);
switch (message) {
    case "китай":
        alert("В Китай 100 кридитов");
        break;
    case "чили":
        alert("В Чили 250 кридитов");
        break;
    case "австралия":
        alert("В Австралию 170 кредитов");
        break;
    case "индия":
        alert("В Индию 80 кридитов");
        break;
    case "ямайка":
        alert("В Ямайку 120 кридитов");
        break;
    default:
        alert("В вашей стране доставка не доступна");
        break;
  }