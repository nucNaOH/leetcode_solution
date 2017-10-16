/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    const re = /^([-]*\d+)\+([-]*\d+)i$/;
    [, ax, ay] = a.match(re);
    [, bx, by] = b.match(re);
    const x = (ax * bx) - (ay * by);
    const y = (ax * by) + (ay * bx);
    return `${x}+${y}i`;
};