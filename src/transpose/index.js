/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const transpose = matrix => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c])); 


module.exports = transpose;
