/*
🧠 Problem: Plus One
📦 Topic: Array, Math
📊 Difficulty: Easy
🛠️ Approach: Carry Handling in Addition
⏱️ Time: O(n)
📦 Space: O(1)

📝 Description:
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. 
Increment the large integer by one and return the resulting array of digits.

💡 Approach:
- Traverse the array from the last digit to the first.
- If the current digit is less than 9, increment it and return.
- If the digit is 9, set it to 0 and continue to the next digit.
- If all digits are 9, prepend `1` at the beginning (e.g., `[9,9,9] → [1,0,0,0]`).


📝 Notes / What I Learned:
- Handling carry in addition.
- Using unshift() to efficiently insert a new element at the start of an array.
*/

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }

  // If all digits were 9, we need to add a new digit at the start
  digits.unshift(1);
  return digits;
}
