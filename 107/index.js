/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return [];
    const result = [], quene = [], depth = [];
    let currentDepth = -1;
    quene.push(root);
    depth.push(0);
    // result[0].push(root.val)
    while(quene.length) {
        const p = quene.shift();
        const d = depth.shift();
        // 重新整理格式
        if (d > currentDepth) {
            result.push([p.val]);
            currentDepth = d;
        } else {
            result[d].push(p.val)
        }
        // 下一层节点入队
        if (p.left !== null) {
            quene.push(p.left);
            depth.push(d + 1);
        }
        if (p.right !== null) {
            quene.push(p.right);
            depth.push(d + 1);
        }
        // console.log(p.val, d);
    }
    return result.reverse();
};