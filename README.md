# TypeScript Algorithms and Data Structures

- [TypeScript Algorithms and Data Structures](#typescript-algorithms-and-data-structures)
    - [Data Structures](#data-structures)
    - [Algorithms](#algorithms)
        - [Algorithms by Topic](#algorithms-by-topic)
        - [Algorithms by Paradigm](#algorithms-by-paradigm)
    - [How to use this repository](#how-to-use-this-repository)
    - [Useful Information](#useful-information)
        - [References](#references)
        - [Big O Notation](#big-o-notation)
        - [Data Structure Operations Complexity](#data-structure-operations-complexity)
        - [Array Sorting Algorithms Complexity](#array-sorting-algorithms-complexity)

This repository contains JavaScript based examples of many
popular algorithms and data structures.

Each algorithm and data structure has its own separate README
with related explanations and links for further reading (including ones
to YouTube videos).

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

`B` - Beginner, `A` - Advanced

-   `B` [Linked List](src/data-structures/linked-list/README.md)
-   `B` [Doubly Linked List](src/data-structures/doubly-linked-list/README.md)
-   `B` [Queue](src/data-structures/queue/README.md)
-   `B` [Stack](src/data-structures/stack/README.md)
-   `B` [Hash Table](src/data-structures/hash-table/README.md)
-   `B` [Heap](src/data-structures/heap/README.md)
-   `B` [Priority Queue](src/data-structures/priority-queue/README.md)
-   `A` [Trie](src/data-structures/trie/README.md)
-   `A` [Tree](src/data-structures/tree/README.md)
    -   `A` [Binary Search Tree](src/data-structures/tree/binary-search-tree/README.md)
    -   `A` [AVL Tree](src/data-structures/tree/avl-tree/README.md)
    -   `A` [Red-Black Tree](src/data-structures/tree/red-black-tree/README.md)
    -   `A` [Segment Tree](src/data-structures/tree/segment-tree/README.md) - with min/max/sum range queries examples
    -   `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree/README.md) (Binary Indexed Tree)
-   `A` [Graph](src/data-structures/graph/README.md) (both directed and undirected)
-   `A` [Disjoint Set](src/data-structures/disjoint-set/README.md)
-   `A` [Bloom Filter](src/data-structures/bloom-filter/README.md)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is
a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced

### Algorithms by Topic

-   **Math**
    -   `B` [Bit Manipulation](src/algorithms/math/bits/README.md) - set/get/update/clear bits, multiplication/division by two, make negative etc.
    -   `B` [Factorial](src/algorithms/math/factorial/README.md)
    -   `B` [Fibonacci Number](src/algorithms/math/fibonacci/README.md)
    -   `B` [Primality Test](src/algorithms/math/primality-test/README.md) (trial division method)
    -   `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm/README.md) - calculate the Greatest Common Divisor (GCD)
    -   `B` [Least Common Multiple](src/algorithms/math/least-common-multiple/README.md) (LCM)
    -   `B` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes/README.md) - finding all prime numbers up to any given limit
    -   `B` [Is Power of Two](src/algorithms/math/is-power-of-two/README.md) - check if the number is power of two (naive and bitwise algorithms)
    -   `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle/README.md)
    -   `A` [Integer Partition](src/algorithms/math/integer-partition/README.md)
    -   `A` [Liu Hui π Algorithm](src/algorithms/math/liu-hui/README.md) - approximate π calculations based on N-gons
-   **Sets**
    -   `B` [Cartesian Product](src/algorithms/sets/cartesian-product/README.md) - product of multiple sets
    -   `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates/README.md) - random permutation of a finite sequence
    -   `A` [Power Set](src/algorithms/sets/power-set/README.md) - all subsets of a set
    -   `A` [Permutations](src/algorithms/sets/permutations/README.md) (with and without repetitions)
    -   `A` [Combinations](src/algorithms/sets/combinations/README.md) (with and without repetitions)
    -   `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence/README.md) (LCS)
    -   `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence/README.md)
    -   `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence/README.md) (SCS)
    -   `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem/README.md) - "0/1" and "Unbound" ones
    -   `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray/README.md) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
    -   `A` [Combination Sum](src/algorithms/sets/combination-sum/README.md) - find all combinations that form specific sum
-   **Strings**
    -   `B` [Hamming Distance](src/algorithms/string/hamming-distance/README.md) - number of positions at which the symbols are different
    -   `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance/README.md) - minimum edit distance between two sequences
    -   `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt/README.md) (KMP Algorithm) - substring search (pattern matching)
    -   `A` [Z Algorithm](src/algorithms/string/z-algorithm/README.md) - substring search (pattern matching)
    -   `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp/README.md) - substring search
    -   `A` [Longest Common Substring](src/algorithms/string/longest-common-substring/README.md)
    -   `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching/README.md)
-   **Searches**
    -   `B` [Linear Search](src/algorithms/search/linear-search/README.md)
    -   `B` [Jump Search](src/algorithms/search/jump-search/README.md) (or Block Search) - search in sorted array
    -   `B` [Binary Search](src/algorithms/search/binary-search/README.md) - search in sorted array
    -   `B` [Interpolation Search](src/algorithms/search/interpolation-search/README.md) - search in uniformly distributed sorted array
-   **Sorting**
    -   `B` [Bubble Sort](src/algorithms/sorting/bubble-sort/README.md)
    -   `B` [Selection Sort](src/algorithms/sorting/selection-sort/README.md)
    -   `B` [Insertion Sort](src/algorithms/sorting/insertion-sort/README.md)
    -   `B` [Heap Sort](src/algorithms/sorting/heap-sort/README.md)
    -   `B` [Merge Sort](src/algorithms/sorting/merge-sort/README.md)
    -   `B` [Quicksort](src/algorithms/sorting/quick-sort/README.md) - in-place and non-in-place implementations
    -   `B` [Shellsort](src/algorithms/sorting/shell-sort/README.md)
    -   `A` [Counting Sort](src/algorithms/sorting/counting-sort/README.md)
    -   `A` [Radix Sort](src/algorithms/sorting/radix-sort/README.md)
-   **Trees**
    -   `B` [Depth-First Search](src/algorithms/tree/depth-first-search/README.md) (DFS)
    -   `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search/README.md) (BFS)
-   **Graphs**
    -   `B` [Depth-First Search](src/algorithms/graph/depth-first-search/README.md) (DFS)
    -   `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search/README.md) (BFS)
    -   `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal/README.md) - finding Minimum Spanning Tree (MST) for weighted undirected graph
    -   `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra/README.md) - finding shortest paths to all graph vertices from single vertex
    -   `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford/README.md) - finding shortest paths to all graph vertices from single vertex
    -   `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall/README.md) - find shortest paths between all pairs of vertices
    -   `A` [Detect Cycle](src/algorithms/graph/detect-cycle/README.md) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
    -   `A` [Prim’s Algorithm](src/algorithms/graph/prim/README.md) - finding Minimum Spanning Tree (MST) for weighted undirected graph
    -   `A` [Topological Sorting](src/algorithms/graph/topological-sorting/README.md) - DFS method
    -   `A` [Articulation Points](src/algorithms/graph/articulation-points/README.md) - Tarjan's algorithm (DFS based)
    -   `A` [Bridges](src/algorithms/graph/bridges/README.md) - DFS based algorithm
    -   `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path/README.md) - Fleury's algorithm - Visit every edge exactly once
    -   `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle/README.md) - Visit every vertex exactly once
    -   `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components/README.md) - Kosaraju's algorithm
    -   `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman/README.md) - shortest possible route that visits each city and returns to the origin city
-   **Uncategorized**
    -   `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower/README.md)
    -   `B` [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation/README.md) - in-place algorithm
    -   `B` [Jump Game](src/algorithms/uncategorized/jump-game/README.md) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
    -   `B` [Unique Paths](src/algorithms/uncategorized/unique-paths/README.md) - backtracking, dynamic programming and Pascal's Triangle based examples
    -   `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens/README.md)
    -   `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour/README.md)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class
of algorithms. It is an abstraction higher than the notion of an algorithm, just as an
algorithm is an abstraction higher than a computer program.

-   **Brute Force** - look at all the possibilities and selects the best solution
    -   `B` [Linear Search](src/algorithms/search/linear-search/README.md)
    -   `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray/README.md)
    -   `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman/README.md) - shortest possible route that visits each city and returns to the origin city
-   **Greedy** - choose the best option at the current time, without any consideration for the future
    -   `B` [Jump Game](src/algorithms/uncategorized/jump-game/README.md)
    -   `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem/README.md)
    -   `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra/README.md) - finding shortest path to all graph vertices
    -   `A` [Prim’s Algorithm](src/algorithms/graph/prim/README.md) - finding Minimum Spanning Tree (MST) for weighted undirected graph
    -   `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal/README.md) - finding Minimum Spanning Tree (MST) for weighted undirected graph
-   **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
    -   `B` [Binary Search](src/algorithms/search/binary-search/README.md)
    -   `B` [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower/README.md)
    -   `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle/README.md)
    -   `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm/README.md) - calculate the Greatest Common Divisor (GCD)
    -   `B` [Merge Sort](src/algorithms/sorting/merge-sort/README.md)
    -   `B` [Quicksort](src/algorithms/sorting/quick-sort/README.md)
    -   `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search/README.md) (DFS)
    -   `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search/README.md) (DFS)
    -   `B` [Jump Game](src/algorithms/uncategorized/jump-game/README.md)
    -   `A` [Permutations](src/algorithms/sets/permutations/README.md) (with and without repetitions)
    -   `A` [Combinations](src/algorithms/sets/combinations/README.md) (with and without repetitions)
-   **Dynamic Programming** - build up a solution using previously found sub-solutions
    -   `B` [Fibonacci Number](src/algorithms/math/fibonacci/README.md)
    -   `B` [Jump Game](src/algorithms/uncategorized/jump-game/README.md)
    -   `B` [Unique Paths](src/algorithms/uncategorized/unique-paths/README.md)
    -   `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance/README.md) - minimum edit distance between two sequences
    -   `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence/README.md) (LCS)
    -   `A` [Longest Common Substring](src/algorithms/string/longest-common-substring/README.md)
    -   `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence/README.md)
    -   `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence/README.md)
    -   `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem/README.md)
    -   `A` [Integer Partition](src/algorithms/math/integer-partition/README.md)
    -   `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray/README.md)
    -   `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford/README.md) - finding shortest path to all graph vertices
    -   `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall/README.md) - find shortest paths between all pairs of vertices
    -   `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching/README.md)
-   **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test
    if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a
    different path of finding a solution. Normally the DFS traversal of state-space is being used.
    -   `B` [Jump Game](src/algorithms/uncategorized/jump-game/README.md)
    -   `B` [Unique Paths](src/algorithms/uncategorized/unique-paths/README.md)
    -   `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle/README.md) - Visit every vertex exactly once
    -   `A` [N-Queens Problem](src/algorithms/uncategorized/n-queens/README.md)
    -   `A` [Knight's Tour](src/algorithms/uncategorized/knight-tour/README.md)
    -   `A` [Combination Sum](src/algorithms/sets/combination-sum/README.md) - find all combinations that form specific sum
-   **Branch & Bound** - remember the lowest-cost solution found at each stage of the backtracking
    search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of
    a least-cost solution to the problem, in order to discard partial solutions with costs larger than the
    lowest-cost solution found so far. Normally BFS traversal in combination with DFS traversal of state-space
    tree is being used.

## How to use this repository

**Install all dependencies**

```
npm install
```

**Run ESLint**

You may want to run it to check code quality.

```
npm run lint
```

**Run all tests**

```
npm test
```

**Run tests by name**

```
npm test -- 'LinkedList'
```

**Playground**

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write
tests for it in `./src/playground/__test__/playground.test.js`.

Then just simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'
```

## Useful Information

### References

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Big O Notation

Order of growth of algorithms specified in Big O notation.

![Big O graphs](assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------ |
| **O(1)**       | 1                            | 1                             | 1                              |
| **O(log N)**   | 3                            | 6                             | 9                              |
| **O(N)**       | 10                           | 100                           | 1000                           |
| **O(N log N)** | 30                           | 600                           | 9000                           |
| **O(N^2)**     | 100                          | 10000                         | 1000000                        |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                      |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                     |

### Data Structure Operations Complexity

| Data Structure         | Access | Search | Insertion | Deletion | Comments                                             |
| ---------------------- | :----: | :----: | :-------: | :------: | :--------------------------------------------------- |
| **Array**              |   1    |   n    |     n     |    n     |                                                      |
| **Stack**              |   n    |   n    |     1     |    1     |                                                      |
| **Queue**              |   n    |   n    |     1     |    1     |                                                      |
| **Linked List**        |   n    |   n    |     1     |    1     |                                                      |
| **Hash Table**         |   -    |   n    |     n     |    n     | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree** |   n    |   n    |     n     |    n     | In case of balanced tree costs would be O(log(n))    |
| **B-Tree**             | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **Red-Black Tree**     | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **AVL Tree**           | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| **Bloom Filter**       |   -    |   1    |     1     |    -     | False positives are possible while searching         |

### Array Sorting Algorithms Complexity

| Name               |     Best      |         Average         |            Worst            | Memory | Stable | Comments                    |
| ------------------ | :-----------: | :---------------------: | :-------------------------: | :----: | :----: | :-------------------------- |
| **Bubble sort**    |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                             |
| **Insertion sort** |       n       |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |  Yes   |                             |
| **Selection sort** | n<sup>2</sup> |      n<sup>2</sup>      |        n<sup>2</sup>        |   1    |   No   |                             |
| **Heap sort**      | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   1    |   No   |                             |
| **Merge sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n&nbsp;log(n)        |   n    |  Yes   |                             |
| **Quick sort**     | n&nbsp;log(n) |      n&nbsp;log(n)      |        n<sup>2</sup>        | log(n) |   No   |                             |
| **Shell sort**     | n&nbsp;log(n) | depends on gap sequence | n&nbsp;(log(n))<sup>2</sup> |   1    |   No   |                             |
| **Counting sort**  |     n + r     |          n + r          |            n + r            | n + r  |  Yes   | r - biggest number in array |
| **Radix sort**     |    n \* k     |         n \* k          |           n \* k            | n + k  |  Yes   | k - length of longest key   |
