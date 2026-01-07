n, k = map(int, input().split())
MAX = 100
arr = [0] * (MAX+1)
for _ in range(n):
    c, b = map(int, input().split())
    arr[b] += c

ans = 0
for i in range(k, MAX-k+1):
    ans = max(ans, sum(arr[i+1-k:i+k+2]))

print(ans)