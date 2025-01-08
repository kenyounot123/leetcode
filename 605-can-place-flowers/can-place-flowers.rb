# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def can_place_flowers(flowerbed, n)
    return true if n == 0
    flowerbed.each_with_index do |val, index|
        next if val == 1

        left_is_empty = (index == 0 || flowerbed[index - 1] == 0)
        right_is_empty = (index == flowerbed.length - 1 || flowerbed[index + 1] == 0)

        if left_is_empty && right_is_empty 
            flowerbed[index] = 1
            n -= 1
        end

        return true if n == 0
    end

    false
end