arr = list(map(int, input().split()))
sum_ = 0
ans = []
for el in arr:
    if el >= 250:
        break
    
    sum_ += el
    ans.append(el)

avg = sum_ / len(ans)

print(f'{sum_} {avg:.1f}')