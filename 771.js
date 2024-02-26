/**You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A". */

//Original solution
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  var j = jewels.split("");
  var s = stones.split("");
  var count = 0;
  for (let i = 0; s.length > j.length ? i < s.length : i < j.length; i++) {
    for (let k = 0; s.length > j.length ? k < s.length : k < j.length; k++) {
      s[i] == j[k] ? count++ : null;
    }
  }
  return count;
};

//Optimized solution with Linear complexity
var numJewelsInStones = function (jewels, stones) {
  var jewelsSet = new Set(jewels);
  var count = 0;
  for (var stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }
  return count;
};
