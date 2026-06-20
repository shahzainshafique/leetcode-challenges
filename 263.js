/*An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

Given an integer n, return true if n is an ugly number. */

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;

    // Keep dividing by 2 as long as it's an integer
    while (n % 2 === 0) {
        n = n / 2;
    }
    // Keep dividing by 3 as long as it's an integer
    while (n % 3 === 0) {
        n = n / 3;
    }
    // Keep dividing by 5 as long as it's an integer
    while (n % 5 === 0) {
        n = n / 5;
    }

    // If we successfully reduced n all the way to 1, it is ugly
    return n === 1;

};