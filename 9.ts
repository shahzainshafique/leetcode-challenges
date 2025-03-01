/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */
function isPalindrome(x: number): boolean {
    return Number(x.toString().split("").reverse().join("")) === x;
};