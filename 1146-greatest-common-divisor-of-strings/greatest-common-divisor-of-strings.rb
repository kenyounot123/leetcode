# @param {String} str1
# @param {String} str2
# @return {String}
def gcd_of_strings(str1, str2)
    return "" unless str1 + str2 == str2 + str1

    a = str1.length
    b = str2.length

    gcd = a.gcd(b)
    str1[0...gcd]
end