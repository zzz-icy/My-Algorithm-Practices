
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

// Split the array into halves and merge them recursively 

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

arrive = [900, 940, 950, 1100, 1500, 1800]
depart = [910, 1200, 1120, 1130, 1900, 2000]

const findFlatform = () => {

}