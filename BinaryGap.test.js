const solution = require('./BinaryGap');

describe('Binary Gap Function', () => {
    test('Finds the longest binary gap', () => {
        expect(solution(9)).toBe(2);
        expect(solution(529)).toBe(4);
        expect(solution(20)).toBe(1);
        expect(solution(15)).toBe(0);
        expect(solution(32)).toBe(0);
    });

    test('Handles small numbers without gaps', () => {
        expect(solution(1)).toBe(0);
        expect(solution(3)).toBe(0);
    });

    test('Handles large numbers and ensures correctness', () => {
        expect(solution(1041)).toBe(5);
    });
});
