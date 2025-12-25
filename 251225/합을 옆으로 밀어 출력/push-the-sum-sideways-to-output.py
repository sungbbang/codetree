n = int(input())
arr = [int(input()) for _ in range(n)]

sum_ = str(sum(arr))
print(sum_[1:] + sum_[0])