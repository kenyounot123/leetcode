class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # return true if s2 is a permutation of s1
        # false otherwise

        # s1 permutation is substring of s2 == true
        # Do we need the counts of charcaters ?

        # pointers?

        # check ever substring of len(s1) in s2 ?

        if len(s1) > len(s2):
            return False
        
        freq_s1 = defaultdict(int)
        freq_s2 = defaultdict(int)

        s1Count = [0] * 26
        s2Count = [0] * 26

        # Initialize frequency counts for s1 and the first window in s2
        for i in range(len(s1)):
            s1Count[ord(s1[i]) - ord('a')] += 1
            s2Count[ord(s2[i]) - ord('a')] += 1

        # Slide the window over s2
        for i in range(len(s2) - len(s1)):
            if s1Count == s2Count:
                return True
            s2Count[ord(s2[i]) - ord('a')] -= 1
            s2Count[ord(s2[i + len(s1)]) - ord('a')] += 1

        # Check the last window
        return s1Count == s2Count