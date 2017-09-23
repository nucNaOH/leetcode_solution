/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    return nums.reduce((accumulator, currentValue, currentIndex, array) => {
        // console.log(accumulator, currentValue, currentIndex);
        if (currentIndex % 2 === 0) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0)
};