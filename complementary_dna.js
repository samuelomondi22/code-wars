function DNAStrand(dna){
    let complement = '';
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === 'T'){
        complement += 'A';
      }
      if(dna[i] === 'A'){
        complement += 'T';
      }
      if(dna[i] === 'C'){
        complement += 'G';
      }
      if(dna[i] === 'G'){
        complement += 'C';
      }
    }
    return complement;
  }
  
  console.log(DNAStrand('GTAT'));





  function reverse(array) {
    array.forEach((e, i) => {
      if (e.length >=3) {
        array[i] = e.split('').reverse().join('')
      } 
        });
        return array[i]
      }

console.log(reverse(['i', 'love','her','so', 'much']))

