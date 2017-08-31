/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (nums[i] > nums[i+2] && nums[i-1] > nums[i+1]) {
                return false
            }
            count++;
            if (count > 1) {
                return false
            }
        }
    }
    return true;
};