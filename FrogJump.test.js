const solution = require('./FrogJump');

describe('Frog Jump Function', () => {
    test('Standard case', () => {
        expect(solution(10, 85, 30)).toBe(3); // Expected minimal jumps is 3
    });

    test('Exact jump matches', () => {
        expect(solution(10, 100, 30)).toBe(3); // Exactly 3 jumps of 30 each
    });

    test('No jumps needed', () => {
        expect(solution(10, 10, 20)).toBe(0); // No jump needed as X is already at Y
    });

    test('Single big jump', () => {
        expect(solution(0, 1000000000, 1000000000)).toBe(1); // One huge jump
    });

    test('Minimal distance and jump', () => {
        expect(solution(1, 2, 1)).toBe(1); // Minimum distances and jump
    });

    test('Large numbers with minimal difference', () => {
        expect(solution(999999000, 1000000000, 30)).toBe(34); // Large numbers with small step, needs multiple jumps
    });

    test('Increasing the jump distance minimally changes the result', () => {
        expect(solution(0, 1000, 999)).toBe(2); // Almost covers in one jump, needs one more
    });

    test('Y just one step away from X', () => {
        expect(solution(5, 6, 2)).toBe(1); // Just one step required, despite jump being longer
    });
});
