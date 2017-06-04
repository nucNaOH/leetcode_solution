/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while (x) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    } else {
        return result;
    }
};

// console.log(reverse(-10021));