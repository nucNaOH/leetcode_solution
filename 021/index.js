/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = null, p = null;
    var t_val, t_node;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            t_val = l2.val;
            l2 = l2.next;
        } else {
            t_val = l1.val;
            l1 = l1.next;
        }
        t_node = new ListNode(t_val);
        if (result) {
            p.next = t_node;
            p = p.next;
        } else {
            result = t_node;
            p = t_node;
        }
    }
    while (l1) {
        t_node = new ListNode(l1.val);
        if (result) {
            p.next = t_node;
            p = p.next;
        } else {
            result = t_node;
            p = t_node;
        }
        l1 = l1.next;
    }
    while (l2) {
        t_node = new ListNode(l2.val);
        if (result) {
            p.next = t_node
            p = p.next;
        } else {
            result = t_node;
            p = t_node;
        }
        l2 = l2.next;
    }
    // while (result) {
    //     console.log(result.val);
    //     result = result.next;
    // }
    return result;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// var l1 = new ListNode(2);
// l1.next = new ListNode(3);
// l1.next.next = new ListNode(3);
// var l2 = new ListNode(0);
// var l3 = null;
// mergeTwoLists(l3, l2);