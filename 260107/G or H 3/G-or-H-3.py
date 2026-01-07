n, k = map(int, input().split())
MAX = 10000
arr = [0] * (MAX+1)
for _ in range(n):
    pos, alpha = input().split()
    arr[int(pos)] = 1 if alpha == 'G' else 2

ans = 0
for i in range(1, MAX-k+1):
    sum_ = 0
    for j in range(k+1):
        sum_ += arr[i+j]
    ans = max(ans, sum_)

print(ans)