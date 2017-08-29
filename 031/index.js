/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    backTracking([], result, nums);
    return result
};

const backTracking = function (tmp, result, nums) {
    if (tmp.length === nums.length) {
        result.push(Array.from(tmp))
    } else {
        for (var i = 0; i < nums.length; i++) {
            if (tmp.indexOf(nums[i]) !== -1) {
                continue
            }
            tmp.push(nums[i]);
            backTracking(tmp, result, nums);
            tmp.pop();
        }
    }
}

// console.log(permute([1,2,3]))
