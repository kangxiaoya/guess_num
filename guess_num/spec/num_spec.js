describe("Number", function () {
    beforeEach(function () {
        localStorage.random_number = '';
    });


    afterEach(function () {
        localStorage.random_number = '';
    });


    it("should be a number", function () {
        var data = get_random_number();
        var is_a_number = !isNaN(data);
        expect(is_a_number).toBe(true);
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
        return different_digits;
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
        var random_number = '';
        return random_number = !_.find(same_numbers, function (the_same_number) {
            return the_same_number.length > 10;
        })
        expect(random_number).toBe(true);
    });
});



