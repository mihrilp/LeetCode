/*
🧠 Problem: Top K Frequent Elements
📦 Topic: Arrays & Hashing
📊 Difficulty: Medium
🛠️ Approach: Sorting with HashMap
⏱️ Time: O(nlogn)
📦 Space: O(n)

📝 Description:
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

💡 Approach:
- Count the frequency of each element in the array using an object.
- Sort the elements based on their frequency.
- Return the top k elements from the sorted list.

📝 Notes / What I Learned:  
- How to sort a Map based on values by converting it to an array of entries.
- The use of destructuring in `.map(([num]) => num)` to extract keys directly from `[key, value]` tuples for cleaner code.
*/

function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
    }

    const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1])
    return sorted.slice(0, k).map(([num]) => num)
};