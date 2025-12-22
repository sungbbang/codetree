sum_ = 0
for _ in range(int(input())):
    n = int(input())
    if n % 2 == 1 and n % 3 == 0:
        sum_ += n

print(sum_)