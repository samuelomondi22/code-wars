function sortArray(arr){
    let oddArr = [];
    let evenArr = [];
    let results = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]); //loops through the arr length and pushes all the even numbers [2, 8, 4]
        }else {
            oddArr.push(arr[i]); //loops through the arr length and pushes all the odd numbers [5, 3, 1]
        }
    }
    oddArr.sort((a,b )=> a - b); //sorts the oddArr to [1, 3, 5]

for(let i = 0;i<arr.length; i++){ 
    if(arr[i] % 2 === 0){
        results.push(evenArr.shift()); //loops through the arr length[5, 3, 2, 8, 1, 4] and pushes all the even numbers from this array [2, 8, 4] to results[]. 
    }else{
        results.push(oddArr.shift()); //loops through the arr length[5, 3, 2, 8, 1, 4] and pushes all the odd numbers from this array [1, 3, 5] to results[].
    }                                  //so the loop goes through [5, 3, 2, 8, 1, 4] and see the first element is not an even number so it goes to push from the oddArr, that is [1]
                                        //does same thing , second still odd goes to oddArr and pushes [3],next is even so pushes from evenArr[2], giving you at the end [1, 3, 2, 8, 5, 4]
}
    return results;
}
sortArray([5, 3, 2, 8, 1, 4]);