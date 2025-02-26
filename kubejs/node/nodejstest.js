

/**
 * spread an array into many `pages`, where the `i`-th element will be in `i % spreadLength`-th page
 *
 * example: the result of `splitArray([1,2,3,4,5,6,7], 3)` is `[[1,4,7],[2,5],[3,6]]`
 * @template T
 * @param {T[]} arr
 * @param {number} spreadLength
 */
function spreadArray(arr, spreadLength) {
    /** @type {T[][]} */
    const toSpread = Array.from({length: spreadLength}).map(() => []);
    arr.forEach((value, i) => (toSpread[i % spreadLength].push(value)));
    return toSpread;
}

/**
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @param {T} fillValue
 */
function spreadArraySizeEnsured(arr, size, fillValue) {
    const split = spreadArray(arr, size);
    if (split.length == 0) {
        return split
    }
    const sizeToEnsure = split[0].length
    return ensureSubArraySize(split, sizeToEnsure, fillValue);
}

/**
 * @template T
 * @param {T[][]} arrays
 * @param {number} minSize
 * @param {T} toFill
 * @return {T[][]} the `arrays` itself
 */
function ensureSubArraySize(arrays, minSize, toFill) {
    for (let arr of arrays) {
        while (arr.length < minSize) {
            arr.push(toFill);
        }
    }
    return arrays;
}

console.log(spreadArray(Array.from({length: 32}).map((value, i) => i), 6))
console.log(Array.from({length: 32}).map((value, i) => i))
console.log(Array(32).map((value, i) => i))
console.log(spreadArray(Array(32).map((value, i) => i), 6))