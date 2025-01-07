# @param {String} str1
# @param {String} str2
# @return {String}
def gcd_of_strings(str1, str2)
    return "" unless str1 + str2 == str2 + str1

    a = str1.length
    b = str2.length

    while b != 0 do
        tmp = a % b
        break if tmp == 0
        a = b
        b = tmp
    end

    return str1[0,b]
end