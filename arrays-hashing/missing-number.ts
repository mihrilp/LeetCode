/*
🧠 Problem: Missing Number  
📦 Topic: Arrays & Hashing  
📊 Difficulty: Easy  
🛠️ Approach: HashSet  
⏱️ Time: O(n)  
📦 Space: O(n)  

📝 Description:  
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

💡 Approach:  
- Initialize a Set with all numbers in `nums`.  
- Iterate over the range from 0 to n (inclusive).  
- For each number, check if it is in the set; if not, return it as the missing number.  
- If all numbers are present, return -1 as a default.

📝 Notes / What I Learned:  
- The problem can be solved using the Gauss formula for the sum of the first n natural numbers, enabling an O(1) space complexity solution since it only requires constant extra memory.

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}
*/

function missingNumber(nums: number[]): number {
    const set = new Set<number>(nums)

    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) return i;
    }
    return -1;
};
