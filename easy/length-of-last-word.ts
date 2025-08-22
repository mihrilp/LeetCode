/*
🧠 Problem: Length of Last Word
📦 Topic: String
📊 Difficulty: Easy
🛠️ Approach: Trim + Last Index + Substring
⏱️ Time: O(n)
📦 Space:  O(1)

📝 Description:
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

💡 Approach:
- Trim leading and trailing spaces.
- Find the last space index in the string.
- If there is no space, the entire string is the last word.
- Otherwise, take the substring after the last space.
- Return its length.


📝 Notes / What I Learned:
- `trim()` only removes spaces at the start and end of a string, not between words. Another good solution:

function lengthOfLastWord(s: string): number {
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') i--; // skip trailing spaces
    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}
*/

function lengthOfLastWord(s: string): number {
  let lastWord: string;
  s = s.trim();
  const lastSpaceIndex = s.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    lastWord = s;
  } else {
    lastWord = s.substring(lastSpaceIndex + 1);
  }

  return lastWord.length;
}
