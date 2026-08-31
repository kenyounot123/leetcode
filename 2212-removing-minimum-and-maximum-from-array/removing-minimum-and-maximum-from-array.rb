# @param {Integer[]} nums
# @return {Integer}
def minimum_deletions(nums)
    # all integers in nums are unique
    # goal is to remove max and min from nums[]

    # output: minimum number of deletions it took

    # if max == min, remove just 1 value

    # why cant we just sort and then always remove the first and last element ?
    min_num = Float::INFINITY
    max_num = -Float::INFINITY

    indexed_nums = Array.new(2)

    nums.each_with_index do |num, index|
        if min_num > num
            min_num = num
            indexed_nums[0] = [min_num, index]
        end

        if max_num < num 
            max_num = num
            indexed_nums[1] = [max_num, index]
        end
    end

    min_position = indexed_nums[0][1]
    max_position = indexed_nums[1][1]


    # so now what we need is an algorithm to determine min deletions
    # we can either start from front , start from back, or do a mixed approach
    # each produces the following:
    start_strat = [min_position, max_position].max + 1
    back_strat = nums.size - [min_position, max_position].min
    mixed_strat = ([min_position, max_position].min + 1) + (nums.size - [min_position, max_position].max)


    [start_strat, back_strat, mixed_strat].min
end