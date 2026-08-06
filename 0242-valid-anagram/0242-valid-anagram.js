/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let txt1=s.split("").sort().join("")
    let txt2=t.split("").sort().join("")
    if(s.length===t.length&&txt1===txt2){
       return true
    }
    else{
        return false
    }
};