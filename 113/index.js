/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const paths = [];
    allPath(root, [], 0, sum, paths);
    return paths;
};

var allPath = function(root, path, depth, sum, paths) {
    if (root === null) return;
    if (root.left === null && root.right === null) {
        path[depth++] = root.val;
        path.length = depth;
        if (path.reduce((c, v) => c + v) === sum) {
            paths.push(path.slice(0));
            // console.log(path);
        }
    }
    path[depth++] = root.val;
    allPath(root.left, path, depth, sum, paths);
    allPath(root.right, path, depth, sum, paths);
}
