/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    // return xor.toString(2).split('').map(d=>parseInt(d)).reduce((i,j)=>i+j)
    let result = 0;
    do {
        if (xor & 1) {
            result++;
        }
        xor >>= 1;
    } while(xor);
    return result;
};