
/*PROBLEM STATEMENT*/

/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/


function solution(A) {
    let integersSet = new Set();
    
    // Add all positive integers to the set
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            integersSet.add(A[i]);
        }
    }
    
    // Find the smallest positive integer not in the set
    for (let i = 1; i <= 100000; i++) {
        if (!integersSet.has(i)) {
            return i;
        }
    }
    
    return 1;
}

//Solution using hash set:
/**
 * function solution(A) {
    const len = A.length;
    const hash = {};
    for (let i = 0; i < len; i++) {
        // here we are making an object with all 
        // numbers in a given array as object keys and values
        // if 0 is given as possible digit we could assing 
        // hash[A[i]] = true; or any truthy value
        hash[A[i]] = A[i];
    }
    for (let i = 1; i < 1000002; i++) {
        // here we are trying to find any number 
        // between 1 and 1000001 (given constraints) 
        // which do not exists in an object
        // if the number is not in the object that's our missing one
        if(!hash[i]) return i;
    }
    return 1;
}
 */


  
  module.exports = solution; 