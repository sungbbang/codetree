arr = list(map(int, input().split()))

cnt_arr = [0] * 11
for el in arr:
    if el < 10: continue

    cnt_arr[el // 10] += 1

for i in range(10, 0, -1):
    print(f'{i * 10} - {cnt_arr[i]}')
    