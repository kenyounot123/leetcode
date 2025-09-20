class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # inputs: integer array nums and an integer k
        # output: array of most frequent elements

        nums_length = len(nums)
        res = [[] for _ in range(nums_length + 1)]
        output = []

        counts = {}
        # 1:3, 2:2, 3:1
        # [0,[3],[2],[1],0,0]
        for num in nums:
            if num in counts:
                counts[num] += 1
            else:
                counts[num] = 1

        for a,v in counts.items():
            res[v].append(a)
        

        for i in range(len(res) - 1, -1, -1):
            if len(res[i]) > 0:
                for num in res[i]:
                    print(num, k)

                    output.append(num)
                    k -= 1
                    if k == 0:
                        return output
        return output