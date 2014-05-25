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
        expect(document.getElementById("result_show").innerHTML).toBe('');
    });

});





