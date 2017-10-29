## 605. Can Place Flowers

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Array`_

__[Question]__: 判断数组中是否有足够的空位能“种花”，“种花”的条件是：改位置没种花（元素为0），且相邻的前后位置没种花（元素为0）。

__[Solution]__: 从前向后依次判断能否种花，统计最大个数，再与给定值比较即可。

__[Complexity]__: `O(n)`
