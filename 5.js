/* Given a string s, return the longest palindromic substring in s.
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
 
     let start = 0;
     let end = 0;
 
     const expand = (left, right) => {
         while (
             left >= 0 &&
             right < s.length &&
             s[left] === s[right]
         ) {
             left--;
             right++;
         }
 
         return right - left - 1;
     };
 
     for (let i = 0; i < s.length; i++) {
         const odd = expand(i, i);
         const even = expand(i, i + 1);
 
         const maxLen = Math.max(odd, even);
 
         if (maxLen > end - start + 1) {
             start = i - Math.floor((maxLen - 1) / 2);
             end = i + Math.floor(maxLen / 2);
         }
     }
 
     return s.slice(start, end + 1);
 };