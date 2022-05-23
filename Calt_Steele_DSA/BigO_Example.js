

function logAtLeast5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
}
logAtLeast5(4)
//Time Complexity for this function is O(n)
// As n grows the loop grows

function longAtMost5(n){
    for (let i = 1; i <= Math.min(5, n); i++){
        console.log(i)
    }
}
longAtMost5(6)
// Time Complexity for the longAtMost5 function is 0(1)
// As n grows the loop hit 5 and is constant line the n will not grow after number 5