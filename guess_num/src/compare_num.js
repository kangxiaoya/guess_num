function process_guess_number() {
    var input = document.getElementById('input_guess').value;
    var input_judge = judge_number(input);
    if (localStorage.random_number == '') {
        alert("请产生随机数")
    }
    ;
    if (input_judge == 'meet_require_number') {
        localStorage.times += 1;
        localStorage.guess_number = input;
    } else {
        input_data_judding[input_judge]();
    }

};

function judge_number(input) {
    var four_data = judge_be_four_digital(input);
    var all_number = judge_be_four_number(input);
    var not_repeat = judge_not_repeat(input);
    if (four_data != 4) {
        return "not_four_data";
    }
    if (!all_number) {
        return "not_all_number";
    }
    if (!not_repeat) {
        return "exist_repeat";
    }
    return "meet_require_number";
};


input_data_judding = {
    'not_four_data': function () {
        alert('请输入四位')
    },
    'not_all_number': function () {
        alert('请输入四位数字')
    },
    'exist_repeat': function () {
        alert('请勿有重复数字')
    }
};


function judge_be_four_number(input) {
    return!isNaN(input);

};



