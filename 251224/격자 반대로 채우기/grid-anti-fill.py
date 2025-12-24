n = int(input())

arr = [[0] * n for _ in range(n)]

num = 1
for c in range(n-1, -1, -1):
    if c % 2 == 1:
        for r in range(n-1, -1, -1):
            arr[r][c] = num
            num += 1
    else:
        for r in range(n):
            arr[r][c] = num
            num += 1


for row in arr:
    print(*row)