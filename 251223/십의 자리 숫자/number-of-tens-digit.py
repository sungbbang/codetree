arr = list(map(int, input().split()))

cnt_arr = [0] * 10

for el in arr:
    if el == 0:
        break
    
    cnt_arr[el // 10 % 10] += 1

for i in range(1, 10):
    print(f'{i} - {cnt_arr[i]}')