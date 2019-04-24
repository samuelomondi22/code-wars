function duplicateCount(text) {
    letters = text.toLowerCase().split(''); //turns all to lowercase and turns em to an array
      var textCount = {};
      repeatCount = 0;
      
      for (var i = 0; i < letters.length; i++) {
        letter = letters[i];
        if (textCount[letter]) {
          textCount[letter]++;
        } else {
          textCount[letter] = 1;
        }
      }
      
      for (var letter in textCount) {
        if (textCount[letter] > 1) {
           repeatCount++;
        }
      }
      return repeatCount;
    }
duplicateCount('aabbbcdde')
//or
    function duplicateCount(text){
        text = text.toLowerCase()
        return text.split('').filter(function (c, i) {
          return text.indexOf(c) == i && text.indexOf(c) != text.lastIndexOf(c)
        }).length
      }