# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    s_word_count = Hash.new(0)
    s.split("").each do |char|
        s_word_count[char] += 1
    end

    t.split("").each do |char|
        return false if !s_word_count.has_key?(char)
        s_word_count[char] -= 1
        s_word_count.delete(char) if s_word_count[char] == 0 
    end

    return s_word_count.empty?
end