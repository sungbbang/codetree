n, k = map(int, input().split())
MAX = 100
arr = [0] * (MAX+1)
for _ in range(n):
    c, b = map(int, input().split())
    arr[b] += c

ans = 0
for i in range(MAX+1):
    sum_val = 0
    for j in range(i-k, i+k+1):
        if 0 <= j <= MAX:
            sum_val += arr[j]
    ans = max(ans, sum_val)

print(ans)