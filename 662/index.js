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
var widthOfBinaryTree = function(root) {
    if (root === null) {
        return 0
    }
    let quene = [];
    quene.push(root);

    let maxWidth = 1;

    while (true) {
        let length = quene.length;
        // 判断当前层val是否全为null
        let flag = true;
        let width = length;
        // 去掉尾部null
        for (let i = quene.length - 1; i >= 0; i--) {
            if (quene[i].val !== null) {
                flag = false;
                break;
            } else {
                width--;
            }
        }
        // 去掉首部null
        for (let i = 0; i < quene.length; i++) {
            if (quene[i].val !== null) {
                flag = false;
                break;
            } else {
                width--;
            }
        }
        if (flag) {
            break;
        } else {
            maxWidth = maxWidth > width ? maxWidth : width;
        }
        // 遍历完当前层
        while (length > 0) {
            const node = quene.shift();
            length--;
            // console.log(node.val);
            if (node.left) {
                quene.push(node.left);
            } else {
                quene.push(new TreeNode(null))
            }
            if (node.right) {
                quene.push(node.right);
            } else {
                quene.push(new TreeNode(null))
            }
        }
    }
    return maxWidth;
};

/**
 test测试用例 超时
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.left = new TreeNode(5)
root.left.left.right = new TreeNode(6)

root.right = new TreeNode(2)
root.right.right = new TreeNode(9)
root.right.right.left = new TreeNode(7)
// root.left.right = new TreeNode(3)
// root.right.right = new TreeNode(9)

console.log(widthOfBinaryTree(root))

