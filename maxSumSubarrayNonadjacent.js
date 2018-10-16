// max sum subarray with non-adjacent element

function main(nums) {
    var incl = 0;
    var excl = 0;
    var length = nums.length;

    for (var i = 0; i < length; i++) {

        new_excl = (excl > incl) ? excl : incl;
        incl = excl + nums[i]
        excl = new_excl;
    }

    return (excl > incl) ? excl : incl;
};

var result = main([5, 5, 10, 40, 50, 35]);

console.log(result);





























