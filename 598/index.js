/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) {
        return m * n;
    }
    var tmp = ops[0];
    for (let i = 1; i < ops.length; i++) {
        tmp = operate(tmp, ops[i]);
    }
    return tmp[0] * tmp[1];
};

var operate = function (op1, op2) {
    var result = [];
    result.push(op1[0] > op2[0] ? op2[0] : op1[0]);
    result.push(op1[1] > op2[1] ? op2[1] : op1[1]);
    return result;
};
