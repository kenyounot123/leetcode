class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # 9x9 matrix
        # Validate the filled cells according to rules:
            # each row must contain digits 1-9 without repetition
            # each column must contain 1-9 without repetition
            # each of the nine 3x3 sub boxes must contain digits 1-9
        # Output is true or false checking if a board is valid


        # We can use Set() and append to it for each cell we are on keeping one set for columns
        # and one set for rows.
            # For each cell, if it is not in rowset, colset and gridset then we can continue, if it is 
            # we can instantly return false since it is an invalid board.
                # the problem is the set needs to be reset for every new col,row, and grid 

        # The tricky part is validating the 3x3 subgrids

        row_set = set()
        col_set = set()
        sub_grid_set = set()

        rows = len(board)
        cols = len(board[0])

        for r in range(rows):
            for c in range(cols):
                if board[r][c] == ".":
                    continue

                sub_grid_x = (r // 3)
                sub_grid_y = (c // 3)
                sub_grid = (sub_grid_x, sub_grid_y)

                if ((r,board[r][c]) not in row_set and
                    (c, board[r][c]) not in col_set and
                    (sub_grid, board[r][c]) not in sub_grid_set):
                    row_set.add((r,board[r][c]))
                    col_set.add((c,board[r][c]))

                    sub_grid_set.add((sub_grid,board[r][c]))
                    continue
                else:
                    print([(r,board[r][c]), (c, board[r][c]), sub_grid] )
                    return False

        return True


        