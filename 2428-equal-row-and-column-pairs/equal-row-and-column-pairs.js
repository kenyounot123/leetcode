/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rows = new Map()
    let cols = new Map() 
    for (let r = 0; r < grid.length; r++) {
        const row = []
        const col = []
        for (let c = 0; c < grid.length; c++) {
            row.push(grid[r][c])
            col.push(grid[c][r])
        }
        const strRow = row.toString()
        const strCol = col.toString()
        rows.set(strRow, (rows.get(strRow) || 0) + 1)
        cols.set(strCol, (cols.get(strCol) || 0) + 1)
    }
    let pairs = 0
    for (const [row,val] of rows) {
        if (cols.has(row)) {
            pairs += cols.get(row) * val
        }
    }
    return pairs
};