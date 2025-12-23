n = int(input())
arr = list(map(int, input().split()))

cnt_arr = [0] * 10
for el in arr:
    cnt_arr[el] += 1

for el in cnt_arr[1:]:
    print(el)