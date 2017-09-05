/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !== r * c) {
        return nums;
    } else {
        let a = [], b = [];
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums[i].length; j++) {
                b.push(nums[i][j]);
                count++;
                if (count === c) {
                    a.push(b);
                    count = 0;
                    b = [];
                }
            }
        }
        return a;
    }
};