/**
 * Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let freq = {};
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    // Find the character with the highest frequency
    let maxFreq = 0;
    let maxChar = '';
    for (let char in freq) {
        if (freq[char] > maxFreq) {
            maxFreq = freq[char];
            maxChar = char;
        }
    }
    
    const n = s.length;
    if (maxFreq > Math.ceil(n / 2)) {
        return "";
    }
    
    // Create an array to build the result
    let result = new Array(n);
    
    // Fill even indices first with the most frequent character
    let index = 0;
    while (freq[maxChar] > 0) {
        result[index] = maxChar;
        freq[maxChar]--;
        index += 2;
    }
    
    // Fill the remaining characters
    for (let char in freq) {
        while (freq[char] > 0) {
            if (index >= n) {
                index = 1;
            }
            result[index] = char;
            freq[char]--;
            index += 2;
        }
    }
    
    return result.join('');

};