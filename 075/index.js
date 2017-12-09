/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var start = 0, end = nums.length - 1, p = 0;

    while (p <= end) {
        if (nums[p] == 0) {
            [nums[start], nums[p]] = [nums[p], nums[start]];
            p++;
            start++;
        }
        else if (nums[p] == 2) {
            [nums[end], nums[p]] = [nums[p], nums[end]];
            end--;
        }
        else {
            p++;
        }
    }
}