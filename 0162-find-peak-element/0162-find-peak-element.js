/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
let num= nums.reduce((current,item)=>current>item?current:item)
return nums.indexOf(num)
};