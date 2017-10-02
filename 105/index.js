/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;

    const tree = new TreeNode(preorder[0]);
    
    const len = preorder.length;
    for (let i = 0; i < len; i++) {
        if (tree.val === inorder[i]) {
            tree.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
            tree.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
            break;
        }
    }
    return tree;
};