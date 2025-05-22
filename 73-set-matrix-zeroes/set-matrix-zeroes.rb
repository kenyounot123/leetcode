# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
    # inputs: m x n matrix
    # outputs: return the transformed matrix 

    # O(1) space complexity
    # Brute force approach: check every element and then for every 0 we encounter
    # set the row and column values to 0 as well. 
    return if matrix.empty?

    m = matrix.length
    n = matrix[0].length

    first_row_zero = matrix[0].include?(0)
    first_column_zero = matrix.any? { |row| row[0] == 0 }
    
    (1...m).each do |i|
        (1...n).each do |j|
            if matrix[i][j] == 0
                matrix[0][j] = 0
                matrix[i][0] = 0
            end
        end
    end

    (1...m).each do |i|
        (1...n).each do |j|
            if matrix[0][j] == 0 || matrix[i][0] == 0
                matrix[i][j] = 0
            end
        end
    end

    if first_row_zero
        (0...n).each { |j| matrix[0][j] = 0 }
    end

    if first_column_zero
        (0...m).each { |i| matrix[i][0] = 0}
    end

    matrix
end