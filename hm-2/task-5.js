const checkForSpam = function(message) {
    let MyStr = message.split(/\b/);

  for (let i = 0; i < MyStr.length; i++) {
    let word = MyStr[i].toLowerCase();

    if (word === 'spam' || word === 'sale') {
      return true;
    }

    
  }
   return false;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true