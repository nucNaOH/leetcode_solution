/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        // let real_mid;
        // find real mid: means the right most of the same num
        if (nums[mid] === nums[mid - 1]) {
            ;
        } else if (nums[mid] === nums[mid + 1]) {
            mid = mid + 1
        } else {
            return nums[mid]
        }
        // move left | right
        if ((mid - left) % 2 === 0) {
            right = mid - 2;
        } else {
            left = mid + 1
        }
        // console.log('mid:', real_mid, 'left:', left, 'right', right)
    }
};
