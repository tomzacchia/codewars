function validSolution(board) {
  var BOARD_LENGTH = 9;

  var columnsArray = createColumnsArray(board);
  var rowsArray = createRowsArray(board);
  var subgridsArray = createSubgridsArray(board);

  var isColumnsArrayValid = validateArray(columnsArray);
  if (!isColumnsArrayValid) return false;

  var isrowsArrayValid = validateArray(rowsArray);
  if (!isrowsArrayValid) return false;

  var isSubgridsArrayValid = validateArray(subgridsArray);

  if (!isSubgridsArrayValid) return false;

  //   default
  return true;

  // ----------------- IMPLEMENTATION DETAILS

  function createColumnsArray(board) {
    var columnsArray = createEmptySubArrays();
    for (var row = 0; row < 9; row++) {
      for (var column = 0; column < 9; column++) {
        columnsArray[column].push(board[row][column]);
      }
    }

    return columnsArray;
  }

  function createRowsArray(board) {
    var rowsArray = createEmptySubArrays();
    for (var row = 0; row < 9; row++) {
      for (var column = 0; column < 9; column++) {
        rowsArray[row].push(board[row][column]);
      }
    }

    return rowsArray;
  }

  function createSubgridsArray(board) {
    var subgridsArray = createEmptySubArrays();

    for (var row = 0; row < BOARD_LENGTH; row++) {
      for (var column = 0; column < BOARD_LENGTH; column++) {
        var currentNumber = board[row][column];

        var gridRow = Math.floor(row / 3);
        var gridColumn = Math.floor(column / 3);
        var subGridIndex = 3 * gridRow + gridColumn;

        subgridsArray[subGridIndex].push(currentNumber);
      }
    }

    return subgridsArray;
  }

  function validateArray(arrayToValidate) {
    for (var i = 0; i < BOARD_LENGTH; i++) {
      var sortedSubArray = arrayToValidate[i].sort();

      var issortedSubArrayValid = validateSubArray(sortedSubArray);

      if (!issortedSubArrayValid) return false;
    }

    return true;
  }

  function validateSubArray(subArray) {
    for (var i = 0; i < BOARD_LENGTH - 1; i++) {
      var difference = subArray[i + 1] - subArray[i];

      if (difference !== 1) return false;
    }

    return true;
  }

  function createEmptySubArrays() {
    var tempArray = [];
    for (var i = 0; i < BOARD_LENGTH; i++) tempArray.push([]);

    return tempArray;
  }
}

/* 
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
 */
