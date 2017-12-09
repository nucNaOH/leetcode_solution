## 75. Sort Colors

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Two Pointers`_

__[Question]__: 只一次遍历对只包含0，1，2的数组进行排序。

__[Solution]__: 首尾两个指针。

开始时，start指针指向头，end指针指向尾。

用p指针遍历一遍。

1. 当p遇到0的时候，与start交换，start++; p++;
2. 当p遇到2的时候，与end交换，end--;p不变(此时换过来的还需要继续判断);
3. 当p遇到1的时候，跳过，即p++;

__[Complexity]__: `O(n)`
