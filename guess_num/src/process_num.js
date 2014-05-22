function get_random_number() {
    while (true) {
        var a = Math.floor(Math.random() * 9 + 1);
        var b = Math.floor(Math.random() * 9 + 0);
        var c = Math.floor(Math.random() * 9 + 0);
        var d = Math.floor(Math.random() * 9 + 0);
        if (a != b && a != c && a != d && b != c && b != d && c != d) {
            var number = a * 1000 + b * 100 + c * 10 + d * 1;
            localStorage.random_number = number;
            return number;
        }
    }
};


function judge_number_randomly_product() {
    var numbers = [], same_numbers = [];
    for (var i = 0; i < 1000; i++) {
        get_random_number();
        numbers.push(localStorage.random_number);
    }
    for (var i = 0; i < 1000; i++) {
        var same = _.filter(numbers, function (number) {
            return number == numbers[i];
        })
        same_numbers.push(same);
    }
    return !_.find(same_numbers, function (the_same_number) {
        return the_same_number.length > 10;
    })
};


