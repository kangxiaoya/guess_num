describe("process number", function () {
    beforeEach(function () {
        localStorage.random_number = '';
    });


    afterEach(function () {
        localStorage.random_number = '';
        localStorage.clear()
    });


    it("should be a number", function () {
        var data = get_random_number();
        expect(!isNaN(data)).toBe(true);
    });


    it("should be four digits ", function () {
        var data = get_random_number();
        expect(1000 < data < 9999).toBe(true);
    });


    it("should be not repeat data ", function () {
        var number = get_random_number();
        var a = Math.floor(number / 1000);
        var b = Math.floor(number / 100) % 10;
        var c = Math.floor(number / 10) % 10;
        var d = Math.floor(number) % 10;
        var different_digits = a != (b || c || d) && b != ( c || d ) && c != d;
        expect(different_digits).toBe(true)
    });


    it("should be random", function () {
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
        for (var i = 0; i < 1000; i++) {
            var Probability = same_numbers[i].length/1000;
        }
        expect(Probability ).toBeLessThan(0.005);
    });
});



