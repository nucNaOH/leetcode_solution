/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var c = ['({[', ')}]'];
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        let tmp = s[i];
        if (c[0].indexOf(tmp) > -1) {
            stack.push(tmp);
        } else if (c[1].indexOf(tmp) > -1 && stack[stack.length-1] == c[0][ c[1].indexOf(tmp) ]) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log(isValid('{{([[])}}'))