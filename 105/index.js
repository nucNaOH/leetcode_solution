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
    
    let i = 0;
    let j = 0;
    
    const stack = [];
    const root = new TreeNode(preorder[i]);
    stack.push(root);
    i++;
    
    while (i < preorder.length) {
        // console.log(stack.map(d=>d.val));
        // top of the stack
        let topNode = stack[stack.length - 1];
        let prevNode = null;
        
        while (stack.length !== 0 && topNode.val === inorder[j]) {
            prevNode = stack.pop();
            topNode = stack[stack.length - 1];
            j++;
        }
        
        const newNode = new TreeNode(preorder[i]);
        if (prevNode === null) {
            topNode.left = newNode;
        } else {
            prevNode.right = newNode;
        }
        stack.push(newNode);
        i++;
    }
    
    return root;
};