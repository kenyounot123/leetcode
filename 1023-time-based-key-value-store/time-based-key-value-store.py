class TimeMap:

    def __init__(self):
        self.cache = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.cache:
            self.cache[key].append([value, timestamp])
        else:
            self.cache[key] = [[value, timestamp]]
        

    def get(self, key: str, timestamp: int) -> str:
        # Find values of that key if cache key exists
        # values are already sorted by timestamp
        values = self.cache[key] if key in self.cache else []
        result = ""

        l = 0
        r = len(values) - 1

        while l <= r:
            mid = (l+r) // 2
            if values[mid][1] <= timestamp:
                result = values[mid][0]
                l = mid + 1
            else:
                r = mid - 1
        return result



# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)