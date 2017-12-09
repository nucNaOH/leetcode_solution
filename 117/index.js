/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
    if (root === null) return;
    const quene = [root];
    let length = 1, start = 0;
    while (length - start) {
        let end = length;
        while (end - start) {
            const node = quene[start++];
            // next
            if (start === end) {
                node.next = null;
            } else {
                node.next = quene[start];
            }
            // console.log(start, end, '=>', node.val);
            if (node.left) quene[length++] = node.left;
            if (node.right) quene[length++] = node.right;
        }
    }
    // console.log(quene);
};