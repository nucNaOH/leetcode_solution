/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let result = find(root, root.val);
    return result === root.val ? -1 : result;
};

var find = function (node, val) {
    if (node.left) {
        let left = find(node.left, val);
        let right = find(node.right, val);
        let result;
        if (left > right) {
            if (right === val) {
                result = left;
            } else {
                result = right;
            }
        } else {
             if (left === val) {
                result = right;
            } else {
                result = left;
            }
        }
        // console.log(left, right, val, result);
        return result;
    } else {
        return node.val;
    }
};


