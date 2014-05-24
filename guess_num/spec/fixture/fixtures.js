function get_compare_result(random_number, guess_number) {
    var result = compare_random_number_and_guess_number(random_number, guess_number);
    return localStorage.result;
};


function set_spec_environment() {
    localStorage.times = 0;
    document.getElementById('input_guess').disabled = false;
    localStorage.setItem('random_number',2314)
}