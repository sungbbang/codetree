import sys
n = int(input())
checkpoints = [tuple(map(int, input().split())) for _ in range(n)]

ans = sys.maxsize
for i in range(1, n-1):
    sum_ = 0
    x, y = checkpoints[0]
    for j in range(1, n):
        if i == j: continue
        nx, ny = checkpoints[j]
        sum_ += abs(nx - x) + abs(ny - y)
        x, y = nx, ny
    ans = min(ans, sum_)

print(ans)