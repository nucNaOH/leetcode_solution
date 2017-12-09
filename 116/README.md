## 116. Populating Next Right Pointers in Each Node

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 将完全二叉树的每一个层次都用next指针（增加next指针）连成一个单链表。（思路同题目：117）

__[Solution]__: 在利用队列进行层次遍历的同时，对每一层的next指针进行连接即可。

__[Complexity]__: `O(n)`
