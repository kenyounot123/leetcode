/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowNums = new Set()
    const colNums = new Set()
    const subBoard = new Set()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const uniqueSubBoard = `sub-board-${Math.floor(i/3)}-${Math.floor(j/3)}-${board[i][j]}`
            const uniqueRowEntry = `row-${i}-${board[i][j]}`
            const uniqueColEntry = `col-${j}-${board[i][j]}`
            if (board[i][j] === ".") {
                continue
            }
            if (rowNums.has(uniqueRowEntry) || colNums.has(uniqueColEntry) || subBoard.has(uniqueSubBoard)) {
                return false
            }
            subBoard.add(uniqueSubBoard)
            rowNums.add(uniqueRowEntry)
            colNums.add(uniqueColEntry)

        }
    }
    return true
}