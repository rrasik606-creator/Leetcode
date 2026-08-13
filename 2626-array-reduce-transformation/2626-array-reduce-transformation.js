/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
let initial=init;
for(let i=0; i<nums.length; i++){
    initial=fn(initial,nums[i])
}
return initial 
};