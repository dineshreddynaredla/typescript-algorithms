**Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
    search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
    a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
    lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
    tree is being used.