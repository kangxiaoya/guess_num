function ProcessButton() {
};

ProcessButton.process_guess_number = function () {
    var input = document.getElementById('input_guess').value;
    if (localStorage.random_number != '') {
        var times = localStorage.times;
        if (times < 6) {
            times++;
            localStorage.times = times;
            var random_number = localStorage.random_number;
            localStorage.guess_number = input;
            var guess_number = localStorage.guess_number;
            var result = compare_random_number_and_guess_number(random_number, guess_number);
            document.getElementById('result_show').innerHTML = ProcessButton.result_display(result);
        }
        if (localStorage.times == 6) {
            var random_number = localStorage.random_number;
            localStorage.times= 6;
            document.getElementById('input_guess').disabled = true;
            document.getElementById('confirm').disabled = true;
            var random_number = localStorage.random_number;
            document.getElementById('result_show').innerHTML = '已满六次,猜数字失败!' + '正确结果:' + localStorage.random_number;
        }
        document.getElementById('input_guess').value = '';
    }
};

ProcessButton.result_display = function (result) {
    if (result == '4A0B') {
        document.getElementById('input_guess').disabled = true;
        document.getElementById('confirm').disabled = true;
        localStorage.clear()
        return result + ",恭喜正确!"
    }
    if (result != '4A0B') {
        return result + ",已猜" + localStorage.times + "次!";
    }
};

ProcessButton.start = function () {
    document.getElementById('confirm').disabled = false;
    document.getElementById('input_guess').disabled = false;
    document.getElementById('result_show').innerHTML = '';
    localStorage.result = '';
    localStorage.times = 0;
    get_random_number();
};