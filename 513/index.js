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
var findBottomLeftValue = function(root) {
    const quene = [];
    quene.push(root);
    
    let result;
    while (quene.length !== 0) {
        let count = quene.length;
        result = quene[0];
        while (count--) {
            const node = quene.shift();
            // console.log(node.val);
            if (node.left) quene.push(node.left);
            if (node.right) quene.push(node.right);
        }
    }
    return result.val;
};