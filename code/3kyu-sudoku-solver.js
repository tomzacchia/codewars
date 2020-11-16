function sudoku(puzzle) {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (puzzle[row][col] === 0) {
                for (var guess = 1; guess < 10; guess++) {
                    if (isGuessValid(puzzle, row, col, guess)) {
                        puzzle[row][col] = guess;

                        if (sudoku(puzzle)) {
                            return puzzle;                            
                        } else {
                            // backtrack
                            puzzle[row][col] = 0;
                        }
                    }
                }
                // backtrack condition: any number from 0-9 cannot be placed at puzzle[row][col] 
                return false;
            }
        }
    }

    // base case: if we loop through entire 2D array and find no zeros
    return true;
}

function isGuessValid(board, row, col, guess) {
    for (var i = 0; i < board.length; i++) {
        var subgridIndexRow = (Math.floor(row/3) * 3) + Math.floor(i/3);
        var subgridIndexCol = (Math.floor(col/3) * 3) + (i % 3)

        var isRowInvalid = board[row][i] === guess;
        var isColInvalid = board[i][col] === guess;
        var isSubgridInvalid = board[subgridIndexRow][subgridIndexCol] === guess;

        if (isRowInvalid || isColInvalid || isSubgridInvalid) return false;
    }

    return true;
}
