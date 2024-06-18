const solution = require('./FrogRiverOne');
describe('Frog River One', function() {
    it('should return 6 for X=5 and A=[1, 3, 1, 4, 2, 3, 5, 4]', function() {
        const result = solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
        if (result !== 6) throw new Error(`Expected 6 but got ${result}`);
    });

    it('should return 4 for X=3 and A=[1, 3, 1, 3, 2, 1, 3]', function() {
        const result = solution(3, [1, 3, 1, 3, 2, 1, 3]);
        if (result !== 4) throw new Error(`Expected 4 but got ${result}`);
    });

    it('should return 0 for X=1 and A=[1]', function() {
        const result = solution(1, [1]);
        if (result !== 0) throw new Error(`Expected 0 but got ${result}`);
    });

    it('should return 4 for X=2 and A=[1, 1, 1, 1, 2]', function() {
        const result = solution(2, [1, 1, 1, 1, 2]);
        if (result !== 4) throw new Error(`Expected 4 but got ${result}`);
    });

    it('should return -1 for X=5 and A=[1, 3, 1, 4, 2, 3, 4]', function() {
        const result = solution(5, [1, 3, 1, 4, 2, 3, 4]);
        if (result !== -1) throw new Error(`Expected -1 but got ${result}`);
    });
});
