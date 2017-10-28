/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    const hashTable = {};
    
    // Pointers: p for head, q for headOfCopy.
    let p = head, q = null;
    let headOfCopy = null;
    // next
    while (p !== null) {
        const node = new RandomListNode(p.label);
        if (headOfCopy === null) {
            q = node;
            headOfCopy = node;
        } else {
            q.next = node;
            q = q.next;
        }
        // hash without conflict
        if (hashTable[node.label] === undefined) {
            hashTable[node.label] = node;
        }
        p = p.next;
    }
    p = head;
    q = headOfCopy;
    // random
    while (q !== null) {
        if (p.random !== null) {
            q.random = hashTable[p.random.label]
        }
        q = q.next;
        p = p.next;
    }
    return headOfCopy;
};