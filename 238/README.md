## 238. Product of Array Except Self

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Array`_

__[Question]__: 计算数组中（每一项）除去自己之外的所有元素的乘积，要求的常数级别的空间复杂度（有0项）。

__[Solution]__: 先计算数组中所有非0项的乘积，再分别根据0项的个数和当前项是否为非0项，计算所求的结果。

__[Complexity]__: `O(n)`
