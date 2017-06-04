/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var reverse = 0, value = x;
    if (x < 0) {
        return false;
    }
    while (x) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return reverse === value;
};

// console.log(isPalindrome(0))
// console.log(isPalindrome(10011));