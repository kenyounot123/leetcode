class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # So we are given a string s and an integer k.
        # return the length of the longest substring after performing the operations
        # substrings usually rely on two pointers


        longest = 0
        l = 0
        freq = defaultdict(int)

        for r in range(len(s)):
            freq[s[r]] += 1
            max_freq = max(freq.values())
            curr_len = r - l + 1
            if curr_len - max_freq > k:
                freq[s[l]] -= 1
                l += 1
            longest = max(longest, r - l + 1)

        return longest