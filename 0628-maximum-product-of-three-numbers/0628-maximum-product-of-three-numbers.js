/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let count1=1;
    let count2=1;
    let array=nums.sort((a,b)=>a-b)
    let n=array.length;
      count1=array[0]*array[1]*array[n-1]*count1
      count2=array[n-1]*array[n-2]*array[n-3]*count2
      return Math.max(count1,count2)
};
console.log(maximumProduct([-100,-98,-1,2,3,4]))
