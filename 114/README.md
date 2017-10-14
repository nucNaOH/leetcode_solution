## 114. Flatten Binary Tree to Linked List

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 将二叉树原地变成单链表（按DFS顺序）。

__[Solution]__: 先DFS，同时对遍历到的节点入队`quene`。之后再按队列里节点的顺序遍历一遍，改成单链表的形式（`left`改成`null`，`right`改成下一个节点）即可。

__[Complexity]__: `O(n)`
