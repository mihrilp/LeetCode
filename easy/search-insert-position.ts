/*
🧠 Problem: Search Insert Position
📦 Topic: Arrays 
📊 Difficulty: Easy
🛠️ Approach: Binary Search
⏱️ Time: O(log n)
📦 Space: O(1)

📝 Description:
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.

💡 Approach:
- Use binary search to find the target.
- If the target is found, return its index.
- If not found, return start, which is the correct insertion index.

📝 Notes / What I Learned:  
- Binary search is efficient for sorted arrays, allowing us to find the target or insertion point in logarithmic time.
*/

function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}
