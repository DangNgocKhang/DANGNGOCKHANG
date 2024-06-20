/*
Solution 1:
Brute-force
---------------------------------------------
Time Complexity: O(n)
Memory Complexity: O(1)
*/
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

/*
Solution 2:
Recursion
---------------------------------------------
Time Complexity: O(n)
Memory Complexity: O(n)
*/
var sum_to_n_b = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_b(n - 1);
};

/*
Solution 3:
Formula method - Arithmetic progression (Cấp số cộng)
---------------------------------------------
Time Complexity: O(1)
Memory Complexity: O(1)
*/
var sum_to_n_c = function (n) {
  return (n / 2) * (n + 1);
};
