/*
🧠 Problem: Sqrt(x)
📦 Topic: Math, Binary Search
📊 Difficulty: Easy
🛠️ Approach: Binary Search
⏱️ Time: O(log x)
📦 Space: O(1)

📝 Description: 
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.

💡 Approach:
- Use binary search between 0 and x.
- Narrow down until the largest integer whose square ≤ x is found.
- Return `high` at the end, since it represents floor(sqrt(x)).

📝 Notes / What I Learned:
- Binary search can efficiently approximate square roots in O(log x).
*/

function mySqrt(x: number): number {
  let low = 0;
  let high = x;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const square = mid * mid;

    if (square === x) return mid;
    if (x < square) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return high;
}
