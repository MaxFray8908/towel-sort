
module.exports = function towelSort (matrix) {
let result = [];
if (!matrix) {
  return [];
}
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (i % 2 === 0) {
            result.push(matrix[i][j]);
        }
        else {
            result.push(matrix[i][matrix[i].length - 1 - j]);
        }
    }
}
return result;
}
