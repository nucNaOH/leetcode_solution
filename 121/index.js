/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let maxNow = 0;
    for (let i = 1; i < prices.length; i++) {
        maxNow += prices[i] - prices[i -1];
        maxNow = Math.max(maxNow, 0);
        if (maxNow > maxProfit) {
            maxProfit = maxNow;
        }
    }
    return maxProfit;
};