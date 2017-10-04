/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const quene = [];
    DFS(root, quene);
    // console.log(quene.map(d=>d.val));
    for (let i = 0; i < quene.length; i++) {
        quene[i].left = null;
        quene[i].right = quene[i+1]
    }
};

var DFS = function(root, quene) {
    if (root === null) return;
    quene.push(root);
    DFS(root.left, quene);
    DFS(root.right, quene);
}