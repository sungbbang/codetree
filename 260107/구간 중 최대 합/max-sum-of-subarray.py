n, k = map(int, input().split())
arr = list(map(int, input().split()))

ans = -1
for i in range(n-k+1):
    sum_ = 0
    for j in range(k):
        sum_ += arr[i+j]
    ans = max(ans, sum_)


print(ans)