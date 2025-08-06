/*
🧠 Problem: Contains Duplicate  
📦 Topic: Arrays & Hashing  
📊 Difficulty: Easy  
🛠️ Approach: HashSet  
⏱️ Time: O(n)  
📦 Space: O(n)  

📝 Description:  
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

💡 Approach:  
- Initialize an empty Set to store seen numbers.  
- Iterate over `nums`:  
  - If the current number already exists in the Set, return true.  
  - Otherwise, add the number to the Set.  
- If the loop completes without finding duplicates, return false.

📝 Notes / What I Learned:  
- Using a Set allows for O(1) average time complexity for lookups, which is much faster compared to array methods like `includes` that run in O(n) time.
*/

function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();

    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    
    return false;
}
