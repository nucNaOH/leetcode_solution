/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const counter = {
        R: 0,
        L: 0,
        U: 0,
        D: 0
    };
    for (let i = 0; i < moves.length; i++) {
        counter[moves[i]]++;
    }
    if (counter.R === counter.L && counter.U === counter.D) {
        return true;
    } else {
        return false;
    }
};