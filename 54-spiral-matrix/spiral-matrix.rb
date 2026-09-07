# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
    left = 0
    right = matrix[0].size - 1
    top = 0
    bottom = matrix.size - 1
    output = []

    while left <= right && top <= bottom
        (left..right).each do |i|
            output << matrix[top][i]
        end
        top += 1

        (top..bottom).each do |i|
            output << matrix[i][right]
        end
        right -= 1

        if top <= bottom
            (left..right).reverse_each do |i|
                output << matrix[bottom][i]
            end
            bottom -= 1
        end

        if left <= right
            (top..bottom).reverse_each do |i|
                output << matrix[i][left]
            end
            left += 1
        end
    end

    output
end