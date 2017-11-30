/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.indexOf('0') !== -1 || digits.length === 0) return [];
    const result = [];
    const map = [, '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    backTracking([], result, digits, map, 0);
    return result;
};


const backTracking = function (tmp, result, digits, map, start) {
    if (tmp.length === digits.length) {
        result.push(tmp.join(''))
    } else {
        const letters = map[digits[start]];
        for (var i = 0; i < letters.length; i++) {
            tmp.push(letters[i]);
            backTracking(tmp, result, digits, map, start + 1);
            tmp.pop();
        }
    }
};

// const result = letterCombinations('234');
// console.log(result);
