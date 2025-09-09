# @param {String} s
# @return {Boolean}
def is_valid(s)
    # input: a string s
    # Output: boolean true or false
    return false if s.length == 1

    stack = []

    s.chars.each do |char|
        if "({[".include?(char)
            stack << char
            next
        end
    
        if stack.last == "(" && char == ")" ||
            stack.last == "[" && char == "]" ||
            stack.last == "{" && char == "}"
            stack.pop
        else 
            return false
        end
    end

    stack.length == 0
end