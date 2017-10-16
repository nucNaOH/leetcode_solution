/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const bits = [];
    bits[0] = 0;
    if (num === 0) return bits;
    bits[1] = 1;
    if (num === 1) return bits;
    for (let i = 2; i <= num; i++) {    
        bits[i] = (i & 1) + bits[i >> 1];
    }
    return bits
};