const solution = require('./MissingInteger');

describe('Smallest Positive Integer Not in Array', function() {
    it('should return 5 for [1, 3, 6, 4, 1, 2]', function() {
        const result = solution([1, 3, 6, 4, 1, 2]);
        if (result !== 5) throw new Error(`Expected 5 but got ${result}`);
    });

    it('should return 4 for [1, 2, 3]', function() {
        const result = solution([1, 2, 3]);
        if (result !== 4) throw new Error(`Expected 4 but got ${result}`);
    });

    it('should return 1 for [-1, -3]', function() {
        const result = solution([-1, -3]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 1 for an empty array', function() {
        const result = solution([]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 1 for an array with only negative numbers', function() {
        const result = solution([-5, -8, -2]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 2 for an array with only 1', function() {
        const result = solution([1]);
        if (result !== 2) throw new Error(`Expected 2 but got ${result}`);
    });

    it('should return 1 for an array with large positive numbers', function() {
        const result = solution([1000000, 1000001, 1000002]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 100001 for an array with large negative numbers', function() {
        const result = solution([-1000000, -1000001, -1000002]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });
});
