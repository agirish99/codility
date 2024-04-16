
/*PROBLEM STATEMENT*/

/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

/*
The sum of the first N natural numbers is given by the formula (N×(N+1))/2.  Since the array contains integers from 1 to N+1 but is missing one element, you can calculate the expected sum for 
N+1 numbers and then subtract the sum of the elements present in the array. The difference will be the missing element.
*/
function solution(A) {
  const N = A.length;
  const totalSum = (N + 1) * (N + 2) / 2;
  const arraySum = A.reduce((acc, cur) => acc + cur, 0);

  return totalSum - arraySum;
}



module.exports = solution; 