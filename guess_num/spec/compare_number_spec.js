describe("Compare result", function () {
    beforeEach(function () {
        localStorage.result = '';
    });

    afterEach(function () {
        localStorage.result = '';
    });

    it("should be 4A0B if random number=guess number", function () {
        var result = get_compare_result(1234, 1234);
        expect(result).toBe("4A0B");
    });

    it("should be 0A4B if random number=1234 and guess number=2143", function () {
        var result = get_compare_result(1234, 2143);
        expect(result).toBe("0A4B");
    });

    it("should be 2A2B if random number=3456 and guess number=3465", function () {
        var result = get_compare_result(3456, 3465);
        expect(result).toBe("2A2B");
    });

    it("should be 0A0B if random number=1234 and guess number=6789", function () {
        var result = get_compare_result(1234, 6789);
        expect(result).toBe("0A0B");
    });

    it("should be 3A0B if random number=3456 and guess number=8456", function () {
        var result = get_compare_result(3456, 8456);
        expect(result).toBe("3A0B");
    });

    it("should be 0A3B if random number=3456 and guess number=4361", function () {
        var result = get_compare_result(3456, 4361);
        expect(result).toBe("0A3B");
    });
});


