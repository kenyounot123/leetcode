# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    # Input: array of numbers nums[]
    # Output: boolean

    nums_frequency = Hash.new(0)
    nums.each do |num|
        if nums_frequency.has_key?(num)
            return true
        else
            nums_frequency[num] += 1
        end
    end

    false
end