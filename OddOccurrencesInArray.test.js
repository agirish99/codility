const solution = require('./CyclicRotation');

describe('Unpaired Element Finder', () => {
    test('finds the unpaired element in a mixed array', () => {
        expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7);
    });

    test('works with array having single element', () => {
        expect(solution([42])).toBe(42);
    });

    test('handles larger arrays', () => {
        expect(solution([4, 3, 3, 2, 2, 4, 5, 5, 99])).toBe(99);
    });

    test('handles negative numbers', () => {
        expect(solution([-1, -1, 2, 2, -3])).toBe(-3);
    });

    test('works with repeated large numbers', () => {
        expect(solution([1000000000, 1000000000, 1000000000, 1000000000, 999999999])).toBe(999999999);
    });
});
