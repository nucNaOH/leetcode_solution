/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let hashTable = {};
    let i = 0, j = 0;
    while (j < s.length) {
        const c = s[j];
        if (hashTable[c] === undefined) {
            hashTable[c] = j;
        } else {
            for (let k = i; k < hashTable[c]; k++) {
                if (s[k] !== c) {
                    hashTable[s[k]] = undefined;
                }
            }
            i = hashTable[c] + 1;
            hashTable[c] = j;
        }
        j++;
        count = ((j - i) > count) ? (j - i) : count;
    }
    return count;
};