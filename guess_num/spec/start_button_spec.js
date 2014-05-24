describe("StartButton button", function () {
    beforeEach(function () {
        localStorage.clear();
        document.getElementById('input_guess').disabled = true;
        document.getElementById('confirm').disabled = true;
    });

    it("should use input box ", function () {
        document.getElementById("start").click();
        expect(document.getElementById('input_guess').disabled).toBe(false);
    });

    it("should click confirm button", function () {
        document.getElementById("start").click();
        expect(document.getElementById('confirm').disabled).toBe(false);
    });

    it("should clear result", function () {
        document.getElementById("start").click();
        var result = document.getElementById("result_show").innerHTML;
        expect(result).toBe('');
    });

    it("should clear change localStorage times to be 0 ", function () {
        document.getElementById("start").click();
        expect(localStorage.times).toBe('0')
    });

    it("should clear change localStorage result", function () {
        document.getElementById("start").click();
        expect(localStorage.result).toBe('')
    });

    it("should storage  a random number in localStorage", function () {
        document.getElementById("start").click();
        expect(localStorage.random_number).toBeDefined()
    });
});





