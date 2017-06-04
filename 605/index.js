/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var result = 0;
    var prev, next;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            prev = flowerbed[i - 1];
            next = flowerbed[i + 1];
            if ( (prev === undefined || prev === 0) && (next === undefined || next === 0) ) {
                result++;
                i++;
            }
        }        
    }
    return result >= n;
};