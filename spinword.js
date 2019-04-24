function spinWords(str){
    var strArr = str.split(' '); //turn to array
    
    strArr.forEach(function(word, index) {
      if (word.length >= 5) { //if element in that array is greater than or equals 5 the take that element,split and reverse then
        strArr[index] = word.split('').reverse().join('');
      }
    })
    return strArr.join(' ');
  }
  
  console.log(spinWords( "Hey fellow warriors" ));
  console.log(spinWords( "This is a test"));  
  console.log(spinWords( "This is another test" ));

  //or
  function spinWords(str){
    return str.split(' ')
      .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
      .join(' ');
  }



function count(s){
    let array = s.toLowerCase();
   return array.split('x').length === array.split('o');
}

console.log(count("xXoOxO"));

function count(s){
  let oCount = '';
  let xCount = '';
  let array = s.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'o') {
      oCount++;
    }else if(array[i] === 'x'){
     xCount++;
    }
  }
  return oCount === xCount;
}

console.log(count("xxooxo"));