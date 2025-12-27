n, m = map(int, input().split())
A = list(map(int, input().split()))

# Please write your code here.
def solve():
    global m
    sum_ = 0
    while m > 0:
        sum_ += A[m-1]
        if m % 2: m -= 1
        else: m //= 2

    return sum_

print(solve())