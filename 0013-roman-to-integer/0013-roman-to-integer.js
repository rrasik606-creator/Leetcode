/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const object={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let count=0;
    for(let i=0;i<s.length;i++){
        if(object[s[i]]<object[s[i+1]]){
            count-=object[s[i]];
        }
        else{   
            count+=object[s[i]];
        }
    }
    return count
};