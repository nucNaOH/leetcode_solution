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
var maxDepth = function(root) {
    if (root === null) return 0;
    let p = null;
    // 借助队列实现遍历，同时借助节点node.val来存储当前节点的深度
    const quene = [];
    root.val = 1;
    quene.push(root);
    while (quene.length !== 0) {
        p = quene.shift();
        // console.log(p.val);
        if (p.left !== null) {
            p.left.val = p.val + 1;
            quene.push(p.left);
        }
        if (p.right !== null) {
            p.right.val = p.val + 1;
            quene.push(p.right)
        }
    }
    return p.val;
};

/**
 * 深度优先搜索
 * @param {TreeNode} root 根节点
 */
// var maxDepth = function (root) {
//     if (root === null) return 0;
//     if (root.left === null && root.right === null) {
//         return 1;
//     } else if (root.left !== null && root.right === null) {
//         return maxDepth(root.left) + 1;
//     } else if (root.left === null && root.right !== null) {
//         return maxDepth(root.right) + 1;
//     } else {
//         let left = maxDepth(root.left);
//         let right = maxDepth(root.right);
//         return left > right ? left + 1 : right + 1;
//     }
// };

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.left = new TreeNode(7)
tree.left.left.left.right = new TreeNode(7)
tree.left.right.left = new TreeNode(7)
tree.left.right.left.right = new TreeNode(7)
tree.left.right.left.right.left = new TreeNode(7)



console.log(maxDepth(tree))

