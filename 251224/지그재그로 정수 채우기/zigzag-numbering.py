n, m = map(int, input().split())

# Please write your code here.
arr = [[0 for _ in range(m)] for _ in range(n)]

num = 0
for i in range(n):
    for j in range(m):
        arr[j][i] = num
        num += 1

for row in arr:
    print(*row)