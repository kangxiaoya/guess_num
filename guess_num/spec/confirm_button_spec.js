describe("ConfirmButton button", function () {
    beforeEach(function () {
        set_spec_environment();
    });

    afterEach(function () {
        localStorage.clear();
        document.getElementById("result_show").innerHTML = '';
    });

    it("should storage the input guess number ", function () {
        document.getElementById("input_guess").value = 1234;
        document.getElementById("confirm").onclick();
        expect(localStorage.guess_number).toBe('1234');
    });

    it("should clear the input guess number ", function () {
        document.getElementById("input_guess").value = 1234;
        document.getElementById("confirm").onclick();
        expect(document.getElementById("input_guess").value).toBe('');
    });

    it("should localStorage times add 1", function () {
        var time_one = localStorage.times;
        document.getElementById("confirm").onclick();
        var time_two = localStorage.times;
        expect(time_two - time_one).toBe(1);
    });

    it("should just have six chances", function () {
        for (var i = 0; i < 10; i += 1) {
         document.getElementById("input_guess").value = 2348;
         document.getElementById("confirm").onclick();
        }
        expect(localStorage.times).toBe('6')
    });

    it("should display 4A0B random number 2314 guess number 2314 when the first time ", function () {
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
    });

    it("should display 2A1B random number 2314 guess number 2348 and second time guess right ", function () {
        document.getElementById("input_guess").value = 2348;
        document.getElementById('confirm').onclick();
        var times = localStorage.times;
        expect(document.getElementById("result_show").innerHTML).toBe('2A1B,已猜' + times + "次!");
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById('input_guess').disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });

    it("should failure if times is six and cannot guess right", function () {
        for (var i = 1; i < 6; i += 1) {
            document.getElementById("input_guess").value = 1234;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('1A3B,已猜' + localStorage.times + "次!");
        }
        document.getElementById("input_guess").value = 1234;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe('已满六次,猜数字失败!' + '正确结果:' + localStorage.random_number);
        expect(document.getElementById('input_guess').disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });

    it("should success if times is six and just guess right", function () {
        for (var i = 1; i < 6; i += 1) {
            document.getElementById("input_guess").value = 1234;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('1A3B,已猜' + localStorage.times + "次!");
        }
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        var random_number = localStorage.random_number;
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
    });

});