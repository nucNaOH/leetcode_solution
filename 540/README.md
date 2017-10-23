## 540. Single Element in a Sorted Array

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Array`_

__[Question]__: 用O(logN)的时间复杂度和O(1)的空间复杂度，找出已排序数组中仅有的一个单个（不重复）元素。

__[Solution]__: 利用二分查找的思路.

每次取mid，然后分别跟前一个和后一个元素比较，寻找相同的元素，如果能找到，则mid移动到相同元素的最后一个上；如果找不到，则该数便为要找的结果。

根据mid与left之间的元素个数，如果为偶数，说明要找的单个元素在右侧，如果为奇数，说明要找的单个元素在左侧。对应移动left或right指针即可。

__[Complexity]__: `O(logN)`
