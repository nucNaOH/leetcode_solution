/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const len = nums.length;
    const hashTable = [];
    const duplicatedNums = [];
    // init
    for (let i = 0; i <= len; i++) {
        hashTable[i] = 0;
    }
    for (let i = 0; i < len; i++) {
        hashTable[nums[i]]++;
    }
    console.log(hashTable);
    for (let i = 0; i <= len; i++) {
        if (hashTable[i] === 2) {
            duplicatedNums.push(i);
        }
    }
    return duplicatedNums;
};