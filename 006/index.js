/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
    }
    const zigLen = numRows - 1;
    const zigzagLen = 2 * zigLen;
    for (let i = 0; i < s.length; i++) {
        let t = i % zigzagLen;
        if (t === 0 || t === zigLen) {
            result[t].push(s[i]);
        } else {
            result[zigLen - Math.abs(t - zigLen)].push(s[i]);
        }
    }
    return result.map(d => d.join('')).join('');
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let res = '';
    let half = Math.ceil(numRows / 2);
    let zlen = numRows - 1;
    for (let i = 0; i < numRows; i++) {
        // first row
        if (i === 0) {
            let j = 0;
            while (j * zlen < s.length) {
                res += s[j * zlen];
                j += 2;
            }
            continue;
        } else if (i === numRows - 1) {
        // last row
            let j = 1;
            while (j * zlen < s.length) {
                res += s[j * zlen];
                j += 2;
            }
            continue;
        } else {
            // other row 交替 i 与 numRows - i
            let j = 0;
            while (j * zlen + i < s.length) {
                res += s[j * zlen + i];
                if ((j + 1) * zlen + zlen - i < s.length) {
                    res += s[(j + 1) * zlen + zlen - i];
                }
                j += 2;
            }
        }
    }
    return res;
};
