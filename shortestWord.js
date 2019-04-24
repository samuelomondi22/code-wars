function findShort(s){
    const arr = s.split(" ");
    const s_length = [];
    arr.map((e => s_length.push(e.length)));
    let min = s_length[0];
    for(let i = 1; i<s_length.length ; i++){
    if(s_length[i]<min){
    min = s_length[i];
    }
  }
  return min;
}
console.log(findShort("due to the killing of "))

//
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));//Math.min finds the lowest and apply just does what it says//.map turns the elements strings into elements length 
  }
  console.log(findShort("due to the killing of "))

  //
  function findShort(s){
    return s.split(' ').sort(function(a,b){return a.length - b.length})[0]
  }
  console.log(findShort("due to the killing of"));