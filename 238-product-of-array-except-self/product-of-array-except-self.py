class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # nums[]
        answer = [1] * len(nums)

        for idx,num in enumerate(nums):
            if idx == 0:
                continue
            # [1, 1, 2, 6]
            answer[idx] = answer[idx - 1] * nums[idx - 1]

        right_products = 1
        for i in range(len(nums) - 1, -1, -1):
            answer[i] = answer[i] * right_products
            right_products *= nums[i]


        return answer