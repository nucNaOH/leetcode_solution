## 138. Copy List with Random Pointer

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Linked List`_ _`HashTable`_

__[Question]__: 深度复制一个额外拥有random指针（该指针指向链表中的随机项）的单链表。

__[Solution]__: 先遍历一遍给定单链表，复制单链表每一项形成新的单链表，同时将复制出的每一项根据label放到hash表中。

再同时遍历一遍给定单链表和新的单链表，根据给定单链表中每一项的random指针指向节点（项）的label，在hash表中取到对应的新单链表的项，赋值给新单链表的random指针即可。

__[Complexity]__: `O(n)`
