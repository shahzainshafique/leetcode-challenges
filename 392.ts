/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    for (const char of t) {
        if (s[i] === char) i++;
        if (i === s.length) return true;
    }
    return i === s.length;
}
