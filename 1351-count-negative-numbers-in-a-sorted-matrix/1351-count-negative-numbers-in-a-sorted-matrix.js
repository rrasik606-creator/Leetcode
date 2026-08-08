/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result=0;
    for(array of grid){
        for(item of array){
            if(item<0){
                result+=1;
            };
        };
    };
    return result;
};