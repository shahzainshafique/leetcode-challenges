/**Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

  */
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    //Implementing sliding window algorithm
    if (k <= 0) return 0;

  let count = 0;
  let prod = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];

    while (prod >= k && left <= right) {
      prod /= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
};