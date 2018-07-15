
function equilibrium(arr) {
    sum_before = 0;
    sum_after = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j <= i; j++) {
            sum_before = sum_before + arr[j];
        }
        for (var j = i; j < arr.length; j++) {
            sum_after = sum_after + arr[j];
        }
        if (sum_before === sum_after) {
            print(i + 1)
            break;
        }
        else {
            sum_before = 0;
            sum_after = 0;
        }

    }
}
equilibrium([1, 2, 3, 4, 3, 1, 2])
