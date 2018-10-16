
// node 1, node 2 have to be sorted arrays


const mergeHelper = (node1, node2) => {
    let leftIndex = 0, rightIndex = 0;

    let result = [];
    while (leftIndex < node1.length && rightIndex < node2.length) {
        if (node1[leftIndex] < node2[rightIndex]) {
            result.push(node1[leftIndex]);
            console.log(result);
            leftIndex++;
        } else {
            result.push(node2[rightIndex]);
            console.log(result);

            rightIndex++;
        }
    }
    return result.concat(node1.slice(leftIndex)).concat(node2.slice(rightIndex));
}


const mergeSort = (arr) => {
    const length = arr.length;

    if (length === 1) {
        // return once we hit an array with a single item
        return arr;
    }
    // set m is very important
    const m = Math.floor(length / 2);
    // const r = l + 1;
    // slice() return selected elements as an new array object
    const leftArray = arr.slice(0, m);
    const rightArray = arr.slice(m);
    return mergeHelper(mergeSort(leftArray), mergeSort(rightArray));
}

// const a = mergeHelper([1, 3, 4], [0, 5, 8]);
const b = mergeSort([38, 27, 43, 3, 9, 82, 10]);
// console.log(a);
console.log(b);

// // Split the array into halves and merge them recursively 
// function mergeSort(arr) {
//     if (arr.length === 1) {
//         // return once we hit an array with a single item
//         return arr
//     }

//     const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
//     const left = arr.slice(0, middle) // items on the left side
//     const right = arr.slice(middle) // items on the right side

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     )
// }

// // compare the arrays item by item and return the concatenated result
// function merge(left, right) {
//     let result = []
//     let indexLeft = 0
//     let indexRight = 0

//     while (indexLeft < left.length && indexRight < right.length) {
//         if (left[indexLeft] < right[indexRight]) {
//             result.push(left[indexLeft])
//             indexLeft++
//         } else {
//             result.push(right[indexRight])
//             indexRight++
//         }
//     }

//     return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
// }

// const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]