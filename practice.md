**Longest Common Subsequence**  
For input,  
```
If Input[i] == Input[j], Value will be  
    [i-1][j-1] + 1
else  
    Max([i, j-1], [i-1, j-1], [i-1, j]) + 1  
```

Abdul:  
```
If(Input[i] == Input[j])  
    [i-1][j-1] + 1  
else  
    Max ([i, j-1], [i-1, j])
```
Note: 0 padding

**Longest Common Substring**  
```
For input,  
If Input1[i] == Input2[j], Value will be  
    T[i-1][j-1] + 1  
else 
    T[i][j] = 0
```
Note: 0 Padding


**Coin Chaning Dynamic Programming**  
```
T[i] = Min(T[i], T[i - Coins[j] + 1]) if i >= Coins[j]
T[j] = Min(T[j], T[j-Coins[i] + 1])
```
*Another Formula*  
Note:
If r > c Copy the value from above cell
else
1. Exclude the new coin
2. Include new coin
3. Add the number of ways from 1 and 2

```
for(i=0; i < c ; i++){
    for(j=0; j < t; j++){
        if(i==0 && j==0){
            T[i][j] = 1;
        }else{
            if(i > j){
                T[i][j] = T[i-1][j]
            }else{
                T[i][j] = T[i-1][j] + T[i][j-i]
            }
        }
    }    
}
```
where c: number coins  
t: total  




**Longest Palindrom Susequence**  
```
If(Input[i] == Input[j])  
    T[i][j] = T[i+1][j-1] + 2  
else  
    T[i][j] = Max(T[i+1][j], T[i][j-1])
```

1. 2 + diagonally previous cell
2. Max of cells
3. Mark all Diagonal cells as 1 and below diagonal as 0
4. Diagonal order

**Egg Dropping Problem**  
```
if(i > j){
    T[i][j] = T[i-1][j]
}else{
    T[i][j] = 1 + Min(Max(T[i-1][k-1], T[i][j-k]))
}
```
where  
i is egg  
j is floor
k is 1..j


**Knapsack Problem**
1. Greedy Method
    If Profit/Weight is possible or fraction is possible
2. 0/1 Method
    If Profit/Weigt is not possible
