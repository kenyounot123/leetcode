# @param {Integer[]} nums
# @param {Integer} limit
# @return {Integer[]}
def lexicographically_smallest_array(nums, limit)
    # Inputs: nums array nums[] and a integer limit
    # core loop:

    # sort by values while recording each value to its index
    pairs = nums.each_with_index.sort_by { |value, index| value }
    answer = Array.new(nums.length)
    left = 0
    # separate into groups that can be swappable by finding neighbors
    while left < pairs.size
        right = left
        # increment right until we reach the boundary 
        while right + 1 < pairs.size && (pairs[right + 1][0] - pairs[right][0]).abs <= limit
            right += 1
        end

        group = pairs[left..right]
        values = group.map(&:first)
        positions = group.map(&:last)

        positions.sort.each_with_index do |pos, index|
            answer[pos] = values[index]
        end

        left = right + 1
    end


    answer
end
