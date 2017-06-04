/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = '';
    var k = 0;
    while (strs[0] && strs[0][k]) {
        let tmp = strs[0][k];

        let flag = true;
        for (let j = 1; j < strs.length; j++) {
            if (tmp !== strs[j][k]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result += tmp;
            k++;
        } else {
            break;
        }
    }
    return result;
};

// console.log(longestCommonPrefix(['ssa','sd','sb']));