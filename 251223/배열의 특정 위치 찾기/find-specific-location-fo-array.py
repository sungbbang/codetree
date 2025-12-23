arr = list(map(int, input().split()))

sum1 = 0
sum2 = 0
cnt = 0
for i in range(len(arr)):
    if (i+1) % 2 == 0:
        sum1 += arr[i]
    if (i+1) % 3 == 0:
        sum2 += arr[i]
        cnt += 1

print(f'{sum1} {(sum2 / cnt):.1f}')