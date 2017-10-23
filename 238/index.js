/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1, zero_counter = 0;
    // calculate all the product of none zero nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            product *= nums[i]
        } else {
            if (zero_counter > 1) {
                break;
            }
            zero_counter++;
        }
    }
    // number of zero > 1
    if (zero_counter > 1) {
        return nums.map(d => 0)
    } else if (zero_counter === 1) {
        return nums.map(d => d === 0 ? product : 0)
    } else {
        return nums.map(d => product / d)
    }
};