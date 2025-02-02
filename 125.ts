/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
    var j = s.length - 1;
    for (let i = 0; i< j+1; i++){

    if(s[i] !== s[j]){
        return false;
    }
    j--;
    }
    return true;
};