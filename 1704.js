/**You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false. */
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const isVowel = (char) => ['a','e','i','o','u','A','E','I','O','U'].includes(char);
    
    const countVowels = (str)=>{
        let count = 0;
        for (let s of str){
            if(isVowel(s)){
                count++;
            }
        }
        return count;
    }
    
    //split the string and check for vowels
    const a = s.slice(0, s.length/2);
    const b = s.slice(s.length/2);
    return countVowels(a) === countVowels(b);
    };