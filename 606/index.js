/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    var bt = init();
};

var init = function (t) {
    var quene = [];
    var bt = null, p = null;
    for (let i = 0; i < t.length; i++) {
        let tmp = new TreeNode(t[i]);
        quene.push(tmp);
        if (quene.length) {
            break;
        }
        if (bt === null) {
            bt = quene[0];
            p = bt;
        } else if (p.left === null) {
            p.left = quene[0];
        } else if (p.right === null) {
            p.right = quene[0];
            quene.shift();
        } else {
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}