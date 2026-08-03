/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const clean=s.replace(/[^a-zA-Z0-9\s]/g,'').split(" ").join("").toLowerCase()
    const reverse= clean.split(" ").reverse().map((item)=>item.split("").reverse().join("")).join("").toLowerCase()
    if(clean===reverse){
        return true
    }
    else{
        return false
    }
};