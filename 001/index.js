/**
 * Brute Force
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
		for(let j = i+1; j < nums.length;j++){
			if(nums[i] + nums[j] === target) {
				return [i, j];
			}
		} 
	}
    return false;
};

/**
 * Map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();
    for(let i=0; i < nums.length; i++){
        let tmp = target - nums[i];
		if (m.has(tmp)) {
            return [m.get(tmp), i];
        }
        m.set(nums[i], i);
	}
    return false;
};