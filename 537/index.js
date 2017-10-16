/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    const re = /^([-]*\d+)\+([-]*\d+)i$/;
    const [, ax, ay] = a.match(re);
    const [, bx, by] = b.match(re);
    const x = (ax * bx) - (ay * by);
    const y = (ax * by) + (ay * bx);
    return `${x}+${y}i`;
};