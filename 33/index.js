/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    // find the pivot with Binary Search
    while (l < r) {
        const m = Math.floor((l+r)/2);
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    // console.log('pivot: ', l);
    const pivot = l;
    //  Binary Search with the pivot
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        const m = Math.floor((l+r)/2);
        const m_pivot = (m + pivot) % nums.length;
        if(nums[m_pivot] === target) {
            return m_pivot;
        }
        if (nums[m_pivot] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return -1;
};