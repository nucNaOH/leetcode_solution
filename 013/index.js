var letter = [["M", "D", "C", "L", "X", "V", "I"], [1000, 500, 100, 50, 10, 5, 1]];

/**
 * roman to int converter
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    var index = 0;
    while (index < s.length) {
        let tmp = index;
        index = find(s, index);
        let substr = s.substring(tmp, index);
        // console.log(substr);
        result += parse(substr);
    }
    return result;
    
};
/**
 * 从左到右，找到最小的可解读的子字符串
 * @param {string} s 
 * @param {number} start
 */
var find = function (s, start) {
    var index = letter[0].indexOf(s[start]);
    for (let i = start + 1; i < s.length; i++) {
        if (letter[0].indexOf(s[i]) >= index) {
            return i;
        }
    }
};

/**
 * 子字符串转换为int
 * @param {string} s 
 */
var parse = function (s) {
    var result = letter[1][letter[0].indexOf(s[s.length-1])];
    for (let i = s.length-2; i >= 0; i--) {
        result -= letter[1][letter[0].indexOf(s[i])];
    }
    return result;
};

// console.log(romanToInt('XLIX'));
// console.log(parse('CM'))