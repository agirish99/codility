const solution = require('./TapeEquilibrium');
describe('Tape Equilibrium Function', () => {
    test('returns minimal difference', () => {
        expect(solution([3, 1, 2, 4, 3])).toBe(1);
    });

    test('works with negative numbers', () => {
        expect(solution([-1000, 1000])).toBe(2000);
    });

    test('works with two elements', () => {
        expect(solution([1, 100])).toBe(99);
    });

    test('works with large numbers of elements', () => {
        const largeArray = Array.from({length: 99999}, (_, i) => i % 1000 - 500);
        expect(solution(largeArray)).toBeLessThan(1000); // Expected to be a small difference
    });
});
