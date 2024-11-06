# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}
def kids_with_candies(candies, extra_candies)
    max_candy = candies.max

    new_array = candies.map do |candy|
        candy + extra_candies >= max_candy
    end

    new_array

end