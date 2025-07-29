/*
🧠 Problem: Two Sum
📦 Topic: Arrays & Hashing
📊 Difficulty: Easy
🛠️ Approach: HashMap
⏱️ Time: O(n)
📦 Space: O(n)

📝 Description:
Given an array of integers and a target, return indices of the two numbers such that they add up to the target.

💡 Approach:
- Iterate over nums, for each number compute complement = target - num.
- Check if complement exists in map.
- If yes, return indices.
- Else, store current number and index in map.

📝 Notes / What I Learned:  
- Using `forEach` does not allow early return from the function; `return` only exits the current iteration.
*/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (const [index, num] of nums.entries()) {
        const complement = target - num;
        if (map.has(complement)) {
            return [map.get(complement)!, index]
        }
        map.set(num, index)
    }

    return [];
}