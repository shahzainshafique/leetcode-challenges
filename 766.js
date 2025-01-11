/**
 * Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > 0 && j > 0) {
                if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                    return false;
                }
            }
        }
    }
    return true;
};