/**
 * You are given an integer array nums and a positive integer k.

Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

A subarray is a contiguous sequence of elements within an array.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = Math.max(...nums);
    let count = 0;
    let freq = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === max) {
            freq++;
        }

        // Shrink the window from the left until the frequency of the maximum element becomes less than k
        while (freq >= k) {
            count += nums.length - right; // All subarrays from right to end of array contain the maximum element at least k times
            if (nums[left] === max) {
                freq--;
            }
            left++;
        }
    }

    return count;
};