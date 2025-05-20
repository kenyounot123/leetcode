# @param {Integer[]} nums
# @return {Integer}
def longest_consecutive(nums)
    # inputs: unsorted array of integers
    # outputs: length of longest consecutive element

    # example: [1,5,3,2] = 3
    #          [] = 0
    #          [2,4,6] = 1
    #          [-1,-2,-3] = 3
    
    longest = 0
    nums = nums.to_set


    nums.each do |num|
        if !nums.include?(num - 1)
            current_num = num
            current_length = 1
            while nums.include?(current_num + 1)
                current_num += 1
                current_length += 1
            end

            longest = [longest, current_length].max
        end
    end

    longest
end