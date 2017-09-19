## 617. Merge Two Binary Trees

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 合并两个二叉树，要求合并后的树重叠的节点`val`相加，不重叠的取有节点的`val`。

__[Solution]__: 递归，重叠的部分创建新节点，其值为重叠的两节点相加；不重叠的部分直接把有节点的部分放在新树上即可，以便不重叠的部分节点还有子节点。

__[Complexity]__: `O(n)`
