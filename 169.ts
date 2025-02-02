/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate: number | null = null;
    for (const num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num===candidate) ? 1 : -1; 
    }
    return candidate as number;
};