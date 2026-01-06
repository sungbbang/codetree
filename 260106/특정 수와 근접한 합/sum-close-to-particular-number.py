import sys
n, s = map(int, input().split())
arr = list(map(int, input().split()))

ans = sys.maxsize
total = sum(arr)
for i in range(n-1):
    for j in range(i+1, n):
        ans = min(ans, abs((total - arr[i] - arr[j]) - s))

print(ans)