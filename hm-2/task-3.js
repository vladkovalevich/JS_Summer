const findLongestWord = function(str) {
    let myStr = str.split(" ");
    let myLength = myStr[0].length;
    let myLong = myStr[0];
    for (let i = 1; i < myStr.length; i += 1) {
      
      if (myStr[i].length > myLength) {
        myLong = myStr[i];
        myLength = myStr[i].length;
      }
  
    }
    return myLong;

  };
  

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
  
  console.log(findLongestWord("Google do a roll")); // вернет 'Google'
  
  console.log(findLongestWord("May the force be with you")); // вернет 'force'