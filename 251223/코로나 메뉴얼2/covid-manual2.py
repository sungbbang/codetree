cnt_arr = [0] * 4
for _ in range(3):
    a, b = input().split()
    b = int(b)
    if a == 'Y':
        if b >= 37: cnt_arr[0] += 1
        else: cnt_arr[2] += 1
    else:
        if b >= 37: cnt_arr[1] += 1
        else: cnt_arr[3] += 1

print(*cnt_arr, 'E' if cnt_arr[0] >= 2 else '')