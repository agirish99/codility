const solution = require('./PermCheck');

describe('Check Permutation', function() {
    it('should return 1 for A=[4, 1, 3, 2]', function() {
        const result = solution([4, 1, 3, 2]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 0 for A=[4, 1, 3]', function() {
        const result = solution([4, 1, 3]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 1 for A=[1]', function() {
        const result = solution([1]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });

    it('should return 0 for A=[2, 3, 4, 5]', function() {
        const result = solution([2, 3, 4, 5]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 1 for A=[5, 4, 3, 2, 1]', function() {
        const result = solution([5, 4, 3, 2, 1]);
        if (result !== 1) throw new Error(`Expected 1 but got ${result}`);
    });
});