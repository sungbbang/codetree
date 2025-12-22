a, b = map(int, input().split())

sum_ = 0
cnt = 0
for i in range(a, b + 1):
    if i % 5 == 0 or i % 7 == 0:
        cnt += 1
        sum_ += i

print(f'{sum_} {(sum_ / cnt):.1f}')