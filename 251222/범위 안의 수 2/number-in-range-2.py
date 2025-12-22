cnt = 0
sum_ = 0
for _ in range(10):
    n = int(input())
    if 0 <= n and n <= 200:
        cnt += 1
        sum_ += n

print(f'{sum_} {(sum_ / cnt):.1f}')