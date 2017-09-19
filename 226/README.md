## 226. Invert Binary Tree

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 反转二叉树。将二叉树的左子树变成右子树，右子树变成左子树。

__[Solution]__: 递归。

递归出口: 根节点为空`root === null`

递归深入: 反转左子树；反转右子树；最后返回根节点`root`

__[Complexity]__: `O(n)`
