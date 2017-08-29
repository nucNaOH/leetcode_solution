/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) 
        return
    // 找到尾部最长的递减序列长度
    let j = nums.length - 2;

    while (j >= 0 && nums[j] >= nums[j + 1]) {
        j--;
    }
    if (j === -1) {
        reverse(nums, 0)
    } else {
        // 从递减序列里找到nums[j]大的第一个数与num[j]交换
        let i = j + 1;
        while (i < nums.length) {
            if (nums[j] >= nums[i]) {
                break;
            }
            i++;
        }
        const t = nums[i-1];
        nums[i-1] = nums[j];
        nums[j] = t;
        reverse(nums, j + 1)
    }
    // return nums
};

var reverse = function (nums, start) {
    for (let i = start, j = nums.length - 1; i < j; i++, j--) {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
}

// reverse([1,4,3], 1)

// console.log(nextPermutation([3,2,1]))
