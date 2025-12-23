n = int(input())
price = list(map(int, input().split()))

# Please write your code here.
profit = 0
for i in range(n):
    for j in range(i+1, n):
        if price[j] - price[i] > profit:
            profit = price[j] - price[i]

print(profit)