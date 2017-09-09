/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    const result = []
    // 先排序，再用p、q两个指针分别向中间靠近，同时注意去掉重复。
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let target = 0 - nums[i];
        // 设置 p、q 一前一后两个指针。
        let p = i + 1;
        let q = nums.length - 1;
        while (p < q) {
            let sum = nums[p] + nums[q];
            if (sum > target) {
                q--;
            } else if (sum < target) {
                p++;
            } else {
                const tmp = [nums[i], nums[p], nums[q]]
                result.push(tmp);
                // 去重
                while (p < q && nums[p] === tmp[1]) p++;
                while (p < q && nums[q] === tmp[2]) q--;
            }
        }
        // 去重
        while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
    }
    return result;
};

const test = [12,5,-12,4,-11,11,2,7,2,-5,-14,-3,-3,3,2,-10,9,-15,2,14,-3,-15,-3,-14,-1,-7,11,-4,-11,12,-15,-14,2,10,-2,-1,6,7,13,-15,-13,6,-10,-9,-14,7,-12,3,-1,5,2,11,6,14,12,-10,14,0,-7,11,-10,-7,4,-1,-12,-13,13,1,9,3,1,3,-5,6,9,-4,-2,5,14,12,-5,-6,1,8,-15,-10,5,-15,-2,5,3,3,13,-8,-13,8,-5,8,-6,11,-12,3,0,-2,-6,-14,2,0,6,1,-11,9,2,-3,-6,3,3,-15,-5,-14,5,13,-4,-4,-10,-10,11];
const test2 = [-1,0,1,2,-1,-4];

console.log(threeSum(test2))
