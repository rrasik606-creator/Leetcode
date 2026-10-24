/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let array=nums.sort((a,b)=>a-b)
    let n=array.length;
      a=array[0]*array[1]*array[n-1]
      b=array[n-1]*array[n-2]*array[n-3]
      return Math.max(a,b)
};
