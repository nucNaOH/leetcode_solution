/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    const surrounding = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
    const length = M.length, width = M[0] ? M[0].length : 0;
    let result = new Array(length)
    for (let i = 0; i < length; i++) {
        let subArray = new Array(width);
        for (let j = 0; j < width; j++) {
            let sum = 0, count = 0;
            for (let k = 0; k < surrounding.length; k++) {
                let x = i + surrounding[k][0], y = j + surrounding[k][1];
                if (x >= 0 && x < length && y >= 0 && y < width) {
                    sum += M[x][y];
                    count++;
                }
            }
            subArray[j] = Math.floor(sum / count);
        }
        result[i] = subArray;
    }
    return result;
};

const a = [
    [1, 2, 1],
    [1, 0, 1],
    [1, 0, 1]
];

const b = imageSmoother(a);

console.log(b)
