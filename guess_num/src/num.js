function get_random_number() {
    while (true) {
        var a = Math.floor(Math.random() * 9 + 1);
        var b = Math.floor(Math.random() * 9 + 0);
        var c = Math.floor(Math.random() * 9 + 0);
        var d = Math.floor(Math.random() * 9 + 0);
        if (a != b && a != c && a != d && b != c && b != d && c != d) {
            var number = a * 1000 + b * 100 + c * 10 + d * 1;
            localStorage.random_number = number;
            return number;
        }
    }
};


