# @param {Integer[]} nums
# @param {Integer} k
# @param {Integer[][]} edges
# @return {Integer}
def maximum_value_sum(nums, k, edges)
    # Inputs: k is an integer
            #  nums[] an array of integrs representing the values of the tree
            #  nums[1] means the value of nums[1] represents the value of node 1 
            #  edges is 2D integer array (the line between nodes X and Y)
    # smallest value is a tree with two nodes, 1 edge

    #  output: max val

    # greedy algorithmn ?

    pd, nd = nums.collect {|num| (num ^ k) - num }.partition(&:positive?)
    return nums.sum + pd.sum - (pd.size.even? ? 0 : pd.min) if nd.empty?
    return nums.sum if pd.empty?
    nums.sum + pd.sum + (pd.size.even? ? 0 : (pd.min + nd.max > 0 ? nd.max : -pd.min))
end