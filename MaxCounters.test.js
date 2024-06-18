const solution = require('./MaxCounters');
describe('Max Counters', function() {
    it('should return [3, 2, 2, 4, 2] for N=5 and A=[3, 4, 4, 6, 1, 4, 4]', function() {
        const result = solution(5, [3, 4, 4, 6, 1, 4, 4]);
        const expected = [3, 2, 2, 4, 2];
        if (JSON.stringify(result) !== JSON.stringify(expected)) throw new Error(`Expected ${expected} but got ${result}`);
    });

    it('should return [1, 1, 1] for N=3 and A=[1, 2, 3]', function() {
        const result = solution(3, [1, 2, 3]);
        const expected = [1, 1, 1];
        if (JSON.stringify(result) !== JSON.stringify(expected)) throw new Error(`Expected ${expected} but got ${result}`);
    });

    it('should return [2, 2, 2, 2, 2] for N=5 and A=[6]', function() {
        const result = solution(5, [6]);
        const expected = [2, 2, 2, 2, 2];
        if (JSON.stringify(result) !== JSON.stringify(expected)) throw new Error(`Expected ${expected} but got ${result}`);
    });

    it('should return [3, 3, 3, 3, 3] for N=5 and A=[6, 6, 6, 6]', function() {
        const result = solution(5, [6, 6, 6, 6]);
        const expected = [3, 3, 3, 3, 3];
        if (JSON.stringify(result) !== JSON.stringify(expected)) throw new Error(`Expected ${expected} but got ${result}`);
    });
});