/*You are given an integer n.

Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

Return an integer denoting the mirror distance of n​​​​​​​.

abs(x) denotes the absolute value of x. */
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    function reverse(num){
        console.log(num);
        return Number(String(num).split('').reverse().join(''));
    }

    return Math.abs(n - reverse(n));
};