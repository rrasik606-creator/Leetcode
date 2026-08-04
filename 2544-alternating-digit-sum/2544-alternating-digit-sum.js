/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum=0;
    let sign=1;
    let nstr=String(n)
    for(let item of nstr){
        sum+=Number(item)*sign;
        sign=-sign;
    }
    return sum
};