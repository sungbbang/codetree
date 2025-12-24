n, m = map(int, input().split())
arr = [[0] * n for _ in range(n)]

for _ in range(m):
    r, c = map(int, input().split())
    arr[r-1][c-1] = 1

for row in arr:
    print(*row)