# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    s_word_count = Hash.new(0)
    s.split("").each do |char|
        s_word_count[char] += 1
    end

    t.split("").each do |char|
        if s_word_count.include?(char)
            s_word_count[char] -= 1 
        else
            return false
        end
    end

    return true if s_word_count.values.all? { |v| v == 0 }
    false
end