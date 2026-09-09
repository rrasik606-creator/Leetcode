/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            result = num;
        }

        if (num === result) {
            count++;
        } else {
            count--;
        }
    }

    return result;
};