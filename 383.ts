/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
    const letterCount: Record<string, number> = {};

    // Count letters in magazine
    for (const char of magazine) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    // Check if ransomNote can be constructed
    for (const char of ransomNote) {
        if (!letterCount[char] || letterCount[char] === 0) {
            return false;
        }
        letterCount[char]--;
    }

    return true;
}
