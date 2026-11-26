/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let stone=10;
    while(n>=stone){
        n-=stone;
        stone--
    }
    return stone%2===1
};