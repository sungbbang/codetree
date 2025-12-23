arr = list(map(int, input().split()))
sum_ = 0

for el in arr:
    if el >= 250:
        break
    
    sum_ += el

avg = sum_ / len(arr)

print(f'{sum_} {avg:.1f}')