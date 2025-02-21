// priority: 1000

/**
 * @param {any[][]} arrays
 * @param {number} minSize
 * @param {any} toFill
 * @return {any[][]} the `arrays` itself
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
 * arrow: width=24, height=17
 * @param {number} start
 * @param {number} width
 * @return {number}
 */
function computeArrowPos(start, width) {
    return start + width / 2 - 12;
}

/**
 * split an array into many `pages`
 *
 * example: the result of `splitArray([1,2,3,4,5,6,7], 3)` is `[[1,2,3],[4,5,6],[7]]`
 * @param {any[]} arr
 * @param {number} size
 * @return {any[]}
 */
function splitArray(arr, size) {
    const pages = [];
    let page = [];
    const arrLen = arr.length;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
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
 * @param {any[]} arr
 * @param {number} size
 * @param {any} fillValue
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
 * @param {any[]} arr
 * @param {any} spreadLength
 */
function spreadArray(arr, spreadLength) {
    const toSpread = Array(spreadLength).map(() => []);
    arr.forEach((value, i) => (toSpread[i % spreadLength] = value));
    return toSpread;
}

/**
 * @param {any[]} arr
 * @param {number} size
 * @param {any} fillValue
 */
function spreadArraySizeEnsured(arr, size, fillValue) {
    const split = spreadArray(arr, size);
    return ensureSubArraySize(split, size, fillValue);
}
