/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const disappeareNumbers = [];
    const allNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        allNumbers[i] = 0;
    }
    
    for (let num of nums) {
        allNumbers[num-1] = 1;
    }
    
    allNumbers.map((d, i) => {
        if (d === 0) {
            disappeareNumbers.push(i+1);
        }
    })
    return disappeareNumbers;
};