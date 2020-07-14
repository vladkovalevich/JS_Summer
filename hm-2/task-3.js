const findLongestWord = function(str) {
    let Mystr = str.split(' ');
    let Mylength = 0;
    let Mylong;
  
    for (let i = 0; i < Mystr.length; i += 1) {
        Mylength = str[1].length;
  
      if (Mystr[i].length > Mylength) {
        Mylong = Mystr[i];
  
        return Mylong;
      }
  
    }
  };
  

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
  
  console.log(findLongestWord("Google do a roll")); // вернет 'Google'
  
  console.log(findLongestWord("May the force be with you")); // вернет 'force'