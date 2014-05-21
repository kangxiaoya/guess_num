describe('Number', function () {
    describe("Number", function () {
        beforeEach(function () {
            init_number_database()
        });
        afterEach(function () {
            localStorage.clear();
        });

        it("should not repeat a randomly generated four-digit", function () {
            var random_number = get_random_number();
            localStorage.random_number = random_number;
        });
    });
});