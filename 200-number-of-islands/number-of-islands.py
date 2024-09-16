class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        '''
        inputs: m x n grid of 0s and 1s
        outputs: integer that represents the amount of islands 
        m is rows
        n is columns
        edge cases: what if theres only 1 row can there be an island?
        this should not affect it because we assume all edges are surrounded by water
        iterate through grid:
            decision:
                we need to perform some sort of check if we hit a 1
                if we hit a 0 we can just go to the next value
            
        '''
        rows, cols = len(grid), len(grid[0])
        islands = 0
        visited = set()
        

        def bfs(r, c):
            # check adjacent positions to see if our island is connected to other 1s
            q = collections.deque()
            visited.add((r,c))
            q.append((r,c))
            directions = [[0, 1], [-1, 0], [0, -1], [1, 0]]

            while q:
                row, col = q.popleft()
                for x,y in directions:
                    r, c = row + x, col + y
                    if (r in range(rows) and 
                       c in range(cols) and 
                       grid[r][c] == "1" and
                       (r,c) not in visited):
                       q.append((r,c))
                       visited.add((r,c))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1' and (r,c) not in visited:
                    bfs(r,c)
                    islands += 1
        return islands
