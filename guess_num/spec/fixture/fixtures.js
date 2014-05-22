function get_compare_result(random_number, guess_number) {
    var result = compare_random_number_and_guess_number(random_number, guess_number);
    return localStorage.result;
};