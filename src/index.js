module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (matrix[row][column] === 0) {
        const rowMissingNumbers = getMissingNumbers(matrix[row]);
        if (rowMissingNumbers.length === 1) {
          matrix[row][column] = rowMissingNumbers[0];
        } else {
          const columnArray = getColumnArray(matrix, column);
          const columnMissingNumbers = getMissingNumbers(columnArray);
          matrix[row][column] = columnMissingNumbers[0];
        }
      }
    }
  }
  return matrix;
};

function getColumnArray(matrix, column) {
  const columnArray = [];
  for (let row = 0; row < 9; row++) {
    if (matrix[row][column] !== 0) {
      columnArray.push(matrix[row][column]);
    }
  }
  return columnArray;
}

function getMissingNumbers(line) {
  const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const missingNumbers = [];
  for (let num of possibleNumbers) {
    if (line.indexOf(num) === -1) {
      missingNumbers.push(num);
    }
  }
  return missingNumbers;
}
