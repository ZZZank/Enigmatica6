// priority: 1005

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

/**
 * split an array into many `pages`
 *
 * example: the result of `splitArray([1,2,3,4,5,6,7], 3)` is `[[1,2,3],[4,5,6],[7]]`
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @return {T[][]}
 */
function splitArray(arr, size) {
    const pages = [];
    let page = [];
    const arrLen = arr.length;
    let counter = 0;
    for (let i = 0; i < arrLen; i++) {
        page.push(arr[i]);
        counter++;
        if (counter === size) {
            counter = 0;
            pages.push(page);
            page = [];
        }
    }
    if (page.length != 0) {
        pages.push(page);
    }
    return pages;
}

/**
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @param {T} fillValue
 */
function splitArraySizeEnsured(arr, size, fillValue) {
    const split = splitArray(arr, size);
    if (split.length == 0) {
        return [];
    }
    const toFill = split[split.length - 1];
    while (toFill.length < size) {
        toFill.push(fillValue);
    }
    return split;
}

/**
 * spread an array into many `pages`, where the `i`-th element will be in `i % spreadLength`-th page
 *
 * example: the result of `splitArray([1,2,3,4,5,6,7], 3)` is `[[1,4,7],[2,5],[3,6]]`
 * @template T
 * @param {T[]} arr
 * @param {integer} spreadLength
 */
function spreadArray(arr, spreadLength) {
    /** @type {T[][]} */
    // const toSpread = Array.from({ length: spreadLength }).map(() => []);
    // Code above not usable, F you Rhino
    const toSpread = Array(spreadLength);
    for (let i = 0; i < spreadLength; i++) {
        toSpread[i] = []
    }
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
