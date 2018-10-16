function countInversion(array) {
    const length = array.length;
    let count = 0;
    let i, j;
    for (i = 0; i < length; i++) {
        for (j = i + 1; j < length; j++) {

            count += (array[i] > array[j]) ? 1 : 0;
        }
    }

    return count;
}

console.log(countInversion([1, 20, 6, 4, 5]));