# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    # Input: Array of numbers [], and a target integer c
    # Output: return indices such that num[a] + num[b] = c Find a and b
    hash = {}
    nums.each_with_index do |num, idx|
        diff = target - num
        if hash[diff]
            return [idx, hash[diff]]
        else
            hash[num] = idx
        end
    end
end