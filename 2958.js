/**
 * You are given an integer array nums and an integer k.

The frequency of an element x is the number of times it occurs in an array.

An array is called good if the frequency of each element in this array is less than or equal to k.

Return the length of the longest good subarray of nums.

A subarray is a contiguous non-empty sequence of elements within an array.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let left = 0, right = 0;
   let freqMap = new Map();
   let overKCount = 0;
   let maxLength = 0;

   while (right < nums.length) {
       let rightElement = nums[right];
       freqMap.set(rightElement, (freqMap.get(rightElement) || 0) + 1);
       if (freqMap.get(rightElement) > k) {
           overKCount++;
       }

       while (overKCount > 0) {
           let leftElement = nums[left];
           freqMap.set(leftElement, freqMap.get(leftElement) - 1);
           if (freqMap.get(leftElement) === k) {
               overKCount--;
           }
           left++;
       }

       maxLength = Math.max(maxLength, right - left + 1);
       right++;
   }

   return maxLength;
};