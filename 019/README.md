## 19. Remove Nth Node From End of List

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Linked List`_

__[Question]__: 去掉链表中倒数第`n`个节点（只遍历一次）。

__[Solution]__: 利用两个指针`p`,`q`，都从头结点`head`开始。一个先向后移动`n`次，之后再同时向后移动两个指针`p`,`q`，直到`q`到达链表结尾，去掉`p.next`即可。这里有一个特殊情况：即要去掉的节点如果是头结点`head`（即倒数第 链表长度 个节点），那么直接返回`head.next`即可。

__[Complexity]__: `O(n)`
