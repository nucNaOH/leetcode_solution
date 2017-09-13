## 104. Maximum Depth of Binary Tree

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 求二叉树的最大深度。

__[Solution]__: 

方法一：递归（深度优先遍历）。

当`root === null`时，返回`0`;
当`root.left === null && root.right === null`时，返回`1`;
否则，其他情况返回`maxDepth(root.left)`和`maxDepth(root.right)`中最大的一个。

方法二：借助队列（层次遍历）。

借助节点的`val`（或额外的队列）来存储当前节点的深度，每次深度更进一步，即当前节点有下一级节点`left`或`right`时，将其下一级节点`left`或`right`的深度值`val`（或同级的额外队列中对应的节点）加`1`。由于层次遍历最后一个节点，必然为深度最大的节点，故最后只需要将最后一个节点的深度值返回即可。

__[Complexity]__: `O(n)`
