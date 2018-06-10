/**
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