n, m = map(int, input().split())

# Please write your code here.
arr = [[0] * m for _ in range(n)]
num = 1

for i in range(n+m-1):
    for r in range(n):
        c = i - r        
        if 0 <= c and c < m:
            arr[r][c] = num
            num += 1

for row in arr:
    print(*row)
