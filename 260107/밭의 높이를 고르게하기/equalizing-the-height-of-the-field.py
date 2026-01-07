import sys
n, h, t = map(int, input().split())
arr = list(map(int, input().split()))

ans = sys.maxsize
for i in range(n):
    cost = 0
    for j in range(i, n):
        cost += abs(arr[j] - h)
        if j - i + 1 >= t:
            ans = min(ans, cost)

print(ans)