  function findShort(s){
    return s.split(' ').sort(function(a,b){return a.length - b.length})[0]
  }
  console.log(findShort("due to the killing of"));