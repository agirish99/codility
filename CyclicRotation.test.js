const solution = require('./CyclicRotation');

describe('Array Rotation', () => {
    test('rotates array correctly', () => {
        expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
        expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
        expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    });

    test('rotates large K values correctly', () => {
        expect(solution([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
        expect(solution([1, 2, 3, 4, 5], 12)).toEqual([4, 5, 1, 2, 3]);
    });

    test('handles empty array', () => {
        expect(solution([], 3)).toEqual([]);
    });

    test('handles zero rotations', () => {
        expect(solution([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles single-element arrays', () => {
        expect(solution([1], 1)).toEqual([1]);
        expect(solution([1], 5)).toEqual([1]);
    });
});
