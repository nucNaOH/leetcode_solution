/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.toLowerCase();
    const INT_MAX = 2147483647, INT_MIN = -2147483648;
    let num = 0, flag = true, isHex = false;
    for (let i = 0; i < str.length; i++) {
        // ignore leading whitespaces
        while (str[i] === ' ') i++;
        // flag
        if (str[i] === '-') {
            flag = false;
            i++;
        } else if (str[i] === '+') {
            flag = true;
            i++;
        }
        // num
        // hex 0xfff...
        if (str[i] === '0' && str[i + 1] === 'x') {
            isHex = true
            i = i + 2;
        }
        while (str[i] >= '0' && str[i] <= '9' || isHex && str[i] >= 'a' && str[i] <= 'f') {
            let value = 0;
            if (str[i] >= 'a' && str[i] <= 'f') {
                value = str[i].charCodeAt() - 'a'.charCodeAt() + 10;
            } else {
                value = str[i].charCodeAt() - '0'.charCodeAt();
            }
            
            if (flag) {
                num = 10 * num + value;
            } else {
                num = 10 * num - value;
            }
            
            if (num < INT_MIN) return INT_MIN;
            if (num > INT_MAX) return INT_MAX;
            
            i++;
        }
        // not num
        break;
    }
    return num;
};