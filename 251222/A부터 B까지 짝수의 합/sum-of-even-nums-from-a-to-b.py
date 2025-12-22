a, b = map(int, input().split())

sum_ = 0
for i in range(a, b + 1):
    if i % 2 == 0: sum_ += i

print(sum_)