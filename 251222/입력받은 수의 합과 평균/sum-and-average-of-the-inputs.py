n = int(input())
sum_ = 0

for _ in range(n):
    sum_ += int(input())

avg = sum_ / n

print(f"{sum_} {avg:.1f}")