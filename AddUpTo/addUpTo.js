 

function addUpTo(n){
    let total = 0;

    for(let i = 1; i <= n; i++){
        //The loop compare the index with the value of the input
        // is Index less or equal to the value of input?
        // in this example input is 6, so first loop does is index 1 compare with 6 
        // is index 1 less or equal to 6? this is false so we add 1 to total variable
        // second loop is 2 less or equal 6? this is false again and add 2 to the current value of total which is 1 so total now is 3
        // when the loop get to the input of 6 the loop will stop comparing
        console.log("i", i, "n", n)
        console.log("total",total += i)
    }
    return total
}



console.log(addUpTo(6))