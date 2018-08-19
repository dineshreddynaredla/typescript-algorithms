# Longest Common Substring Problem

The longest common substring problem is to find the longest string (or strings) that is a substring (or are substrings) of two or more strings.

## Example

The longest common substring of the strings `ABABC`, `BABCA` and `ABCBA` is string `ABC` of length 3. Other common substrings are `A`, `AB`, `B`, `BA`, `BC` and `C`.

```
ABABC
  |||
 BABCA
  |||
  ABCBA
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_substring_problem)
- [YouTube](https://www.youtube.com/watch?v=BysNXJHzCEs&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

## Example

Given strings: **abcdef** and  **zbcdf**

|     | a   | b   | c   | d   | e   | f   |
| --- | --- | --- | --- | --- | --- | --- |
| z   | 0   | 0   | 0   | 0   | 0   | 0   |
| b   | 0   | 1   | 0   | 0   | 0   | 0   |
| c   | 0   | 0   | 2   | 0   | 0   | 0   |
| d   | 0   | 0   | 0   | 3   | 0   | 0   |
| f   | 0   | 0   | 0   | 0   | 0   | 1   |

Result:

In diagonal or V[i, j] where i == j 
Traverse from max to min (3, 2, 1) i.e (d, c, b) bcd