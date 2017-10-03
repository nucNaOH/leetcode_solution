/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;
    const len = inorder.length;
    const tree = new TreeNode(postorder[len-1]);
    for (let i = 0; i < len; i++) {
        if (tree.val === inorder[i]) {
            tree.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
            tree.right = buildTree(inorder.slice(i+1), postorder.slice(i, len-1));
            break;
        }
    }
    return tree;
};