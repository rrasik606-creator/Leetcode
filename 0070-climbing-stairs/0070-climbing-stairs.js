/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let firststep=1;
    let secondstep=2;

    for(let i=3;i<=n;i++){
        let currentstep=firststep+secondstep;

        firststep=secondstep;
        secondstep=currentstep;
    }
    return secondstep;
    
};
