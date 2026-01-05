import sys
n = int(input())
A = list(map(int, input().split()))

min_sum = sys.maxsize
for i in range(n):
    sum_ = 0
    for j in range(n):
        diff = abs(j - i)
        sum_ += A[j] * diff
    min_sum = min(min_sum, sum_)

print(min_sum)