/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let array= nums.filter((item)=>nums.indexOf(item)===nums.lastIndexOf(item))
return array.pop()
};