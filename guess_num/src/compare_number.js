function change_to_four_digits_array(number) {
    var a = Math.floor(number / 1000);
    var b = Math.floor(number / 100) % 10;
    var c = Math.floor(number / 10) % 10;
    var d = Math.floor(number) % 10;
    return [a, b, c, d];
};


function compare_random_number_and_guess_number(random_number, guess_number) {
    var random_number_array = change_to_four_digits_array(random_number);
    var guess_number_array = change_to_four_digits_array(guess_number);
    var x = 0;
    for (var i = 0; i < 4; i++) {
        if (random_number_array[i] == guess_number_array[i]) {
            x += 1;
        }
    }
    var number = get_same_number(random_number_array, guess_number_array);
    localStorage.result = x + 'A' + (number - x) + 'B';
};


function get_same_number(random_number_array, guess_number_array) {
    var y = 0;
    _.each(random_number_array, function (random_number) {
        _.each(guess_number_array, function (guess_number) {
            if (random_number == guess_number) {
                y += 1;
            }
        })
    });
    return y;
}