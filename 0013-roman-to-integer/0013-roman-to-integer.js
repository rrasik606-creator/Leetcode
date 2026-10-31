/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const object={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};

    let count=0;

    for(let i=0;i<s.length;i++){

        let current=object[s[i]];
        let next=object[s[i+1]];

        if(current<next){
            count-=current;
        }
        else{   
            count+=current;
        }

    }

    return count
};