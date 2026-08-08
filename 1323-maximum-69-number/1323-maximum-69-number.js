/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let result=String(num).replace("6","9");
    return Number(result);
};