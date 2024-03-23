/**You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var unique = nums.filter((value) => nums.indexOf(value) === nums.lastIndexOf(value));
      return unique.reduce((a, b) => a + b, 0);
  };