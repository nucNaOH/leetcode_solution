/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1, end = -1, tmp;
    // 二分查找
    const index = binarySearch(nums, target, 0, nums.length);
    if (index !== -1) {
        // 向左二分查找
        tmp = index;
        do {
            start = tmp;
            tmp = binarySearch(nums, target, 0, start - 1)
        } while (start > 0 && tmp !== -1)
        // 向右二分查找
        tmp = index;
        do {
            end = tmp;
            tmp = binarySearch(nums, target, end + 1, nums.length);
        } while (end + 1 < nums.length && tmp !== -1)
    }
    return [start, end];
};

var binarySearch = function(arr, target, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    // 向左（小）找
    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    // 向右（大）找
    } else if (target > arr[mid]) {
        return binarySearch(arr, target, mid + 1, end);
    // 找到了
    } else if (target === arr[mid]) {
        return mid;
    // 没找到
    } else {
        return -1;
    }
};