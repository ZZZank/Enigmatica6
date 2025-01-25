

/**
 * 
 * @param {any[]} arr 
 * @param {number} size 
 * @return {any[]}
 */
function splitArray(arr, size) {
    const pages = []
    let page = []
    const arrLen = arr.length
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        page.push(arr[i])
        counter++
        if (counter === size) {
            counter = 0
            pages.push(page)
            page = []
        }
    }
    if (page.length != 0) {
        pages.push(page)
    }
    return pages
}

console.log(splitArray([1,2,3,4,5,6,7,8], 3))