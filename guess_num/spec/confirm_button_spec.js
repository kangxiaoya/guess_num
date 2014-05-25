describe("ConfirmButton button", function () {
    beforeEach(function () {
        set_spec_environment();
    });

    afterEach(function () {
        localStorage.clear();
        document.getElementById("result_show").innerHTML = '';
    });

    it("should clear the input guess number ", function () {
        document.getElementById("input_guess").value = 1234;
        document.getElementById("confirm").onclick();
        expect(document.getElementById("input_guess").value).toBe('');
    });

    it("should display 4A0B random number 2314 guess number 2314 when the first time ", function () {
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });

    it("should display 2A2B  random number 2314 guess number 2348 and second time guess right ", function () {
        document.getElementById("input_guess").value = 2341;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("2A2B,已猜1次!");
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
    });

    it("should display 0A0B,0A4B,4A0B random number 2314 guess number7890,4132,2314 when third time guess right ", function () {
        document.getElementById("input_guess").value = 7890;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe('0A0B,已猜1次!');
        document.getElementById("input_guess").value = 4132;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe('0A4B,已猜2次!');
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });


    it("should display 0A0B random number 2314 guess number 7890 four times and one time 2314 when forth guess right ", function () {
        for (var i = 1; i < 4; i += 1) {
            document.getElementById("input_guess").value = 7890;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('0A0B,已猜'+i+"次!");
        }
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);

    });


    it("should display 0A0B random number 2314 guess number four times7890 and one 2314 when fifth guess right ", function () {
        for (var i = 1; i < 5; i += 1) {
            document.getElementById("input_guess").value = 7890;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('0A0B,已猜' + i + "次!");
        }
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);

    });


    it("should failure if times is six and cannot guess right", function () {
        for (var i = 1; i < 6; i += 1) {
            document.getElementById("input_guess").value = 2364;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('3A0B,已猜' + i + "次!");
        }
        document.getElementById("input_guess").value = 1234;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe('已满六次,猜数字失败!' + '正确结果:2314');
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });


    it("should success if times is six and just guess right", function () {
        for (var i = 1; i < 6; i += 1) {
            document.getElementById("input_guess").value = 1234;
            document.getElementById('confirm').onclick();
            expect(document.getElementById("result_show").innerHTML).toBe('1A3B,已猜' + i + "次!")
            expect(document.getElementById("input_guess").disabled).toBe(false);
            expect(document.getElementById("confirm").disabled).toBe(false);
        }
        document.getElementById("input_guess").value = 2314;
        document.getElementById('confirm').onclick();
        expect(document.getElementById("result_show").innerHTML).toBe("4A0B,恭喜正确!");
        expect(document.getElementById("input_guess").disabled).toBe(true);
        expect(document.getElementById("confirm").disabled).toBe(true);
    });
});