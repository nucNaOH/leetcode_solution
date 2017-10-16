## 33. Search in Rotated Sorted Array

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Array`_

__[Question]__: 输出经过未知支点`pivot`旋转之后的数组`nums`中给定目标值`target`的下标，不存在时输出`-1`。

__[Solution]__: 这道题的难度为`Medium`，虽然爆搜的算法`o(N)`也能过，但是如果用了`考虑支点在内的二分查找算法`，可以将复杂度降低到`o(logN)`。具体思路如下：

1. 将`pivot`定义为数组中的最小值，可以根据规律，用二分查找查找到`pivot`。

这里二分查找的条件为：`nums[mid] > nums[r]`，此时在右侧找`pivot`，否则在左侧找`pivot`。

2. 再使用`考虑支点在内的二分查找算法`，寻找`target`。

这里与普通的二分查找算法唯一的不同点在于真正的中值下标`m_pivot`，是需要在`m`上加上偏移量`pivot`的，需要注意的是,此时`l`与`r`仍然为`0`与`nums.length`，`m`值也不计算偏移量，只有真正的中值`m_pivot`才是需要计算偏移量的。

__[Complexity]__: `O(logN)`
