## 653. Two Sum IV - Input is a BST

__[Difficulty]__: _`Easy`_

__[Tag]__: _`BST`_

__[Question]__: 寻找二叉查找树中是否存在两个节点值`val`等于给定目标值`target`。

__[Solution]__: 

递归解法（trimBST, L, R）：

当`root === 0`时，返回`null`;
当`root.val < L`时，`trimBST(root.right, L, R)`;
当`root.val > R`时，`trimBST(root.left, L, R)`;
否则，其他情况，
trim左子树，`root.left = trimBST(root.left, L, R)`;
trim右子树，`root.right = trimBST(root.right, L, R)`;
最后返回`root`

__[Complexity]__: `O(n)`
