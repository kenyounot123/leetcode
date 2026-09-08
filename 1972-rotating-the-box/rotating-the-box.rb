# @param {Character[][]} box_grid
# @return {Character[][]}
def rotate_the_box(box_grid)
    # * = obstacle
    # can land on bottom of grid, obstacle or on another # stone
    # m x n => n * m
    # Transform and then translate
    
    # box_grid[i][j] = box_grid[j][m - 1 - i]
    m = box_grid.size
    n = box_grid[0].size
    # build the array behorehand because we can map positions directly
    output = Array.new(n) { Array.new(m, "." )}
    box_grid.each_with_index do |row, r|
        # index of the rightmost cell which becomes the bottom row
        write = n - 1
        row.each_index.reverse_each do |c|
            if row[c] == "*"
                output[c][m - 1 - r] = "*"
                write = c - 1
            elsif row[c] == "#"
                output[write][m - 1 - r] = "#"
                write -= 1
            end
        end
    end
    output
end