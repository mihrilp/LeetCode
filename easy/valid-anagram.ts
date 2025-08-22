/*
🧠 Problem: Valid Anagram
📦 Topic: Arrays & Hashing
📊 Difficulty: Easy
🛠️ Approach: HashMap
⏱️ Time: O(n)
📦 Space: O(1)

📝 Description:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

💡 Approach:
- If the lengths of `s` and `t` are not equal, return false.
- Create two hash maps to count the frequency of each character in both strings.
- Compare both maps: If any character is missing or has a different frequency, return false.
- If all characters match in frequency, return true.

📝 Notes / What I Learned:  
- How to use a hash map to count character frequencies in strings.
*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    for (let char of s) {
        sMap.set(char, (sMap.get(char) ?? 0) + 1);
    }

    for (let char of t) {
        tMap.set(char, (tMap.get(char) ?? 0) + 1);
    }

    for (const key of sMap.keys()) {
        if (!tMap.has(key) || tMap.get(key) !== sMap.get(key)) {
            return false;
        }
    }
    return true;
}