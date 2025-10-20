class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # return true if s2 is a permutation of s1
        # false otherwise

        # s1 permutation is substring of s2 == true
        # Do we need the counts of charcaters ?

        # pointers?

        # check ever substring of len(s1) in s2 ?

        s1_count = defaultdict(int)
        s2_count = defaultdict(int)

        for c in s1:
            s1_count[c] += 1
        
        for c in s2[0:len(s1)]:
            s2_count[c] += 1
        
        if s1_count == s2_count:
            return True
        
        l = 0
        for i in range(len(s1), len(s2)):
            s2_count[s2[i]] += 1
            s2_count[s2[l]] -= 1

            if s2_count[s2[l]] == 0:
                del s2_count[s2[l]]

            if s1_count == s2_count:
                return True
            
            l += 1
        
        return False