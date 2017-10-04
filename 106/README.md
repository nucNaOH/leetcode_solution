## 106. Construct Binary Tree from Inorder and Postorder Traversal

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 利用二叉树的中序序列和后序序列，来还原二叉树。

__[Solution]__: 

方法一：递归。

递归出口： 中序序列为空，返回`null`；

递归操作： 取后序序列最后一个元素作为当前树的`根节点`，然后在中序序列中找到对应的元素（下标），此时，可以将中序序列分成三部分：__`左子树的中序序列`+`根节点`+`右子树的中序序列`__ 。同理，根据左子树的中序序列长度与后序序列的长度必然相同，也可以反过来将后序序列分成三部分：__`左子树的后序序列`+`右子树的后序序列`+`根节点`__ 。

递归深入： 分别根据`左、右子树`的`中序序列和后序序列`重建`左、右子树`，并分别挂在`根节点`的`左、右子树`上。

__[Complexity]__: `O(n)`