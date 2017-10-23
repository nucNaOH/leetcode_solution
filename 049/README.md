## 49. Group Anagrams

__[Difficulty]__: _`Medium`_

__[Tag]__: _`String`_ _`Hash Table`_

__[Question]__: 将给定字符串数组按同字母异序词进行分组。

__[Solution]__: HashTable。

将字符串数组的每一项（字符串）进行hash，hash的键值key为该字符串字母序递增重排后的新字符串。hash时如果冲突，则将该项放在hash表的后面，这样便可实现分组。最后再整理一下hash表即可。

__[Complexity]__: `O(n^2)`
