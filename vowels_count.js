function vowels(s){
    var m = s.match(/[aeiou]/gi);
    return m === null ? 0: m.length;
};
console.log(vowels("banana"));

function vowels(s){
    getCount = 0;
    var m = s.match(/[aeiou]/gi);
    return m === null ? 0: getCount=m.length;
};
console.log(vowels("banana"));






s = "the string is such a new thing ma man"

function short(s){
    let array = s.split(' '); // ["the" ,"string"," "is" ,"such" ,"a" ,"new" ,"thing" ,"ma","man"]
    return array.sort((a,b )=>{ a.length - b.length})[0];
}
console.log(short("the string is such a new thing ma man"));