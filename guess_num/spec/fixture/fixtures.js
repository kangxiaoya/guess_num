function get_compare_result(random_number, guess_number) {
    var random_number_array = change_four_digits_array(random_number);
    var guess_number_array = change_four_digits_array(guess_number);
    var x = 0, y = 0;
    for (var i = 0; i < 4; i++) {
        if (random_number_array[i] == guess_number_array[i]) {
            x += 1;
        }
    }
    for (var i = 0; i < 4; i += 1) {
        for (var j = 0; j < 4; j += 1) {
            if (random_number_array[i] == guess_number_array[j] && i != j) {
                y += 1;
            }
        }
    }
    var result = x + 'A' + y + 'B';
    localStorage.result = result
    return result;
};

function change_four_digits_array(number) {
    var a = Math.floor(number / 1000);
    var b = Math.floor(number / 100) % 10;
    var c = Math.floor(number / 10) % 10;
    var d = Math.floor(number) % 10;
    return [a, b, c, d];
};


function set_spec_environment() {
    localStorage.times = 0;
    document.getElementById('input_guess').disabled = false;
    document.getElementById('confirm').disabled = false;
    localStorage.setItem('random_number', 2314)
}
