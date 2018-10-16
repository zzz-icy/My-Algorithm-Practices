arrive = [900, 940, 950, 1100, 1500, 1800]
depart = [910, 1200, 1120, 1130, 1900, 2000]


const findFlatform = (arr, dep) => {
    let arr_index = 0, dep_index = 0;
    let label = [], result = [];
    while (arr_index < arr.length && dep_index < dep.length) {
        if (arr[arr_index] < dep[dep_index]) {
            result.push(arr[arr_index]);
            label.push('arrival');
            arr_index++;
        } else {
            result.push(dep[dep_index]);
            label.push('departure');
            dep_index++;
        }
    }
    // console.log(arr_index, dep_index)
    console.log(label);
    const diff = Math.abs(arr_index - dep_index);
    const pushItem = (arr_index > dep_index) ? 'departure' : 'arrival';
    let i = 0, j = 0, count = 0, max = 0;
    while (i < diff) {
        label.push(pushItem);
        i++;
    }

    for (j = 0; j < label.length; j++) {
        if (label[j] == 'arrival') {
            count = count + 1;
            max = (max > count) ? max : count;
        } else {
            count = count - 1;
            max = (max > count) ? max : count;

        }
        console.log('count', count);
        console.log('max', max);
    }
    return max;
    // if (arr_index === arr.length) {

    //     return label.fill('departure', dep_index, dep.length)
    //     // console.log('1', result);
    // } else {
    //     // console.log('2', result);

    //     return label.fill('arrival', arr_index, arr.length)
    // }
    // console.log(label);
    // result.concat(dep.slice(dep_index)).concat(arr.slice(arr_index));
    // return result;
}

const a = findFlatform(arrive, depart);
console.log(a);