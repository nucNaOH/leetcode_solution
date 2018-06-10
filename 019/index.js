/**
<<<<<<< HEAD
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head === null) return null;
    // p, q 两个指针，都指向头部
    let p = head, q = head;
    // q 指针先行向后移动 n 次，与 p 相隔 n 个
    while (n--) q = q.next;
    // 处理特殊情况
    if (q === null) {
        return p.next;
    }
    // 再同时向后移动 p，q 两个指针，直到 q 指针（先行移动n个的指针）到达链表的结尾
    while (q.next !== null) {
        p = p.next;
        q = q.next;
    }
    // p 指针所在的位置，即为倒数第 n+1 个，删去下一个节点即可。
    p.next = p.next.next;
    return head;
};
=======
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var c = ['({[', ')}]'];
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        let tmp = s[i];
        if (c[0].indexOf(tmp) > -1) {
            stack.push(tmp);
        } else if (c[1].indexOf(tmp) > -1 && stack[stack.length-1] == c[0][ c[1].indexOf(tmp) ]) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log(isValid('{{([[])}}'))
>>>>>>> 94f79e8620597aa2b66fe24e1f8c6767c0ffbf08
