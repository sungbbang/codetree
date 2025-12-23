a, b = map(int, input().split())

cnt_arr = [0] * 10
while a > 1:
    cnt_arr[a % b] += 1
    a //= b

print(sum(el ** 2 for el in cnt_arr))