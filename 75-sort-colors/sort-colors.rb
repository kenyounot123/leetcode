# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    # inputs: array nums red,white,blue
    # outputs: sorted array such that same color are next to each other
    # in the order R, W, B ( 0 , 1 , 2 )

    # sort in place, NO SORT FUNCTION
    # inplace sort no extra space
    swap_nums = lambda {|i,j| nums[i],nums[j] = nums[j],nums[i]}
    mid = 1
    i, j, k = 0, 0, nums.length-1
    while(j <= k)
        if(nums[j] < mid)
            swap_nums.call(i,j)
            i += 1
            j += 1
        elsif nums[j] > mid
            swap_nums.call(j, k)
            k -= 1
        else
            j += 1
        end
    end
end