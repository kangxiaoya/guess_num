describe("Process button", function () {
    beforeEach(function () {
        document.getElementById('input_guess').value = 1234;
        go_guess_number();

    });


    afterEach(function () {
    });


    it("should storage the input guess number ", function () {
        var guess_number = localStorage.guess_number;

    });


});



