const solution = require('./PermMissingElem');

describe('Missing Element Finder', () => {
    test('finds the missing element in a mixed array', () => {
        expect(solution([2, 3, 1, 5])).toBe(4);
    });

    test('works with array missing the first element', () => {
        expect(solution([2, 3, 4])).toBe(1);
    });

    test('works with array missing the last element', () => {
        expect(solution([1, 2, 3])).toBe(4);
    });

    test('handles array with a single missing element', () => {
        expect(solution([1])).toBe(2); // Missing the second element when N+1=2
    });

    test('handles larger arrays', () => {
        expect(solution([4, 2, 3, 1, 6, 7])).toBe(5);
    });

    test('empty array', () => {
        expect(solution([])).toBe(1); // When the array is empty, the missing number is 1
    });
});
