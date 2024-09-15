class Solution(object):
    def largestVariance(self, s):
        """
        :type s: str
        :rtype: int

        variance is the largest difference betweehn the 
        number of occurences of any 2 characters in the string

        inputs: string s 
        outputs: largest variance among all substrings of s

        s = 'aababbb'
        output: 3
        babbb is the substring with variance 3. count of b - count of a = 3
        edge case: we need a pair of values to update the max variance.
        a = +1
        b = -1
        max = 0
        curr = 
        aababb
        aab
        
        kadane's algorithm either 
            add value to max
            reset, then add value to max
        """
        freq = Counter(s)
        res = 0
        for a in freq.keys():
            for b in freq.keys():
                if a == b:
                    continue
                left_a = freq[a]
                left_b = freq[b]
                running_sum = 0
                has_a = has_b = False
                
                for char in s:
                    if char != a and char != b:
                        continue
                    if char == a:
                        running_sum += 1
                        left_a -= 1
                        has_a = True
                    else:
                        running_sum -= 1
                        left_b -= 1
                        has_b = True
                    if running_sum < 0 and left_a > 0 and left_b > 0: # reset algo when there are left `a` and `b`
                        running_sum = 0
                        has_a = has_b = False
                    if has_a and has_b: # if the string has `a` and `b` chars. Or it's variance = 0
                        res = max(res, running_sum)
        return res

        
        

        
