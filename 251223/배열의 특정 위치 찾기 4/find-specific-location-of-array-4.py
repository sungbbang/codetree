arr = list(map(int, input().split()))

sum_ = 0
cnt = 0
for el in arr:
    if el == 0: break
    
    if el % 2 == 0:
        sum_ += el
        cnt += 1


print(f'{cnt} {sum_}')