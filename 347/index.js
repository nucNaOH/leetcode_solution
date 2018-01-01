/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const m = new Map(),
        bucket = [],
        result = [];
    let count = 0;
    nums.forEach(d => m.set(d, m.has(d) ? m.get(d) + 1 : 1));
    m.forEach((d, i) => bucket[d] ? bucket[d].push(i) : bucket[d] = [i]);
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i] && result.length < k) {
            bucket[i].forEach(d => result[count++] = d);
        }
    }
    return result;
};