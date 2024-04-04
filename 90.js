/**
 * Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b); // Sort the input array to handle duplicates
     const result = [];
     
     const backtrack = (start, path) => {
         result.push([...path]); // Add the current subset to the result
         
         for (let i = start; i < nums.length; i++) {
             if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates
             path.push(nums[i]); // Include the current number in the subset
             backtrack(i + 1, path); // Explore further possibilities
             path.pop(); // Backtrack
         }
     };
     
     backtrack(0, []); // Start backtrack from index 0 with an empty subset
     return result;
 };