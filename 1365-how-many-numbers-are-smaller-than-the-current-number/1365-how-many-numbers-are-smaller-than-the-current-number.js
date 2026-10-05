/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
let array=[];
for(let i=0; i<nums.length; i++){
    let count=0;
    for(j=0;j<nums.length;j++){
        if(nums[j]<nums[i]){
            count++
        }
    }
    array.push(count);
}    
   return array;
};