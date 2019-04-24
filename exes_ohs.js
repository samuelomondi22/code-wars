function xo(str){
    xCount = '';
    oCount = '';
    for(var i = 0; i<str.length;i++){
        if(str[i] === "o" || str[i]==="O"){
            oCount++;
        }
        else if(str[i] === "x" || str[i]==="X"){
            xCount++
        }
    }
    return oCount === xCount;
}

console.log(xo("xxxooo"));

//or
function xo(str){
    const str1 = str.toLowerCase();
    xCount = '';
    oCount = '';
    for(var i = 0; i<str1.length;i++){
        if(str1[i] === "o"){
            oCount++;
        }
        else if(str1[i] === "x"){
            xCount++
        }
    }
    return oCount === xCount;
}

console.log(xo("xXoOo"));

//or
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
console.log(XO("xXXoOo"));


//or
function XO(s){
    return s.toLowerCase().split('o').length;
}
console.log(XO("xXXoOo"));