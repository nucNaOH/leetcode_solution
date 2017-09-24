/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const points = [];
    // dealing with operations
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case 'C':
                points.pop();
                break;
            case 'D':
                const last = points[points.length - 1];
                if (last) {
                    points.push(parseInt(last) * 2);
                }
                break;
            case '+':
                const last1 = points[points.length - 1];
                const last2 = points[points.length - 2];
                if (last1 && last2) {
                    points.push(parseInt(last1) + parseInt(last2));
                }
                break;
            default :
                points.push(parseInt(ops[i]));
                break;
        }
    }
    return points.reduce((c, v, i, a) => {
        return c + v;
    }, 0)
};