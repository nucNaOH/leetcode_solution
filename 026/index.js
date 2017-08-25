/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[p]) {
            nums[++p] = nums[i];
        }
    }
    return p + 1;
};

// var a = [1,1,1,2,2,3,3,4,4,4,7,7]

// var len = removeDuplicates(a)

// console.log(len, a)