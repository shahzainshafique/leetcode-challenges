/**Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift. */
function rotateString(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;
    
    let double = s + s;
    return double.includes(goal);
};