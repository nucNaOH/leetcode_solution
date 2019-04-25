/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const result = [];
    let flag = 0;
    let i = digits.length - 1;

    let digit = digits[i] + 1;
    while (digit > 9 && i > 0) {
        result.unshift(0);
        i--;
        digit = digits[i] + 1;
    }

    // 如果仍然有数据，则最高位进一
    if (digit > 9) {
        result.unshift(0);
        result.unshift(1);
    } else {
        result.unshift(digit);

    }
    i--;

    while (i >= 0) {
        result.unshift(digits[i]);
        i--;
    }

    return result;
};

// console.log(plusOne([1,2,3]));
// console.log(plusOne([1,2,9]));
// console.log(plusOne([1,9,3]));
// console.log(plusOne([1,9,9]));
// console.log(plusOne([9,9,9]));