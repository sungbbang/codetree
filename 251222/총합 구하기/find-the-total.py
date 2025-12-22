a, b = map(int, input().split())

sum_ = 0
for i in range(a, b + 1):
    if i % 6 == 0 and i % 8 != 0:
        sum_ += i

print(sum_)