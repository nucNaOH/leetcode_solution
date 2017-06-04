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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum;
    let result = null, p = null;
    while (l1 || l2 || carry) {
        sum = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        // change '/' & '%' to '+/-' 
        if (sum > 9) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        if (!result ) {
            result = new ListNode(sum);
            p = result;
        } else {
            p.next = new ListNode(sum);
            p = p.next;
        }
        
    }
    return result;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// function main() {
//     var l1 = new ListNode(8);
//     l1.next = new ListNode(8);
//     l1.next.next = new ListNode(8);
//     l1.next.next.next = new ListNode(3);
//     l1.next.next.next.next = new ListNode(3);

//     var l2 = new ListNode(8);
//     l2.next = new ListNode(6);
//     l2.next.next = new ListNode(4);

//     var res = addTwoNumbers(l2, l1);
//     while (res) {
//         console.log(res.val);
//         res = res.next;
//     }
// }
// main();