/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    } 
    if (nums.length === 1) 
        return new TreeNode(nums[0]);
    
    let tree = null;
    let maxValue = nums[0], maxValueIndex = 0;
    let i = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
            maxValueIndex = i;
        }
    }
    
    tree = new TreeNode(maxValue);
    tree.left = constructMaximumBinaryTree(nums.slice(0, maxValueIndex));
    tree.right = constructMaximumBinaryTree(nums.slice(maxValueIndex + 1, nums.length));
    
    
    return tree;
};