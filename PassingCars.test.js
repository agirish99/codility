const solution = require('./PassingCars');

describe('Count Passing Cars', function() {
    it('should return 5 for [0, 1, 0, 1, 1]', function() {
        const result = solution([0, 1, 0, 1, 1]);
        if (result !== 5) throw new Error(`Expected 5 but got ${result}`);
    });

    it('should return 0 for [0, 0, 0, 0, 0]', function() {
        const result = solution([0, 0, 0, 0, 0]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 0 for [1, 1, 1, 1, 1]', function() {
        const result = solution([1, 1, 1, 1, 1]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 0 for [0]', function() {
        const result = solution([0]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 0 for [1]', function() {
        const result = solution([1]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

});
