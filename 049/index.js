/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('')
        if (hash[key] === undefined) {
            hash[key] = [strs[i]]
        } else {
            hash[key].push(strs[i])
        }
    }
    const result = []
    for (let k in hash) {
        result.push(hash[k])
    }
    return result
};