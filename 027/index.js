/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p = 0, i = 1;
    while (true) {
        // 将删除后待插入的值，放在p的后一个位置
        if (i !== p + 1) {
            nums[p+1] = nums[i]
        }
        if (nums[p] === val) {
            // 也可以为：nums[p] = nums[i];
            nums[p] = nums[p+1];
        } else {
            p++;
        }
        if (i++ >= nums.length) {
            break;
        }
    }
    return p;
};

var a = [1,2,2,4,3,2,3]
// var a = [2,2]
// var a = []

var len = removeElement(a, 2)

console.log(len, a)