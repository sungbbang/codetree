arr = list(map(int, input().split()))

sum_ = 0
cnt = 0
for el in arr:
    if el == 0: break
    sum_ += el
    cnt += 1

avg = sum_ / cnt

print(f'{sum_} {avg:.1f}')