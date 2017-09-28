## 176. Second Highest Salary

__[Difficulty]__: _`Easy`_

__[Tag]__: _`SQL`_

__[Question]__: 查出`Employee`表里第二高的`Salary`，如果没有则返回`null`。

__[Solution]__: 通过`orderby`和`limit`来实现，再`union`一个`null`进去可以实现。

讨论区里有一个利用`max()`聚合函数，当数据集为空时，`max()`会返回`null`，特此记录。

__[Complexity]__: `Invalid`
