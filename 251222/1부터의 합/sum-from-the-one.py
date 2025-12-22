n = int(input())

sum_ = 0
for i in range(1, n+1):
    sum_ += i
    if sum_ >= n:
        print(i)
        break
