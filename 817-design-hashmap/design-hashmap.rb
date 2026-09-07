class MyHashMap
    def initialize()
        @mapping = []
        @key_to_index_mapping = Array.new(0)
    end


=begin
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
        if @key_to_index_mapping[key] 
            @mapping[@key_to_index_mapping[key]][1] = value
        else
            @mapping << [key, value]
            @key_to_index_mapping[key] = @mapping.size - 1
        end
        @mapping
    end


=begin
    :type key: Integer
    :rtype: Integer
=end
    def get(key)
        if @key_to_index_mapping[key]
            @mapping[@key_to_index_mapping[key]][1]
        else
            -1
        end
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def remove(key)
        index = @key_to_index_mapping[key]
        return unless index

        last_index = @mapping.size - 1

        if index != last_index
            last_value = @mapping[last_index]
            @mapping[index] = last_value
            @key_to_index_mapping[last_value[0]] = index
        end
        @mapping.pop
        @key_to_index_mapping[key] = nil
    end


end

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap.new()
# obj.put(key, value)
# param_2 = obj.get(key)
# obj.remove(key)