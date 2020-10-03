exports.min = function min(array) {

    let min = 0;
    if (array === undefined) {
        return 0
    };
    if (array.length === 0) {
        return 0
    } else {
        array.forEach(function (element) {
            if (element < min) {
                min = element;
            }
        })
        return min;
    }

}

exports.max = function max(array) {
    let max = 0;
    if (array === undefined) {
        return 0
    };
    if (array.length === 0) {
        return 0
    } else {
        array.forEach(function (element) {
            if (element > max) {
                max = element;
            }
        })
        return max;
    }
}

exports.avg = function avg(array) {

    let avg = 0;
    if (array === undefined) {
        return 0
    };
    if (array.length === 0) {
        return 0
    } else {
        array.forEach(function (element) {
            avg = avg + element;
        })
        return avg / array.length;
    }
}
