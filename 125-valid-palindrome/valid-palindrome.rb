# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    # Inputs: given a string s 
    # Output: true or false whether s is a palindrome or not
    normalized_string = s.downcase.gsub(/[^a-z0-9]/, "")
    normalized_string == normalized_string.reverse
end