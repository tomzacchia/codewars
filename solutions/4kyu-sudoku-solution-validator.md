## [Problem](https://www.codewars.com/kata/529bf0e9bdf7657179000008)

### Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

### Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

### Examples

| Game Board | Array Representation |
| --- | ---|
| <img src="https://github.com/tomzacchia/codewars/blob/main/images/sudoku.jpg" >| <img src="https://github.com/tomzacchia/codewars/blob/main/images/sudoku_2D.png" width="250px" height="auto" > |

## [Full Solution](https://github.com/tomzacchia/codewars/blob/main/code/sudoku.js)

## Initial Thoughts

In Sudoku a player wins the game if each row, each column and each subgrid (3x3 grid) contains unique values from 1 to 9. The data structure chosing to repesent the board is a 2D array, where the array and all sub arrays have a length of 9.

Based on the win conditions listed above, my approach consisted of the following:
* Use a functional programming approach to avoid mutating original game data
* Reorganize the data to aggregate all the columns into a single array
* Repeat previous step to aggreate all rows and subgrids into their respetive arrays
* Validate that all rows, columns and subgrids contain unique values from 1 to 9

## Aggregating Rows and Columns
It is relatively straightforward to aggregate all numbers in the same row or number into a subarray. This was accomplished by using a nested for-loop and pushing the current board value, ```board[row][col]```, into a specified subarray. Below is the function for aggregating all columns.
```js
  function createColumnsArray(board) {
    var columnsArray = createEmptySubArrays();
    for (var row = 0; row < 9; row++) {
      for (var column = 0; column < 9; column++) {
        columnsArray[column].push(board[row][column]);
      }
    }

    return columnsArray;
  }
 ```
 In the case where ``` row = 0 ```, as the inner loop counter is incremented the algorithm is descending down the first column of the array representing of the game giving us the following subarray: 
 ``` [5, 6, 1, 8, 4, 7, 9, 2, 3] ```
 
 ## Aggregating Values in Subgrids
 
![subgrid-indexes](https://github.com/tomzacchia/codewars/blob/main/images/sudoku_grid.png)
 
A Sudoku board has 9 3x3 subgrids. I gave each subgrid an index as illustrated in the picture above. In order to determine the subgrid index of ```currentNumber = board[row][column]``` the following operation is performed:
```
  var gridRow = Math.floor(row / 3);
  var gridColumn = Math.floor(column / 3);
  var subGridIndex = 3 * gridRow + gridColumn;
```

In the case of board[4, 1], using the above procedure yields the following following:
```
  var gridRow = Math.floor(4 / 3); // 1
  var gridColumn = Math.floor(1 / 3); // 0
  var subGridIndex = 3 * 1 + 0; // 3
```
Note that arrays are zero-indexed as such accesing subgridsArray[3] would give us the subarray with ``` subgrid index = 4 ```;
 
 ```js
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
 
 ```

